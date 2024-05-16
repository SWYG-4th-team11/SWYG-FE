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
  width: 300px;
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
  marginTop: '20px',
  height: '68px',
  width: '660px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
}));

const PasswordResult = () => (
  <Container>
    <Title>
      <Image src="/checkGreen.svg" alt="체크" width={107} height={107} />
      <Text>비밀번호 변경 완료</Text>
    </Title>
    <Description>
      비밀번호 변경이 완료되었습니다.
      <br />
      새로운 비밀번호로 로그인 해주세요!
    </Description>
  </Container>
);

export default PasswordResult;
