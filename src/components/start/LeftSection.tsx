import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import AuthStore from '@/store/auth/authStore';
import {
  ContentSection,
  TextFrame,
  Title,
  Description,
  BtnWrapper,
  StartBtn,
  BtnText,
  JoinBtn,
} from '@/styles/start/leftStyles';

const LeftSection = () => {
  const router = useRouter();
  const authData = useRecoilValue(AuthStore);

  const handleStart = () => {
    // router.push('/introduction');
    if (authData.mandalartExists) {
      router.push('/main');
    } else {
      router.push('/introduction');
    }
  };

  const handleJoin = () => {
    if (authData.isLogin) {
      alert('이미 로그인되어 있습니다.');
    } else {
      router.push('/signup');
    }
  };

  return (
    <ContentSection>
      <TextFrame>
        <Title>목표 달성을 위하여 함께!</Title>
        <Description>
          만다라트 목표 관리법을 토대로
          <br />
          당신만의 루틴을 만들고, 달성해나가며
          <br />
          내일보다 성장한 나를 만들어보세요!
        </Description>
      </TextFrame>

      <BtnWrapper>
        <StartBtn onClick={handleStart}>
          <BtnText>시작하기</BtnText>
          <Image
            src="/arrowForwardWhite.svg"
            alt="Arrow Right"
            width={24}
            height={24}
          />
        </StartBtn>
        <JoinBtn onClick={handleJoin}>
          <BtnText>회원가입</BtnText>
          <Image
            src="/arrowForwardBlack.svg"
            alt="Arrow Right"
            width={24}
            height={24}
          />
        </JoinBtn>
      </BtnWrapper>
    </ContentSection>
  );
};

export default LeftSection;
