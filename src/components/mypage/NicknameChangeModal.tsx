import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { IMypage } from '@/types/myPageTypes';
import AuthStore from '@/store/auth/authStore';
import { Wrapper, Input, Button } from '@/styles/mypage/nicknameModalStyles';

interface NicknameChangeModalProps {
  onClose: () => void;
  currentNickname: string;
  id: number;
}

const NicknameChangeModal = ({
  onClose,
  currentNickname,
  id,
}: NicknameChangeModalProps) => {
  const [nickname, setNickname] = useState<string>(currentNickname);
  const setAuthData = useSetRecoilState(AuthStore);
  const { mutate: changeNicknameMutate } = useCustomMutation(
    'put',
    '/user/nickname',
    {
      onSuccess: (data: IMypage) => {
        if (data) {
          setAuthData((prev) => ({
            ...prev,
            nickname: data.nickname,
            updatedAt: data.updatedAt,
          }));
          onClose();
        }
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onSubmit = () => {
    changeNicknameMutate({ userId: id, nickName: nickname });
  };

  return (
    <Wrapper>
      <div className="div1">
        <div className="title">닉네임</div>
        <Input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <Button onClick={onSubmit}>확인</Button>
    </Wrapper>
  );
};

export default NicknameChangeModal;
