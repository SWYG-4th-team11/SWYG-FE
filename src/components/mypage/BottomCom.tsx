import React from 'react';
import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  BottomBox,
  AccountBox,
  PasswordBox,
  Button,
} from '@/styles/mypage/bottomBoxComStyles';
import AuthStore from '@/store/auth/authStore';

interface IBottomComProps {
  handleModalOpen: () => void;
}

const BottomCom = ({ handleModalOpen }: IBottomComProps) => {
  const authData = useRecoilValue(AuthStore);
  const router = useRouter();

  const handlePasswordChange = () => {
    router.push('/changePassword');
  };

  return (
    <BottomBox>
      <AccountBox>
        <div className="title">계정 정보</div>
        <div className="description">
          <Image
            src="mainAvatar.svg"
            alt="mainAvatar"
            width={142}
            height={128}
          />
          <div className="infoWrapper">
            <div className="flex">
              <div className="infoName">{authData.nickname}</div>
              <div className="infoEmail">{authData.email}</div>
            </div>
            <Button onClick={handleModalOpen}>닉네임 변경</Button>
          </div>
        </div>
      </AccountBox>
      <PasswordBox>
        <div className="imgWrapper">
          <Image src="lock.svg" alt="lock" width={40} height={40} />
          <div className="title">비밀번호</div>
        </div>
        <div className="btnWrapper">
          <Button onClick={handlePasswordChange}>변경</Button>
        </div>
      </PasswordBox>
    </BottomBox>
  );
};

export default BottomCom;
