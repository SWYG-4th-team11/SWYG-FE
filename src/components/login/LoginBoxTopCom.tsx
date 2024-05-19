import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import {
  InputWrapper,
  WrapperTitle,
  Input,
  Line,
  LoginBoxTop,
  ButtonWrapper,
} from '@/styles/login/loginStyles';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { ILoginResultType } from '@/types/loginType';
import { Api } from '@/utils/apis';
import AuthStore from '@/store/auth/authStore';
import { ErrorText } from '../common/Text';

const LoginBoxTopCom = () => {
  const router = useRouter();
  const setAuthData = useSetRecoilState(AuthStore);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const { mutate: loginMutate } = useCustomMutation('post', '/user/login', {
    onSuccess: (data: ILoginResultType) => {
      console.log('data', data);
      if (data.result === 'ok') {
        Api.addToken(data.detail.token);
        Api.addId(data.detail.id);
        setAuthData({
          isLogin: true,
          id: data.detail.id,
          email: data.detail.email,
          nickname: data.detail.nickname,
          createdAt: data.detail.createdDateTime,
          updatedAt: null,
          level: null,
          exp: null,
          mandalartExists: false,
          mandalartId: null,
        });
        router.push('/');
      } else if (data.result === 'fail') {
        setIsLogin(true);
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = () => {
    loginMutate({ email, password });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <LoginBoxTop>
      <Head>
        <title>만다르트 로그인</title>
        <meta name="description" content="만다라트 로그인" />
        <meta name="keywords" content="만다라트,mandalart,login" />
      </Head>
      <div className="div-2">
        <InputWrapper className="div-3">
          <WrapperTitle>로그인</WrapperTitle>
          <div className="div-4">
            <Input
              placeholder="아이디(이메일)"
              type="email"
              value={email}
              onChange={onChangeEmail}
              onKeyDown={onKeyDown}
            />
            <Input
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={onChangePassword}
              onKeyDown={onKeyDown}
            />
          </div>
        </InputWrapper>
        <Line>
          <div className="div-5" />
        </Line>
      </div>
      {isLogin && <ErrorText>아이디, 이메일 확인해주세요.</ErrorText>}
      <ButtonWrapper onClick={onSubmit}>
        <button type="button" className="text-wrapper-3">
          로그인
        </button>
      </ButtonWrapper>
    </LoginBoxTop>
  );
};

export default LoginBoxTopCom;
