import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import AuthStore from '@/store/auth/authStore';
import calculateDaysSince from '@/utils/daysCalculate';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { Api } from '@/utils/apis';

const HeaderContainer = styled.header(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '86px',
  backgroundColor: theme.colors.white,
}));

const Wrapper = styled.div`
  display: flex;
  width: 1308px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LogoAndIntro = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 770px;
`;

const Menu = styled.nav(({ theme }) => ({
  display: 'flex',
  width: '230px',
  height: '100%',
  marginLeft: '20px',

  '.wrapper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
  },

  '.text': {
    fontSize: `${theme.typography.title3.fontSize}px`,
    fontWeight: theme.typography.title3.fontWeight,
    lineHeight: `${theme.typography.title3.lineHeight}px`,
  },
}));

const LoginButton = styled.button(({ theme }) => ({
  width: '108px',
  height: '48px',
  padding: '0.5rem 1rem',
  border: `2px solid ${theme.colors.green[0]}`,
  borderRadius: '20px',
  background: `${theme.colors.white}`,
  color: `${theme.colors.green[0]}`,
  cursor: 'pointer',
  fontSize: `${theme.typography.text4.fontSize}px`,
  fontWeight: theme.typography.text4.fontWeight,
  lineHeight: `${theme.typography.text4.lineHeight}px`,
  '&:hover': {
    background: theme.colors.green[0],
    color: theme.colors.white,
  },
}));

const LoginProfileWrapper = styled.div(({ theme }) => ({
  height: '86px',
  width: '600px',
  padding: '10 0 10 10',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  fontSize: `${theme.typography.title2.fontSize}px`,
  fontWeight: theme.typography.title2.fontWeight,
  lineHeight: `${theme.typography.title2.lineHeight}px`,

  '.top': {
    display: 'flex',
    alignItems: 'center',
  },

  '.img': {
    width: '36px',
    height: '36px',
  },

  '.nickname': {
    color: theme.colors.green[0],
    marginLeft: '10px',
  },

  '.welcome': {
    marginLeft: '10px',
  },

  '.bottom': {
    fontSize: `${theme.typography.text4.fontSize}px`,
    fontWeight: theme.typography.text4.fontWeight,
    lineHeight: `${theme.typography.text4.lineHeight}px`,
    display: 'flex',
  },
}));

const LogoutButton = styled.button(({ theme }) => ({
  width: '108px',
  height: '48px',
  gap: '10px',
  padding: '10px 8px',
  borderRadius: '48px',
  backgroundColor: 'inherit',
  fontSize: `${theme.typography.title3.fontSize}px`,
  fontWeight: theme.typography.title3.fontWeight,
  color: theme.colors.gray[4],

  border: `1px solid ${theme.colors.gray[4]}`,
  cursor: 'pointer',
  // outline: 'none', // 포커스 아웃라인 제거
  ':active': {
    // 클릭 시 스타일
    borderColor: theme.colors.gray[4],
    backgroundColor: theme.colors.gray[2], // 클릭 시 배경색 변경
  },
  ':focus': {
    // 포커스 시 스타일
    backgroundColor: theme.colors.gray[2], // 클릭 시 배경색 변경
    boxShadow: `0 0 0 2px ${theme.colors.gray[4]}`, // 포커스 시 쉐도우 효과
  },
  ':hover': {
    backgroundColor: theme.colors.gray[5], // 클릭 시 배경색 변경
  },
}));

const HorizontalHeader = () => {
  const router = useRouter();
  const onLoginPage = () => {
    router.push('/login');
  };

  const [authData, setAuthData] = useRecoilState(AuthStore);

  const daysSinceJoining = calculateDaysSince(authData.createdDateTime);

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

  const onLogout = () => {
    logoutMutate({
      undefined,
    });
  };

  const onMyPage = () => {
    router.push('/mypage');
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoAndIntro>
          <Image
            src="headerLogo.svg"
            alt="Header Logo"
            width={158}
            height={86}
          />
          <Menu>
            <div
              className="wrapper"
              role="button"
              tabIndex={0}
              onClick={onMyPage}
              onKeyDown={onMyPage}
            >
              <Image src="house.svg" alt="house" width={32} height={32} />
              <div className="text">홈</div>
            </div>
            <div
              className="wrapper"
              role="button"
              tabIndex={0}
              onClick={onMyPage}
              onKeyDown={onMyPage}
            >
              <Image src="user.svg" alt="user" width={32} height={32} />
              <div className="text">MY</div>
            </div>
          </Menu>
        </LogoAndIntro>
        {authData.isLogin ? (
          <LoginProfileWrapper>
            <div className="top">
              <Image
                src="avatar.svg"
                alt="Profile"
                width={36}
                height={36}
                className="img"
              />
              <span className="nickname">
                {authData.nickname}
                님,
              </span>
              <span className="welcome">어서오세요!</span>
            </div>
            <div className="bottom">
              함께한지
              <div className="nickname">{daysSinceJoining}</div>
              <div>일째 🔥</div>
            </div>
            <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
          </LoginProfileWrapper>
        ) : (
          <LoginButton onClick={onLoginPage}>로그인</LoginButton>
        )}
      </Wrapper>
    </HeaderContainer>
  );
};

export default HorizontalHeader;
