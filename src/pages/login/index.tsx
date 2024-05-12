import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.gray[6], // 테마의 회색 색상 사용
  height: '100vh', // 전체 높이
}));

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 7.8px;
  height: 78.2px;
  padding: 9.36px;
  position: relative;
  width: 750px;
`;

const LoginBox = styled.div(({ theme }) => ({
  width: '664px',
  height: '576px',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.gray[4]}`,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  padding: '56px 32px 40px',

  '.div': {
    alignItems: 'center',
    display: 'inline-flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    position: 'relative',
  },

  '.div-2': {
    alignItems: 'flex-end',
    display: 'inline-flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    position: 'relative',
  },

  '.div-3': {
    display: 'inline-flex',
    alignItems: 'flex-start',
    flex: '0 0 auto',
    flexDirection: 'column',
    gap: '20px',
    position: 'relative',
  },

  '.text-wrapper': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.title2.fontSize,
    fontWeight: theme.typography.title2.fontWeight,
    lineHeight: `${theme.typography.title2.lineHeight}px`,
    marginTop: '-1px',
    position: 'relative',
    width: '141px',
  },

  '.div-4': {
    display: 'inline-flex',
    alignItems: 'flex-start',
    flex: '0 0 auto',
    flexDirection: 'column',
    gap: '16px',
    position: 'relative',
  },

  '.div-wrapper': {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[6],
    borderRadius: '8px',
    height: '72px',
    padding: '8px 20px',
    position: 'relative',
    width: '600px',
  },

  '.text-wrapper-2': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  '.frame-wrapper': {
    alignItems: 'flex-start',
    display: 'inline-flex',
    flex: '0 0 auto',
    position: 'relative',
  },

  '.div-5': {
    flex: '0 0 auto',
    position: 'relative',
  },

  '.div-wrapper-2': {
    alignItems: 'center',
    backgroundColor: theme.colors.green[0],
    borderRadius: '40px',
    display: 'flex',
    gap: '8px',
    height: '72px',
    justifyContent: 'center',
    padding: '8px 20px',
    position: 'relative',
    width: '600px',
  },

  '.text-wrapper-3': {
    color: theme.colors.white,
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  '.div-6': {
    alignItems: 'center',
    display: 'inline-flex',
    flex: '0 0 auto',
    flexDirection: 'column',
    gap: '12px',
    marginLeft: '-20px',
    marginRight: '-20px',
    position: 'relative',
  },

  '.div-7': {
    alignItems: 'center',
    display: 'flex',
    flex: '0 0 auto',
    gap: '1px',
    position: 'relative',
    width: '640px',
  },

  '.rectangle': {
    backgroundColor: theme.colors.gray[4],
    height: '1px',
    position: 'relative',
    width: '267px',
  },

  '.div-wrapper-3': {
    alignItems: 'center',
    display: 'inline-flex',
    flex: '0 0 auto',
    gap: '10px',
    justifyContent: 'center',
    padding: '10px 12px',
    position: 'relative',
  },

  '.text-wrapper-4': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  '.tectangle-2': {
    backgroundColor: theme.colors.gray[4],
    height: '1px',
    position: 'relative',
    width: '266px',
  },

  '.div-8': {
    display: 'inline-flex',
    alignItems: 'flex-start',
    flex: '0 0 auto',
    gap: '24px',
    position: 'relative',
  },

  '.wave-com': {
    height: '72px',
    width: '72px',
    objectFit: 'cover',
    position: 'relative',
  },

  '.social-icons-wrapper': {
    alignItems: 'center',
    border: '1px solid',
    borderColor: '#d9d9d9',
    borderRadius: '40px',
    display: 'flex',
    gap: '10px',
    height: '72px',
    justifyContent: 'center',
    padding: '10px',
    position: 'relative',
    width: '72px',
  },
}));

const BottomBox = styled.div(({ theme }) => ({
  display: 'inline-flex',
  gap: '12px',
  alignItems: 'center',
  position: 'relative',
  marginTop: '20px',

  '.text-wrapper': {
    color: theme.colors.gray[3],
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '-0.24px',
    lineHeight: '28px',
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  '.div': {
    color: theme.colors.green[0],
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '-0.24px',
    lineHeight: '28px',
    marginTop: '-1px',
    position: 'relative',
    textDecoration: 'underline',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    cursor: 'pointer',
  },
}));

const Login = () => {
  const router = useRouter();

  const onJoinPage = () => {
    router.push('/join');
  };

  const onPasswordPage = () => {
    router.push('/password');
  };

  return (
    <ResponsiveLayout>
      <Container>
        <TitleBox>
          <Image
            src="headerLogo.svg"
            alt="header logo"
            width={181}
            height={78.02}
          />
        </TitleBox>
        <LoginBox>
          <div className="div">
            <div className="div-2">
              <div className="div-3">
                <div className="text-wrapper">로그인</div>
                <div className="div-4">
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">아이디(이메일)</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-2">비밀번호</div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper">
                <div className="div-5" />
              </div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-3">로그인</div>
            </div>
          </div>
          <div className="div-6">
            <div className="div-7">
              <div className="rectangle" />
              <div className="div-wrapper-3">
                <div className="text-wrapper-4">간편로그인</div>
              </div>
              <div className="tectangle-2" />
            </div>
            <div className="div-8">
              <Image
                src="wavve.svg"
                alt="카카오 로그인"
                width={72}
                height={72}
              />
              <Image src="frame.svg" alt="구글 로그인" width={72} height={72} />
            </div>
          </div>
        </LoginBox>
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
      </Container>
    </ResponsiveLayout>
  );
};

export default Login;
