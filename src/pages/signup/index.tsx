import React, { useState } from 'react';
import styled from '@emotion/styled';

import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';

import JoinResult from '@/components/join/JoinResult';
import JoinBox from '@/components/join/JoinBox';
import { BaseWrapper } from '@/components/common/Container';

const Container = styled(BaseWrapper)`
  height: 100vh;
  flex-direction: column;
`;

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
