import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import JoinBox from '@/components/join/joinBox';
import JoinResult from '@/components/join/JoinResult';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.gray[6], // 테마의 회색 색상 사용
  height: '100vh', // 전체 높이
}));
const NextButton = styled.button(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.green[0],
  borderRadius: '40px',
  color: theme.colors.white,
  gap: '16px',
  height: '84px',
  justifyContent: 'center',
  padding: '20px 24px',
  width: '860px',
  cursor: 'pointer',
  fontSize: theme.typography.title2.fontSize,
  fontWeight: theme.typography.title2.fontWeight,
  lineHeight: `${theme.typography.title2.lineHeight}px`,
  marginTop: '3rem',
  border: 'none',
}));

const Join = () => {
  const router = useRouter();
  const [success, setSuccess] = useState<boolean>(false);

  const onSuccess = () => {
    setSuccess(true);
    if (success) router.push('/login');
  };

  return (
    <ResponsiveLayout>
      <Container>
        {success ? <JoinResult /> : <JoinBox />}

        <NextButton onClick={onSuccess}>
          {success ? '로그인 화면으로 돌아가기' : '가입하기'}
        </NextButton>
      </Container>
    </ResponsiveLayout>
  );
};

export default Join;
