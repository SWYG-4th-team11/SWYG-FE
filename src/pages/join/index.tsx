import React from 'react';
import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import { Container, LoginBox } from '@/styles/login/loginStyles';
import LoginBoxTopCom from '@/components/login/LoginBoxTopCom';
import TitleBoxCom from '@/components/login/TitleBoxCom';
import BottomBoxCom from '@/components/login/BottomBoxCom';

const Login = () => (
  <ResponsiveLayout>
    <Container>
      <TitleBoxCom />
      <LoginBox>
        <LoginBoxTopCom />
        {/* <SocialIconsCom /> */}
      </LoginBox>
      <BottomBoxCom />
    </Container>
  </ResponsiveLayout>
);

export default Login;
