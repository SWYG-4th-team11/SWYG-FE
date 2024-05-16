import React, { useState } from 'react';
import styled from '@emotion/styled';

import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';

import JoinResult from '@/components/join/JoinResult';
import JoinBox from '@/components/join/JoinBox';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.white[0], // 테마의 회색 색상 사용
  height: '100vh', // 전체 높이
}));

const Join = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const onChangeSuccess = () => {
    setSuccess(true);
  };

  return (
    <ResponsiveLayout>
      <Container>
        {success ? (
          <JoinResult />
        ) : (
          <JoinBox onChangeSuccess={onChangeSuccess} />
        )}
      </Container>
    </ResponsiveLayout>
  );
};

export default Join;
