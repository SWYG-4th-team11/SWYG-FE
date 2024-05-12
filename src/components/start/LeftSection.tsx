import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ContentSection = styled.section(({ theme }) => ({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  widows: '481px',
  height: '196px',
  fontSize: `${theme.typography.title1.fontSize}px`,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
}));

const TextFrame = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  marginTop: '-1px',
  position: 'relative',
  whiteSpace: 'nowrap',
  width: 'fit-content',
}));

const Description = styled.p(({ theme }) => ({
  color: theme.colors.gray[1],
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  textAlign: 'start',
}));

const BtnWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: row;
  width: 460px;
  gap: 12px 12px;
  position: relative;
  margin-top: 40px;
`;

const StartBtn = styled.button(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  gap: '16px',
  height: '64px',
  padding: '20px 24px 20px 40px',
  border: `2px solid ${theme.colors.green[0]}`,
  backgroundColor: theme.colors.green[0],
  color: theme.colors.white,
  borderRadius: '40px',
  cursor: 'pointer',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
}));

const JoinBtn = styled.button(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  gap: '16px',
  height: '64px',
  padding: '20px 24px 20px 40px',
  border: `2px solid ${theme.colors.gray[2]}`,
  backgroundColor: theme.colors.white,
  color: theme.colors.gray[2],
  borderRadius: '40px',
  cursor: 'pointer',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
}));

const BtnText = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  textAlign: 'left',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
}));

const LeftSection = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/serviceInformation');
  };

  const handleJoin = () => {
    router.push('/join');
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
