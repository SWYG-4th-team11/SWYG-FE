import React, { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';

import JoinResult from '@/components/join/JoinResult';
import JoinBox from '@/components/join/JoinBox';
import { BaseWrapper } from '@/components/common/Container';

const Container = styled(BaseWrapper)`
  /* height: 100vh; */
  flex-direction: column;
`;

const Join = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const onChangeSuccess = () => {
    setSuccess(true);
  };

  return (
    <ResponsiveLayout>
      <Head>
        <title>만다르트 회원가입</title>
        <meta name="description" content="만다라트 회원가입" />
        <meta name="keywords" content="만다라트,mandalart,signup" />
      </Head>
      ;
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
