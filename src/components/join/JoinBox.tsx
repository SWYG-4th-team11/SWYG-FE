import React, { useState } from 'react';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { CheckButton, GreenCheckButton, NextButton } from '../common/Button';
import { SmallInput, BigInput } from '../common/Input';
import {
  BoxWrapper,
  InputGroup,
  BtnWrapper,
  MultiInputGroup,
} from '@/styles/join/joinStyles';
import { CheckNicknameType } from '@/types/joinTypes';
import { Title } from '@/components/common/Title';
import { ConfirmText, ErrorText } from '../common/Text';
import { Label } from '../common/Label';
import { FormContainer } from '../common/From';

interface IJoinBoxProps {
  onChangeSuccess: () => void;
}

const JoinBox = ({ onChangeSuccess }: IJoinBoxProps) => {
  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [authCode, setAuthCode] = useState<string>('');
  const [isTime, setIsTime] = useState<boolean>(false);

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
      setSuccessInput((prev) => ({ ...prev, passwordCheck: true }));
      setErrors((prev) => ({ ...prev, passwordCheck: false }));
    }
  };

  // 이메일 중복체크
  const { mutate: NicknameCheckMutate } = useCustomMutation(
    'post',
    '/user/nickname/check-unique',
    {
      onSuccess: (data: CheckNicknameType) => {
        console.log('NicknameCheckMutate', data);
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
    '/send-mail/auth',
    {
      onSuccess: (data) => {
        console.log('emailCheckMutate', data);
        setIsTime(true);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleEmailCheck = () => {
    emailCheckMutate({
      email,
    });
  };

  // 인증번호 일치 체크
  const { mutate: emailAuthCheckMutate } = useCustomMutation(
    'post',
    '/send-mail/verify',
    {
      onSuccess: (data) => {
        console.log('emailAuthCheckMutate', data);
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
      code: authCode,
    });
  };

  // 회원가입
  const { mutate: joinMutate } = useCustomMutation('post', '/user/signup', {
    onSuccess: (data) => {
      console.log(data);
      onChangeSuccess();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleJoin = () => {
    if (validateInputs() && successInput.nickName && successInput.authCode) {
      joinMutate({
        nickname: nickName,
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
                placeholder="닉네임을 입력 해주세요."
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

              <GreenCheckButton onClick={handleEmailCheck}>
                인증
              </GreenCheckButton>
            </BtnWrapper>
            {errors.email && <ErrorText>중복 닉네임입니다.</ErrorText>}
            <BtnWrapper>
              <SmallInput
                placeholder="인증번호 8자리를 입력 해주세요"
                value={authCode}
                onChange={handleAuthCode}
                error={errors.authCode}
                success={successInput.authCode}
              />
              <CheckButton onClick={handleAuthCodeCheck}>확인</CheckButton>
            </BtnWrapper>
            {isTime && (
              <ConfirmText>
                인증번호를 발송했습니다(3분안에 입력해주세요.).
              </ConfirmText>
            )}
            {errors.authCode && <ErrorText>인증번호가 틀렸습니다.</ErrorText>}
            {successInput.authCode && (
              <ConfirmText>인증되었습니다.</ConfirmText>
            )}
          </MultiInputGroup>

          <InputGroup>
            <Label>비밀번호</Label>
            <BtnWrapper>
              <BigInput
                placeholder="비밀번호를 입력 해 주세요."
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
                success={successInput.passwordCheck}
              />
            </BtnWrapper>
            {errors.passwordCheck && (
              <ErrorText>비밀번호가 틀렸습니다.</ErrorText>
            )}
            {successInput.passwordCheck && (
              <ConfirmText>비밀번호가 일치합니다.</ConfirmText>
            )}
          </InputGroup>
        </FormContainer>
      </BoxWrapper>

      <NextButton onClick={handleJoin}>가입하기</NextButton>
    </>
  );
};

export default JoinBox;
