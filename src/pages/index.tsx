import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import LeftSection from '@/components/start/LeftSection';
import RightSection from '@/components/start/RightSection';
import { BaseWrapper } from '@/components/common/Container';
import { GetLoginUser } from './api/auth/authApi';
import AuthStore from '@/store/auth/authStore';

const Container = styled(BaseWrapper)`
  height: 70vh;
`;

export const Start = () => {
  const [id, setId] = useState<number | undefined>(undefined);
  const setAuthData = useSetRecoilState(AuthStore);

  useEffect(() => {
    const storedId = localStorage.getItem('id');
    if (storedId) {
      setId(Number(storedId));
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
      <Container>
        <LeftSection />

        <RightSection />
      </Container>
    </ResponsiveLayout>
  );
};

export default Start;
