import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { IMypage } from '@/types/myPageTypes';
import AuthStore from '@/store/auth/authStore';

const Wrapper = styled.div(({ theme }) => ({
  width: '600px',
  height: ' 200px',
  gap: ' 40px',
  padding: '40px 28px 28px 28px',
  position: 'absolute',
  top: '600px',
  left: '50%',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  backgroundColor: 'white',
  borderRadius: '16px',

  '.div1': {
    width: 'fit-content',
    gap: '8px',
    padding: '10 0px',
  },

  '.title': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.title3.fntSize,
    fontWeight: theme.typography.title3.fotWeight,
    lineHeight: `${theme.typography.title3.lineHeight}px`,
  },
}));

export const Input = styled.input<{ error?: boolean }>(({ theme, error }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.gray[6],
  borderRadius: '6px',
  gap: '10px',
  height: '72px',
  width: '544px',
  padding: '0 20px',
  position: 'relative',

  border: error ? '2px solid red' : '1px solid #ccc', // 기본 테두리 색상

  '::plcaeholder': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fntSize,
    fontWeight: theme.typography.text3.fotWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'fixed',
    left: '0',
    top: '0',
    whiteSpace: 'nowrap',
    height: '30px',
    width: '203px',
  },
}));

const Button = styled.button(({ theme }) => ({
  width: '590px',
  height: '72px',
  color: theme.colors.white,
  backgroundColor: theme.colors.green[0],
  borderRadius: '40px',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  border: 'none',
  cursor: 'pointer',
}));

interface NicknameChangeModalProps {
  onClose: () => void;
  currentNickname: string;
  id: number;
  refetch: () => void;
}

const NicknameChangeModal = ({
  onClose,
  currentNickname,
  id,
  refetch,
}: NicknameChangeModalProps) => {
  const [nickname, setNickname] = useState<string>(currentNickname);
  const setAuthData = useSetRecoilState(AuthStore);
  const { mutate: changeNicknameMutate } = useCustomMutation(
    'put',
    '/user/nickname',
    {
      onSuccess: (data: IMypage) => {
        if (data) {
          setAuthData({
            isLogin: true,
            id: data.id,
            email: data.email,
            nickname: data.nickname,
            createdDateTime: data.createdAt,
          });
          refetch();
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
