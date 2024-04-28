import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeaderContainer = styled.header(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '86px',
  backgroundColor: theme.colors.white, // 이 부분은 테마의 색상 값을 참조합니다.
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
  font-size: 1rem; // 실제 필요한 크기로 조정하세요.
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
  fontSize: `${theme.typography.text4.fontSize}px`, // 테마에서 fontSize 가져오기
  fontWeight: theme.typography.text4.fontWeight, // 테마에서 fontWeight 가져오기
  lineHeight: `${theme.typography.text4.lineHeight}px`, // 테마에서 lineHeight 가져오기
  '&:hover': {
    background: theme.colors.green[0], // 테마의 색상을 사용
    color: theme.colors.white,
  },
}));

const HorizontalHeader = () => (
  <HeaderContainer>
    <Wrapper>
      <LogoAndIntro>
        <Image
          src="/headerLogo.svg" // public 폴더의 경로로 설정
          alt="Header Logo" // 적절한 alt 텍스트를 제공
          width={158} // 실제 이미지의 크기에 맞게 조정
          height={86}
        />
        <Menu>서비스 소개</Menu>
      </LogoAndIntro>
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  </HeaderContainer>
);

export default HorizontalHeader;
