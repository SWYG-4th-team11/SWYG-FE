import Image from 'next/image';
import React from 'react';
import { TitleBox } from '@/styles/login/loginStyles';

const TitleBoxCom = () => (
  <TitleBox>
    <Image src="headerLogo.svg" alt="header_logo" width={181} height={78.02} />
  </TitleBox>
);

export default TitleBoxCom;
