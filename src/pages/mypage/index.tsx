import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import { GetLoginUser } from '../api/auth/authApi';
import AuthStore from '@/store/auth/authStore';
import NicknameChangeModal from '@/components/mypage/NicknameChangeModal';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.white[0], // 테마의 회색 색상 사용
  position: 'relative',
}));

const TopBox = styled.div(({ theme }) => ({
  display: 'flex',
  width: '1161px',
  height: '475px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  border: `1px solid ${theme.colors.gray[5]}`,
  marginBottom: '20px',
}));

const Title = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  width: '1161px',
}));

const Description = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  position: 'absolute',
  top: '-25px',
  right: '20px',
}));

const LineWrapper = styled.div(({ theme }) => ({
  width: '916px',
  height: '44px',
  gap: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.smallTitle': {
    color: theme.colors.green[0],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },

  '.smallWrapper': {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.title': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.text1.fontSize,
    fontWeight: theme.typography.text1.fontWeight,
    lineHeight: `${theme.typography.text1.lineHeight}px`,
    marginRight: '15px',
  },

  '.line': {
    backgroundColor: theme.colors.green[0],
    width: '534px',
    height: '8px',
  },

  '.description': {
    color: theme.colors.gray[4],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
  },
}));

const BottomBox = styled.div`
  width: 1160px;
  height: 396px;
  display: flex;
  flex-direction: column;
`;

const AccountBox = styled.div(({ theme }) => ({
  width: '1160px',
  height: '252px',
  borderRadius: '16px',
  border: `1px solid ${theme.colors.green[0]}`,
  padding: '10px 0 0 20px',

  '.title': {
    width: '1160px',
    height: '76px',
    color: theme.colors.gray[3],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },

  '.description': {
    width: '1160px',
    // height: '176px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '20px',
    // padding: '20px 40px 40px 28px',
  },

  '.infoWrapper': {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '918px',
    height: '84px',
  },

  '.flex': {
    display: 'flex',
    flexDirection: 'column',
    width: '720px',
    height: '84px',
    justifyContent: 'space-around',
  },

  '.infoName': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.text1.fontSize,
    fontWeight: theme.typography.text1.fontWeight,
    lineHeight: `${theme.typography.text1.lineHeight}px`,
  },

  '.infoEmail': {
    color: theme.colors.gray[4],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },
}));

const Button = styled.button(({ theme }) => ({
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  color: theme.colors.gray[4],
  border: `1px solid ${theme.colors.gray[5]}`,
  padding: '12px 24px',
  backgroundColor: theme.colors.white,
  borderRadius: '12px',
}));

const PasswordBox = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${theme.colors.gray[5]}`,
  borderRadius: '12px',
  marginTop: '20px',
  padding: '10px 0 0 20px',
  width: '1150px',
  height: '100px',
  '.imgWrapper': {
    width: '918px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },

  '.title': {
    color: theme.colors.gray[1],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },

  '.btnWrapper': {
    display: 'flex',
    width: '160px',
  },
}));

const MyPage = () => {
  const setAuthData = useSetRecoilState(AuthStore);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const id = Number(localStorage.getItem('id'));

  useEffect(() => {
    if (!id) {
      router.push('/');
    }
  }, []);

  const { data: LoginUserData, refetch } = GetLoginUser(id);

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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const handlePasswordChange = () => {
    router.push('/mypage/password');
  };

  return (
    <ResponsiveLayout>
      <Container>
        <Title>My</Title>
        <TopBox>
          <Image src="ball.svg" alt="ball" width={190} height={215} />
          <Description>
            <p>가장 어려운 일을 하는 것은 시작하는 것이다.</p>
            <p> 나머지는 자연스럽게 따라온다. 2줄까지 작성가능</p>
          </Description>

          <LineWrapper>
            <div className="smallTitle">
              LV
              {LoginUserData?.level}
            </div>
            <div className="smallWrapper">
              <span className="title">씨앗</span>
              <div className="line" />
            </div>
            <div className="description">레벨업까지 목표달성 3/6</div>
          </LineWrapper>
        </TopBox>

        <BottomBox>
          <AccountBox>
            <div className="title">계정 정보</div>
            <div className="description">
              <Image
                src="mainAvatar.svg"
                alt="mainAvatar"
                width={142}
                height={128}
              />
              <div className="infoWrapper">
                <div className="flex">
                  <div className="infoName">{LoginUserData?.nickname}</div>
                  <div className="infoEmail">{LoginUserData?.email}</div>
                </div>
                <Button onClick={handleModalOpen}>닉네임 변경</Button>
              </div>
            </div>
          </AccountBox>
          <PasswordBox>
            <div className="imgWrapper">
              <Image src="lock.svg" alt="lock" width={40} height={40} />
              <div className="title">비밀번호</div>
            </div>
            <div className="btnWrapper">
              <Button onClick={handlePasswordChange}>변경</Button>
            </div>
          </PasswordBox>
        </BottomBox>
      </Container>
      {isModalOpen && LoginUserData && (
        <NicknameChangeModal
          onClose={handleModalClose}
          currentNickname={LoginUserData.nickname}
          id={id}
          refetch={refetch}
        />
      )}
    </ResponsiveLayout>
  );
};

export default MyPage;
