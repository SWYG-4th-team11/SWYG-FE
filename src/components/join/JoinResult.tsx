import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
  width: 356px;
  height: 243px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  width: 107px;
  height: 155px;
  gap: 12px;
`;

const Text = styled.div(({ theme }) => ({
  fontSize: theme.typography.text1.fontSize,
  fontWeight: theme.typography.text1.fontWeight,
  lineHeight: `${theme.typography.text1.lineHeight}px`,
  color: theme.colors.green[0],
}));

const Description = styled.div(({ theme }) => ({
  width: '356px',
  height: '68px',
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
}));

const JoinResult = () => (
  <Container>
    <Title>
      <Image src="/checkGreen.svg" alt="체크" width={107} height={107} />
      <Text>가입완료</Text>
    </Title>
    <Description>11팀님, 환영합니다.</Description>
  </Container>
);

export default JoinResult;
