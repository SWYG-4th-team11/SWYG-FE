import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import AuthStore from '@/store/auth/authStore';
import { Api } from '@/utils/apis';
import { BoxWrapper, BtnWrapper, InputGroup } from '@/styles/join/joinStyles';
import { BigInput } from '@/components/common/Input';
import { NextButton } from '@/components/common/Button';
import { Description } from '@/components/common/Description';
import { Title as TitleBase } from '@/components/common/Title';
import { FormContainer } from '@/components/common/From';
import { Label } from '@/components/common/Label';
import { ConfirmText, ErrorText } from '@/components/common/Text';

const Title = styled(TitleBase)`
  width: 300px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

interface IPasswordChangeProps {
  id: number;
}

const PasswordChange = ({ id }: IPasswordChangeProps) => {
  const setAuthData = useSetRecoilState(AuthStore);
  const router = useRouter();

  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>('');
  const [errors, setErrors] = useState({
    password: false,
    newPassword: false,
    newPasswordCheck: false,
  });
  const [successInput, setSuccessInput] = useState({
    newPasswordCheck: false,
  });

  const validateInputs = () => {
    const newErrors = {
      password: !password,
      newPassword: !newPassword,
      newPasswordCheck: !newPasswordCheck || newPassword !== newPasswordCheck,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const handleNewPasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const newPasswordCheckValue = e.target.value;
    setNewPasswordCheck(newPasswordCheckValue);

    if (newPassword !== newPasswordCheckValue) {
      setErrors((prev) => ({ ...prev, newPasswordCheck: true }));
    } else {
      setErrors((prev) => ({ ...prev, newPasswordCheck: false }));
      setSuccessInput((prev) => ({ ...prev, newPasswordCheck: true }));
    }
  };

  const { mutate: logoutMutate } = useCustomMutation('post', '/user/logout', {
    onSuccess: () => {
      setAuthData({
        id: null,
        isLogin: false,
        email: '',
        nickname: '',
        createdAt: '',
        updatedAt: '',
        level: null,
        exp: null,
      });
      Api.removeToken();
      router.push('/');
    },
    onError: (error: string) => {
      console.error(error);
    },
  });

  const { mutate: changePasswordMutate } = useCustomMutation(
    'post',
    '/user/update-password',
    {
      onSuccess: (data) => {
        if (data) {
          logoutMutate({ undefined });
          router.push('/');
        }
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handlePasswordChange = () => {
    console.log('password', password);
    console.log('newPassword', newPassword);
    console.log('newPasswordCheck', newPasswordCheck);
    console.log('id', id);
    if (validateInputs()) {
      console.log('password', password);
      changePasswordMutate({
        id,
        password,
        newPassword,
      });
    }
  };
  return (
    <>
      <BoxWrapper>
        <Title>비밀번호 변경</Title>
        <Description>
          주기적인 비밀번호 변경을 통해 개인정보를 안정하게 보호하세요
        </Description>

        <FormContainer>
          <InputGroup>
            <Label>비밀번호</Label>
            <BtnWrapper>
              <BigInput
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />
            </BtnWrapper>
            {errors.password && <ErrorText>비밀번호를 작성해주세요</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>새 비밀번호</Label>
            <BtnWrapper>
              <BigInput
                placeholder="비밀번호를 입력해주세요"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={errors.newPassword}
              />
            </BtnWrapper>
            {errors.password && <ErrorText>비밀번호를 작성해주세요</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>새 비밀번호 확인</Label>
            <BtnWrapper>
              <BigInput
                placeholder="새 비밀번호를 한번 더 입력해주세요"
                type="password"
                value={newPasswordCheck}
                onChange={handleNewPasswordCheck}
                error={errors.newPasswordCheck}
              />
            </BtnWrapper>
            {errors.newPasswordCheck && (
              <ErrorText>비밀번호가 틀렸습니다.</ErrorText>
            )}
            {successInput.newPasswordCheck && (
              <ConfirmText>비밀번호가 일치합니다.</ConfirmText>
            )}
          </InputGroup>
        </FormContainer>
      </BoxWrapper>
      <NextButton onClick={handlePasswordChange}>변경완료</NextButton>
    </>
  );
};

export default PasswordChange;
