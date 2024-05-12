import React from 'react';
import styled from '@emotion/styled';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import LeftSection from '@/components/start/LeftSection';
import RightSection from '@/components/start/RightSection';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.gray[6], // 테마의 회색 색상 사용
  height: '100vh', // 전체 높이
}));

export const Start = () => (
  <ResponsiveLayout>
    <Container>
      <LeftSection />

      <RightSection />
    </Container>
  </ResponsiveLayout>
);

export default Start;
