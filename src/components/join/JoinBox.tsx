import React, { useState } from 'react';
import Head from 'next/head';
import { useSetRecoilState } from 'recoil';
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
import { LoadingSpinner } from '../common/LoadingSpinner';
import SignupNickname from '@/store/signup/SignupStore';

interface IJoinBoxProps {
  onChangeSuccess: () => void;
}

const JoinBox = ({ onChangeSuccess }: IJoinBoxProps) => {
  const setNickNameStore = useSetRecoilState(SignupNickname);
  const [nickName, setNickName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [authCode, setAuthCode] = useState<string>('');
  const [isTime, setIsTime] = useState<boolean>(false);

  const [errors, setErrors] = useState({
    nickName: '',
    email: '',
    password: '',
    passwordCheck: '',
    authCode: '',
    general: '',
  });

  const [successInput, setSuccessInput] = useState({
    nickName: '',
    passwordCheck: '',
    authCode: '',
    email: '',
  });

  const validateInputs = () => {
    const newErrors = {
      nickName: nickName ? '' : '닉네임을 입력해주세요.',
      email: email ? '' : '이메일을 입력해주세요.',
      password: password ? '' : '비밀번호를 입력해주세요.',
      passwordCheck:
        passwordCheck && password === passwordCheck
          ? ''
          : '비밀번호가 일치하지 않습니다.',
      authCode: authCode ? '' : '인증번호를 입력해주세요.',
      general: '',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickName = e.target.value;
    setNickName(newNickName);

    // 닉네임이 변경되면 중복 체크 상태와 에러 메시지 리셋
    if (newNickName.length > 0) {
      setErrors((prev) => ({
        ...prev,
        nickName: '',
      }));
      setSuccessInput((prev) => ({
        ...prev,
        nickName: '',
      }));
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일이 변경되면 인증 상태와 메시지 리셋
    setIsTime(false);
    setErrors((prev) => ({
      ...prev,
      email: '',
    }));
    setSuccessInput((prev) => ({
      ...prev,
      email: '',
    }));
  };

  const handleAuthCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthCode = e.target.value;
    setAuthCode(newAuthCode);
    if (newAuthCode.length > 0) {
      setErrors((prev) => ({
        ...prev,
        authCode: '',
      }));
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호가 변경되면 비밀번호 확인 상태와 에러 메시지 리셋
    if (newPassword.length > 0) {
      setErrors((prev) => ({
        ...prev,
        password: '',
      }));
      setSuccessInput((prev) => ({
        ...prev,
        passwordCheck: '',
      }));
    }
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordCheck = e.target.value;
    setPasswordCheck(newPasswordCheck);
    // 비밀번호와 비밀번호 확인 일치 여부 검사
    if (password !== newPasswordCheck) {
      setErrors((prev) => ({
        ...prev,
        passwordCheck: '비밀번호가 일치하지 않습니다.',
      }));
      setSuccessInput((prev) => ({
        ...prev,
        passwordCheck: '',
      }));
    } else {
      setSuccessInput((prev) => ({
        ...prev,
        passwordCheck: '비밀번호가 일치합니다.',
      }));
      setErrors((prev) => ({ ...prev, passwordCheck: '' }));
    }
  };

  // 닉네임 중복체크
  const { mutate: NicknameCheckMutate, isPending: nicknameCheckIsPending } =
    useCustomMutation('post', '/user/nickname/check-unique', {
      onSuccess: (data: CheckNicknameType) => {
        if (!data.isUnique) {
          setErrors((prev) => ({
            ...prev,
            nickName: '이미 사용 중인 닉네임입니다.',
          }));
        } else {
          setSuccessInput((prev) => ({
            ...prev,
            nickName: '사용 가능한 닉네임입니다.',
          }));
          setErrors((prev) => ({
            ...prev,
            nickName: '',
          }));
        }
      },
      onError: () => {
        alert('다시 시도해주세요.');
      },
    });

  const handleNicknameCheck = () => {
    NicknameCheckMutate({
      nickName,
    });
  };

  // 이메일 인증
  const { mutate: emailCheckMutate, isPending: emailCheckIsPending } =
    useCustomMutation('post', '/send-mail/auth', {
      onSuccess: () => {
        setIsTime(true);
        setErrors((prev) => ({
          ...prev,
          email: '',
        }));
        setSuccessInput((prev) => ({
          ...prev,
          email: '인증번호를 발송했습니다. (3분안에 입력해주세요.)',
        }));
      },
      onError: () => {
        alert('다시 시도해주세요.');
        setErrors((prev) => ({
          ...prev,
          email: '이메일 인증에 실패했습니다.',
        }));
      },
    });

  const handleEmailCheck = () => {
    emailCheckMutate({
      email,
    });
  };

  // 인증번호 일치 체크
  const { mutate: emailAuthCheckMutate, isPending: emailAuthCheckIsPending } =
    useCustomMutation('post', '/send-mail/verify', {
      onSuccess: () => {
        setSuccessInput((prev) => ({
          ...prev,
          authCode: '인증되었습니다.',
        }));
        setErrors((prev) => ({
          ...prev,
          authCode: '',
        }));
      },
      onError: () => {
        alert('다시 시도해주세요.');
        setErrors((prev) => ({
          ...prev,
          authCode: '인증번호가 일치하지 않습니다.',
        }));
      },
    });

  const handleAuthCodeCheck = () => {
    emailAuthCheckMutate({
      email,
      code: authCode,
    });
  };

  // 회원가입
  const { mutate: joinMutate, isPending: joinIsPending } = useCustomMutation(
    'post',
    '/user/signup',
    {
      onSuccess: () => {
        setNickNameStore(nickName);
        onChangeSuccess();
      },
      onError: () => {
        alert('다시 시도해주세요.');
        setErrors((prev) => ({
          ...prev,
          general: '회원가입에 실패했습니다. 다시 시도해주세요.',
        }));
      },
    }
  );

  const handleJoin = () => {
    onChangeSuccess();
    const isSubmit =
      successInput.nickName !== '' &&
      successInput.authCode !== '' &&
      successInput.passwordCheck !== '' &&
      successInput.email !== '';
    if (validateInputs() && isSubmit) {
      joinMutate({
        nickname: nickName,
        email,
        password,
      });
    }
  };

  return (
    <>
      <Head>
        <title>만다르트 회원가입</title>
        <meta name="description" content="만다라트 회원가입" />
        <meta name="keywords" content="만다라트,mandalart,signup" />
      </Head>
      <BoxWrapper>
        {(nicknameCheckIsPending ||
          emailCheckIsPending ||
          emailAuthCheckIsPending ||
          joinIsPending) && <LoadingSpinner />}
        <Title>회원가입</Title>
        <FormContainer>
          <InputGroup>
            <Label>닉네임</Label>
            <BtnWrapper>
              <SmallInput
                placeholder="닉네임을 입력 해주세요."
                value={nickName}
                onChange={handleNickname}
                error={errors.nickName !== ''}
                success={successInput.nickName !== ''}
              />

              <CheckButton onClick={handleNicknameCheck}>중복 체크</CheckButton>
            </BtnWrapper>
            {errors.nickName && <ErrorText>{errors.nickName}</ErrorText>}
            {successInput.nickName && (
              <ConfirmText>{successInput.nickName}</ConfirmText>
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
                error={errors.email !== ''}
              />

              <GreenCheckButton onClick={handleEmailCheck}>
                인증
              </GreenCheckButton>
            </BtnWrapper>
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <BtnWrapper>
              <SmallInput
                placeholder="인증번호 8자리를 입력 해주세요"
                value={authCode}
                onChange={handleAuthCode}
                error={errors.authCode !== ''}
                success={successInput.authCode !== ''}
              />
              <CheckButton onClick={handleAuthCodeCheck}>확인</CheckButton>
            </BtnWrapper>
            {isTime && <ConfirmText>{successInput.email}</ConfirmText>}
            {errors.authCode && <ErrorText>{errors.authCode}</ErrorText>}
            {successInput.authCode && (
              <ConfirmText>{successInput.authCode}</ConfirmText>
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
                error={errors.password !== ''}
              />
            </BtnWrapper>
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label>비밀번호 확인</Label>
            <BtnWrapper>
              <BigInput
                placeholder="비밀번호를 다시 입력 해 주세요."
                type="password"
                value={passwordCheck}
                onChange={handlePasswordCheck}
                error={errors.passwordCheck !== ''}
                success={successInput.passwordCheck !== ''}
              />
            </BtnWrapper>
            {errors.passwordCheck && (
              <ErrorText>{errors.passwordCheck}</ErrorText>
            )}
            {successInput.passwordCheck && (
              <ConfirmText>{successInput.passwordCheck}</ConfirmText>
            )}
          </InputGroup>
        </FormContainer>
      </BoxWrapper>
      <NextButton onClick={handleJoin}>가입하기</NextButton>
      {errors.general && <ErrorText>{errors.general}</ErrorText>}
    </>
  );
};

export default JoinBox;
