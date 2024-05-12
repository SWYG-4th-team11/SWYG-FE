import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const ImageWrapper = styled.div`
  height: 239px;
  width: 196px;
`;

const SpeechBubble = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.white,
  borderRadius: '20px',
  border: `1px solid ${theme.colors.gray[4]}`,
  marginTop: '-2px',
  width: '860px',
  height: '203px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  position: 'absolute',
  top: '-1.5rem',
  backgroundColor: theme.colors.green[0],
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100px',
  gap: '10px',
  padding: '5px 28px',
  marginLeft: '1.5rem',
  left: 0,
}));

const Description = styled.p(({ theme }) => ({
  color: theme.colors.gray[1],
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  width: '673px',
  height: '114px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Seconds = () => (
  <>
    <ImageWrapper>
      <Image
        src="/ball.svg"
        alt="ServiceInformation"
        width={239}
        height={196}
      />
    </ImageWrapper>

    <SpeechBubble>
      <Title>만다라</Title>
      <Description>
        키워유는 사용자가 설정한 만다라트와 이를 달성하기 위해 해야 할
        <br />
        데일리 루틴을 정리하여 목표 달성을 도와줄 거예요!
        <br />
        아래 ‘이용방법 확인하기’ 버튼을 누르면 서비스 이용 방법을 볼 수 있어요!
      </Description>
    </SpeechBubble>
  </>
);

export default Seconds;
