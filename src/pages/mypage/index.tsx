import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import { GetLoginUser } from '../api/auth/authApi';
import AuthStore from '@/store/auth/authStore';
import NicknameChangeModal from '@/components/mypage/NicknameChangeModal';
import { Container } from '@/styles/mypage/mypageStyles';
import TopBoxCom from '@/components/mypage/TopBoxCom';
import BottomCom from '@/components/mypage/BottomCom';

const MyPage = () => {
  const [id, setId] = useState<number | undefined>(undefined);
  const setAuthData = useSetRecoilState(AuthStore);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ResponsiveLayout>
      <Container>
        <TopBoxCom />
        <BottomCom handleModalOpen={handleModalOpen} />
      </Container>
      {isModalOpen && LoginUserData && id && (
        <NicknameChangeModal
          onClose={handleModalClose}
          currentNickname={LoginUserData.nickname}
          id={id}
        />
      )}
    </ResponsiveLayout>
  );
};

export default MyPage;
