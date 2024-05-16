import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { CheckButton, NextButton } from '../common/Button';
import { SmallInput, BigInput } from '../common/Input';
import {
  BoxWrapper,
  FormContainer,
  InputGroup,
  Label,
  BtnWrapper,
  Title,
  MultiInputGroup,
} from '@/styles/join/join';
import { CheckNicknameType } from '@/types/joinTypes';

export const ErrorText = styled.div(({ theme }) => ({
  color: 'red',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
}));

const ConfirmText = styled.div(({ theme }) => ({
  color: 'green',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
}));

interface IJoinBoxProps {
  onChangeSuccess: () => void;
}

const JoinBox = ({ onChangeSuccess }: IJoinBoxProps) => {
  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [authCode, setAuthCode] = useState<string>('');

  const [errors, setErrors] = useState({
    nickName: false,
    email: false,
    password: false,
    passwordCheck: false,
    authCode: false,
  });

  const [successInput, setSuccessInput] = useState({
    nickName: false,
    passwordCheck: false,
    authCode: false,
  });

  const validateInputs = () => {
    const newErrors = {
      nickName: !nickName,
      email: !email,
      password: !password,
      passwordCheck: !passwordCheck || password !== passwordCheck,
      authCode: !authCode,
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAuthCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthCode(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    // 비밀번호 일치 검사 업데이트 (비밀번호 변경시)
    if (passwordCheck !== newPassword) {
      setErrors((prev) => ({ ...prev, passwordCheck: true }));
    } else {
      setErrors((prev) => ({ ...prev, passwordCheck: false }));
    }
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordCheck = e.target.value;
    setPasswordCheck(newPasswordCheck);
    // 비밀번호와 비밀번호 확인 일치 여부 검사
    if (password !== newPasswordCheck) {
      setErrors((prev) => ({ ...prev, passwordCheck: true }));
    } else {
      setErrors((prev) => ({ ...prev, passwordCheck: false }));
    }
  };

  // 이메일 중복체크
  const { mutate: NicknameCheckMutate } = useCustomMutation(
    'post',
    '/user/nickname/check-unique',
    {
      onSuccess: (data: CheckNicknameType) => {
        console.log('data', data);
        setSuccessInput((prev) => ({
          ...prev,
          nickName: data.isUnique,
        }));
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleNicknameCheck = () => {
    NicknameCheckMutate({
      nickName,
    });
  };

  // 이메일 인증
  const { mutate: emailCheckMutate } = useCustomMutation(
    'post',
    '/send-mail/auth'
  );

  const handleEmailCheck = () => {
    emailCheckMutate({
      email,
    });
  };

  // 인증번호 일치 체크
  const { mutate: emailAuthCheckMutate } = useCustomMutation(
    'post',
    '/send-mail/auth-check',
    {
      onSuccess: (data) => {
        console.log('data', data);
        setSuccessInput((prev) => ({
          ...prev,
          authCode: true,
        }));
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleAuthCodeCheck = () => {
    emailAuthCheckMutate({
      email,
      authCode,
    });
  };

  // 회원가입
  const { mutate: joinMutate } = useCustomMutation('post', '/user/signup', {
    onSuccess: () => {
      onChangeSuccess();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleJoin = () => {
    console.log(successInput.nickName, successInput.authCode);
    // if (validateInputs() && successInput.nickName && successInput.authCode) {
    if (validateInputs()) {
      joinMutate({
        nickName,
        email,
        password,
      });
    }
  };

  return (
    <>
      <BoxWrapper>
        <Title>회원가입</Title>
        <FormContainer>
          <InputGroup>
            <Label>닉네임</Label>
            <BtnWrapper>
              <SmallInput
                placeholder="8자 이내로 입력 해주세요."
                value={nickName}
                onChange={handleNickname}
                error={errors.nickName}
                success={successInput.nickName}
              />

              <CheckButton onClick={handleNicknameCheck}>중복 체크</CheckButton>
            </BtnWrapper>
            {errors.nickName && <ErrorText>중복 닉네임입니다.</ErrorText>}
            {successInput.nickName && (
              <ConfirmText>사용 가능한 닉네임입니다.</ConfirmText>
            )}
          </InputGroup>

          <MultiInputGroup>
            <Label>이메일</Label>
            <BtnWrapper>
              <SmallInput
                placeholder="이메일 주소를 입력 해주세요."
                type="email"
                value={email}
                onChange={handleEmail}
                error={errors.email}
              />

              <CheckButton onClick={handleEmailCheck}>인증하기</CheckButton>
            </BtnWrapper>
            {errors.email && <ErrorText>작성해주세요</ErrorText>}
            <BtnWrapper>
              <SmallInput
                placeholder="인증번호 6자리를 입력 해주세요"
                value={authCode}
                onChange={handleAuthCode}
                error={errors.authCode}
              />
              <CheckButton onClick={handleAuthCodeCheck}>
                인증번호 체크
              </CheckButton>
            </BtnWrapper>
            {errors.authCode && <ErrorText>인증번호가 틀렸습니다.</ErrorText>}
          </MultiInputGroup>

          <InputGroup>
            <Label>비밀번호</Label>
            <BtnWrapper>
              <BigInput
                placeholder="4~16자의 영문 대소문자의 숫자만 입력"
                type="password"
                value={password}
                onChange={handlePassword}
                error={errors.password}
              />
            </BtnWrapper>
            {errors.password && <ErrorText>비밀번호를 작성해주세요</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>비밀번호 확인</Label>
            <BtnWrapper>
              <BigInput
                placeholder="4~16자의 영문 대소문자와 숫자만 입력"
                type="password"
                value={passwordCheck}
                onChange={handlePasswordCheck}
                error={errors.passwordCheck}
              />
            </BtnWrapper>
            {errors.passwordCheck && (
              <ErrorText>비밀번호가 틀렸습니다.</ErrorText>
            )}
          </InputGroup>
        </FormContainer>
      </BoxWrapper>

      <NextButton onClick={handleJoin}>가입하기</NextButton>
    </>
  );
};

export default JoinBox;
