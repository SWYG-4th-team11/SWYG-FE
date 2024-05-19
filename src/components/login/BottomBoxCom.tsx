import { useRouter } from 'next/router';
import React from 'react';
import { BottomBox } from '@/styles/login/loginStyles';

const BottomBoxCom = () => {
  const router = useRouter();

  const onJoinPage = () => {
    router.push('/signup');
  };

  const onPasswordPage = () => {
    router.push('/findPassword');
  };
  return (
    <>
      <BottomBox>
        <div className="text-wrapper">키워유가 처음이세요?</div>
        <div
          className="div"
          onClick={onJoinPage}
          role="button"
          tabIndex={0}
          onKeyDown={onJoinPage}
        >
          회원가입
        </div>
      </BottomBox>
      <BottomBox>
        <div className="text-wrapper">비밀번호를 잊으셨나요?</div>
        <div
          className="div"
          onClick={onPasswordPage}
          role="button"
          tabIndex={0}
          onKeyDown={onPasswordPage}
        >
          비밀번호 찾기
        </div>
      </BottomBox>
    </>
  );
};

export default BottomBoxCom;
