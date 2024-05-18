import Image from 'next/image';
import React from 'react';
import { EasyLoginLine, SocialIconsWrapper } from '@/styles/login/loginStyles';

const SocialIconsCom = () => (
  <SocialIconsWrapper className="div-6">
    <EasyLoginLine className="div-7">
      <div className="rectangle" />
      <div className="div-wrapper-3">
        <div className="text-wrapper-4">간편로그인</div>
      </div>
      <div className="tectangle-2" />
    </EasyLoginLine>
    <div className="div-8">
      <Image src="wavve.svg" alt="KaoKao_Login" width={72} height={72} />
      <Image src="frame.svg" alt="Google_Login" width={72} height={72} />
    </div>
  </SocialIconsWrapper>
);

export default SocialIconsCom;
