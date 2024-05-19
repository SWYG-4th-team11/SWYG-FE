import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Title as baseTitle } from '@/components/common/Title';
import { BaseWrapper } from '@/components/common/Container';
import { Description } from '@/components/common/Description';
import { FormContainer } from '@/components/common/From';
import { BigInput } from '@/components/common/Input';
import { NextButton } from '@/components/common/Button';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

const Container = styled(BaseWrapper)`
  height: 60vh;
  flex-direction: column;
`;

const Title = styled(baseTitle)`
  width: 500px;
`;

const Button = styled(NextButton)`
  margin-top: 100px;
`;

const FindPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');

  const [errors, setErrors] = useState({
    email: false,
  });

  const validateInputs = () => {
    const newErrors = {
      email: !email,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const { mutate: findPasswordMutate, isPending } = useCustomMutation(
    'post',
    '/send-mail/password',
    {
      onSuccess: () => {
        router.push('/join');
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const onSubmit = () => {
    console.log('email', email);
    if (validateInputs()) {
      findPasswordMutate({ email });
    }
  };

  return (
    <ResponsiveLayout>
      <Container>
        {isPending && <LoadingSpinner />}
        <Title>임시 비밀번호 발급</Title>
        <Description>
          임시 비밀번호를 발급받기 위한 이메일 주소를 입력 해 주세요.
        </Description>

        <FormContainer>
          <BigInput
            placeholder="이메일(아이디) 주소를 입력 해 주세요."
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Button onClick={onSubmit}>임시 비밀번호 발송</Button>
        </FormContainer>
      </Container>
    </ResponsiveLayout>
  );
};

export default FindPassword;
