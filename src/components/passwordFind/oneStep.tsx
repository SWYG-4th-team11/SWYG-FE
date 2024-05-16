import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1(({ theme }) => ({
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  marginBottom: '1rem',
  width: '248px',
  height: '68px',
  whiteSpace: 'nowrap',
  textAlign: 'center',
}));

const Description = styled.p(({ theme }) => ({
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  color: theme.colors.gray[2],
  width: '601px',
  height: '36px',
  textAlign: 'center',
  whiteSpace: 'nowrap',
}));

const Form = styled.div`
  /* width: 80%; */
  /* max-width: 600px; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  width: 880px;
  display: flex;
  gap: 16px;
  position: relative;
`;

const Input = styled.input(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.gray[6],
  borderRadius: '6px',
  border: `1px solid ${theme.colors.gray[3]}`,
  display: 'flex',
  height: '52px',
  padding: '12px 10px',
  width: '710px',
  whiteSpace: 'nowrap',

  '&::placeholder': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
  },
}));

const InputSingle = styled.input(({ theme }) => ({
  width: '840px',
  borderRadius: '6px',
  backgroundColor: theme.colors.gray[6],
  border: `1px solid ${theme.colors.gray[3]}`,
  display: 'flex',
  height: '52px',
  padding: '12px 20px',
  whiteSpace: 'nowrap',

  '&::placeholder': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
  },
}));

const Button = styled.button(({ theme }) => ({
  border: '4px solid',
  borderRadius: '6px',
  gap: '10px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green[0],
  width: '140px',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
}));

const OneStep = () => (
  <>
    <Title>비밀번호 찾기</Title>
    <Description>
      기존에 가입한 이메일 주소를 입력하여 비밀번호를 직접 변경해주세요.
    </Description>
    <Form>
      <InputContainer>
        <Input placeholder="이메일(아이디)주소를 입력 해주세요." />
        <Button>인증번호 전송</Button>
      </InputContainer>
      <InputSingle placeholder="인증번호를 입력하세요" />
    </Form>
  </>
);

export default OneStep;
