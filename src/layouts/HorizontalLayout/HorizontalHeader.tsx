import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { ReactSVG } from 'react-svg';
import styled from '@emotion/styled';
import AuthStore from '@/store/auth/authStore';
import calculateDaysSince from '@/utils/daysCalculate';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { Api } from '@/utils/apis';
import {
  HeaderContainer,
  Wrapper,
  LogoAndIntro,
  Menu,
  LoginButton,
  LoginProfileWrapper,
  LogoutButton,
  ServiceText,
} from '@/styles/common/headerStyles';

const IconWrapper = styled.div<{ isActive: boolean }>`
  svg {
    width: 32px;
    height: 32px;
    path {
      fill: ${({ isActive }) => (isActive ? '#03C75A' : '#9B9B9B')};
    }
  }
`;

const HorizontalHeader = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const onLoginPage = () => {
    router.push('/join');
  };

  const [authData, setAuthData] = useRecoilState(AuthStore);
  const daysSinceJoining = calculateDaysSince(authData.createdAt);

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
        mandalartExists: false,
        mandalartId: null,
      });
      Api.removeToken();
      router.push('/');
    },
    onError: () => {
      alert('다시 시도해 주세요.');
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

  const onHome = () => {
    router.push('/');
  };

  const onIntroduction = () => {
    router.push('/service');
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
            className="img"
            onClick={onHome}
          />
          {authData.isLogin ? (
            <Menu>
              <div
                className="wrapper"
                role="button"
                tabIndex={0}
                onClick={onHome}
                onKeyDown={onHome}
              >
                <IconWrapper isActive={currentPath === '/'}>
                  <ReactSVG src="house.svg" />
                </IconWrapper>
                <div className="text">홈</div>
              </div>
              <div
                className="wrapper"
                role="button"
                tabIndex={0}
                onClick={onMyPage}
                onKeyDown={onMyPage}
              >
                <IconWrapper isActive={currentPath === '/mypage'}>
                  <ReactSVG src="user.svg" />
                </IconWrapper>
                <div className="text">MY</div>
              </div>
            </Menu>
          ) : (
            <Menu>
              <ServiceText onClick={onIntroduction}>서비스 소개</ServiceText>
            </Menu>
          )}
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
