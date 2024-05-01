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

const Fourth = () => (
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
        이제 바로 키워유 서비스를 이용하며
        <br />
        자신의 만다라트를 다각화하고 이를 이뤄가며 목표를 이뤄보세요!
      </Description>
    </SpeechBubble>
  </>
);

export default Fourth;
