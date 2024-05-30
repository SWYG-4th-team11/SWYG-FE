import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import Scheduler from '@/components/main/Scheduler';
import CharacterContainer from '@/components/main/CharacterContainer';
import MandartHeader from '@/components/main/MandartHeader';
import MandartMain from '@/components/main/MandartMain';
import { GetLoginUser } from './api/auth/authApi';
import AuthStore from '@/store/auth/authStore';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 1100px;
  margin-top: 30px;
  /* border: 1px solid black; */
`;
const SubContainer1 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
  height: 100%;
  /* border: 1px solid black; */
`;
const SubContainer2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 900px;
  /* border: 1px solid black; */
`;

const MandartContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border: 1px solid rgba(128, 128, 128, 0.6);
  border-radius: 18px 18px 18px 18px;
  padding: 20px 0px 30px 0px;
  margin: 80px 0px 30px 10px;
  width: 925px;
  height: 900px;
  /* border: 1px solid black; */
  @media (max-width: 1300px) {
    width: 600px;
    height: 900px;
  }
`;

export const Main = () => {
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
        mandalartExists: LoginUserData.mandalartExists,
        mandalartId: LoginUserData.mandalartId,
      });
    }
  }, [LoginUserData, setAuthData]);

  return (
    <ResponsiveLayout>
      <MainContainer>
        <SubContainer1>
          <Scheduler />
          <CharacterContainer />
        </SubContainer1>
        <SubContainer2>
          <MandartContainer>
            <MandartHeader />
            <MandartMain />
          </MandartContainer>
        </SubContainer2>
      </MainContainer>
    </ResponsiveLayout>
  );
};

export default Main;
