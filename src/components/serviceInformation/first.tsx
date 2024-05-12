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

const First = () => (
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
        안녕하세요? 저는 목표 관리 비서 만다라예요!
        <br />
        다시, 만다라트에 대해 궁금한 사항들을 위해 간단히 설명드릴게요!
      </Description>
    </SpeechBubble>
  </>
);

export default First;
