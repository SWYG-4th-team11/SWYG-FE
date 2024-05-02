import React from 'react';
import styled from '@emotion/styled';

const BoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  textAlign: 'center',
  width: '160px',
  height: '68px',
  gap: '12px',
}));

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
  position: relative;
  width: 860px;
  height: 600px;
  /* background-color: red; */
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  width: 859px;
  height: 108px;
  /* margin-top: 20px; */
  margin-bottom: 20px;
`;

const Label = styled.label(({ theme }) => ({
  width: '120px',
  height: '32px',
  fontSize: theme.typography.title3.fontSize,
  fontWeight: theme.typography.title3.fontWeight,
  lineHeight: `${theme.typography.title3.lineHeight}px`,
}));

const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 859px;
  height: 72px;
  position: relative;
`;

const Input = styled.input(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.gray[5],
  borderRadius: '6px',
  gap: '10px',
  height: '40px',
  width: '736px',
  padding: '16px 20px',
  position: 'relative',

  '::plcaeholder': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fntSize,
    fontWeight: theme.typography.text3.fotWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'fixed',
    left: '0',
    top: '0',
    whiteSpace: 'nowrap',
    height: '30px',
    width: '203px',
  },
}));

const CheckButton = styled.button(({ theme }) => ({
  alignItems: 'center',
  border: '2px solid',
  borderColor: theme.colors.green[0],
  borderRadius: '6px',
  display: 'flex',
  gap: '10px',
  height: '74px',
  justifyContent: 'center',
  padding: '16px',
  position: 'relative',
  width: '115px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green[0],
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
}));

const SingleInput = styled.input(({ theme }) => ({
  width: '860px',
  height: '40px',
  padding: '16px 20px',
  marginTop: '20px',
  backgroundColor: theme.colors.gray[5],
  position: 'relative',
  gap: '10px',
  borderRadius: '6px',

  '::plcaeholder': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fntSize,
    fontWeight: theme.typography.text3.fotWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'fixed',
    left: '0',
    top: '0',
    whiteSpace: 'nowrap',
    height: '30px',
    width: '203px',
  },
}));

const JoinBox = () => (
  <BoxWrapper>
    <Title>회원가입</Title>
    <FormContainer>
      <InputGroup>
        <Label>닉네임</Label>
        <BtnWrapper>
          <Input placeholder="8자 이내로 입력 해주세요." />
          <CheckButton>중복 체크</CheckButton>
        </BtnWrapper>
      </InputGroup>

      <InputGroup>
        <Label>이메일</Label>
        <BtnWrapper>
          <Input placeholder="인증하기" />
          <CheckButton>인증하기</CheckButton>
        </BtnWrapper>
        <BtnWrapper>
          <SingleInput placeholder="인증번호 6자리를 입력 해주세요" />
        </BtnWrapper>
      </InputGroup>

      <InputGroup>
        <Label>비밀번호</Label>
        <BtnWrapper>
          <SingleInput placeholder="4~16자의 영문 대소문자의 숫자만 입력" />
        </BtnWrapper>
      </InputGroup>

      <InputGroup>
        <Label>비밀번호 확인</Label>
        <BtnWrapper>
          <SingleInput placeholder="4~16자의 영문 대소문자와 숫자만 입력" />
        </BtnWrapper>
      </InputGroup>
    </FormContainer>
  </BoxWrapper>
);

export default JoinBox;
