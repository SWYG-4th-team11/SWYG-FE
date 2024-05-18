import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { GetLoginUser } from '../api/auth/authApi';
import AuthStore from '@/store/auth/authStore';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import PasswordChange from '@/components/passwordChange/PasswordChange';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.white[0], // 테마의 회색 색상 사용
  height: '80vh', // 전체 높이
}));

const ChangePassword = () => {
  const [id, setId] = useState<number | undefined>(undefined);
  const setAuthData = useSetRecoilState(AuthStore);
  const router = useRouter();

  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (storedId) {
      setId(Number(storedId));
    } else {
      router.push('/');
    }
  }, []);

  const { data: LoginUserData } = GetLoginUser(
    { id: Number(id) },
    {
      enabled: id !== undefined,
      queryKey: ['user', { id: Number(id) }],
    }
  );

  useEffect(() => {
    if (LoginUserData) {
      setAuthData({
        isLogin: true,
        id: LoginUserData.id,
        email: LoginUserData.email,
        nickname: LoginUserData.nickname,
        createdAt: LoginUserData.createdAt,
        updatedAt: LoginUserData.updatedAt,
        level: LoginUserData.level,
        exp: LoginUserData.exp,
      });
    }
  }, [LoginUserData, setAuthData]);

  return (
    <ResponsiveLayout>
      <Container>{id && <PasswordChange id={id} />}</Container>
    </ResponsiveLayout>
  );
};

export default ChangePassword;
