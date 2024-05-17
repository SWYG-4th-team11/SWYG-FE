import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { GetLoginUser } from '../api/auth/authApi';
import AuthStore from '@/store/auth/authStore';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';

import {
  BoxWrapper,
  BtnWrapper,
  FormContainer,
  InputGroup,
  Label,
  Title,
} from '@/styles/join/join';
import { BigInput } from '@/components/common/Input';
import { ErrorText } from '@/components/join/JoinBox';
import { NextButton } from '@/components/common/Button';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { Api } from '@/utils/apis';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.white[0], // 테마의 회색 색상 사용
  height: '100vh', // 전체 높이
}));

const Description = styled.div(({ theme }) => ({
  color: theme.colors.gray[1],
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  marginBottom: '20px',
}));

const Password = () => {
  const id = Number(localStorage.getItem('id'));
  const router = useRouter();
  const setAuthData = useSetRecoilState(AuthStore);

  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordCheck, setNewPasswordCheck] = useState<string>('');
  const [errors, setErrors] = useState({
    password: false,
    newPassword: false,
    newPasswordCheck: false,
  });

  useEffect(() => {
    if (!id) {
      router.push('/');
    }
  }, []);

  const { data: LoginUserData } = GetLoginUser(id);

  useEffect(() => {
    if (LoginUserData) {
      setAuthData({
        isLogin: true,
        id: LoginUserData.id,
        email: LoginUserData.email,
        nickname: LoginUserData.nickname,
        createdDateTime: LoginUserData.createdAt,
      });
    } else {
      router.push('/');
    }
  }, [LoginUserData, setAuthData]);

  const validateInputs = () => {
    const newErrors = {
      password: !password,
      newPassword: !newPassword,
      newPasswordCheck: !newPasswordCheck || newPassword !== newPasswordCheck,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const { mutate: logoutMutate } = useCustomMutation('post', '/user/logout', {
    onSuccess: () => {
      setAuthData({
        id: null,
        isLogin: false,
        email: '',
        nickname: '',
        createdDateTime: '',
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
      changePasswordMutate({
        id,
        password,
        newPassword,
      });
    }
  };
  return (
    <ResponsiveLayout>
      <Container>
        <BoxWrapper>
          <Title>회원가입</Title>
          <Description>
            주기적인 비밀번호 변경을 통해 개인정보를 안정하게 보호하세요
          </Description>

          <FormContainer>
            <InputGroup>
              <Label>비밀번호</Label>
              <BtnWrapper>
                <BigInput
                  placeholder="4~16자의 영문 대소문자의 숫자만 입력"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password}
                />
              </BtnWrapper>
              {errors.password && (
                <ErrorText>비밀번호를 작성해주세요</ErrorText>
              )}
            </InputGroup>

            <InputGroup>
              <Label>새 비밀번호</Label>
              <BtnWrapper>
                <BigInput
                  placeholder="4~16자의 영문 대소문자의 숫자만 입력"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  error={errors.newPassword}
                />
              </BtnWrapper>
              {errors.password && (
                <ErrorText>비밀번호를 작성해주세요</ErrorText>
              )}
            </InputGroup>

            <InputGroup>
              <Label>새 비밀번호 확인</Label>
              <BtnWrapper>
                <BigInput
                  placeholder="4~16자의 영문 대소문자의 숫자만 입력"
                  type="password"
                  value={newPasswordCheck}
                  onChange={(e) => setNewPasswordCheck(e.target.value)}
                  error={errors.newPasswordCheck}
                />
              </BtnWrapper>
              {errors.password && (
                <ErrorText>비밀번호를 작성해주세요</ErrorText>
              )}
            </InputGroup>
          </FormContainer>
        </BoxWrapper>
        <NextButton onClick={handlePasswordChange}>변경완료</NextButton>
      </Container>
    </ResponsiveLayout>
  );
};

export default Password;
