import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

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

const Menu = styled.nav`
  display: flex;
  width: 230px;
  height: 100%;
  margin-left: 20px;
`;

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

const HorizontalHeader = () => {
  const router = useRouter();
  const onLoginPage = () => {
    router.push('/login');
  };
  return (
    <HeaderContainer>
      <Wrapper>
        <LogoAndIntro>
          <Image
            src="/headerLogo.svg"
            alt="Header Logo"
            width={158}
            height={86}
          />
          <Menu>서비스 소개</Menu>
        </LogoAndIntro>
        <LoginButton onClick={onLoginPage}>로그인</LoginButton>
      </Wrapper>
    </HeaderContainer>
  );
};

export default HorizontalHeader;
