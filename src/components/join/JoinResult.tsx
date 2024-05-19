import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextButton } from '../common/Button';
import {
  Container,
  Title,
  Text,
  Description,
} from '@/styles/join/joinBoxStyles';

const JoinResult = () => {
  const router = useRouter();
  const handleJoin = () => {
    router.push('/join');
  };
  return (
    <Container>
      <Title>
        <Image src="/checkGreen.svg" alt="체크" width={107} height={107} />
        <Text>가입완료</Text>
      </Title>
      <Description>11팀님, 환영합니다.</Description>

      <NextButton onClick={handleJoin}>로그인 화면으로 돌아가기</NextButton>
    </Container>
  );
};

export default JoinResult;
