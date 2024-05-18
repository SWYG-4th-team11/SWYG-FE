import Head from 'next/head';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import IcoClose from '../../../public/image/IcoClose.svg';
import MainModal from './MainModal';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';
import { GetCharacter } from '@/pages/api/main/test';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98px;
`;
const TextBox = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green[0]};
  border: 1px solid ${({ theme }) => theme.colors.green[0]};
  border-radius: 50px;
  width: 248px;
  height: 54px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  font-weight: ${({ theme }) => theme.typography.text3.fontWeight};
  cursor: pointer;
`;
const ModalTitle = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2.lineHeight};
  width: 100%;
  height: 80px;
`;
const Title = styled.div`
  padding-left: 50px;
`;
const CloseBtn = styled.div`
  padding-top: 15px;
  cursor: pointer;
`;
const InputTitle = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: flex-start;
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2.fontWeight};
  margin-bottom: 10px;
`;
const InputDetail = styled.input<{ theme: Theme }>`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray[4]};
  border: none;
  margin-bottom: 20px;
  padding-left: 10px;
`;
const ModalButtonYes = styled.button<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green[0]};
  border: none;
  color: white;
  margin-bottom: 8px;
  cursor: pointer;
`;
interface MissionProps {
  onChangeRoutine: () => void;
}
const AddMission = ({ onChangeRoutine }: MissionProps) => {
  const theme = useTheme() as Theme;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  // const userId =
  //   typeof window !== 'undefined' ? Number(localStorage?.getItem('id')) : null;
  const [userId, setUserId] = useState(0);
  const { data: CharacterData } = GetCharacter(userId);
  const mandalartId = CharacterData?.[0]?.id ?? 0;
  useEffect(() => {
    const storedId = Number(localStorage.getItem('id'));
    if (storedId) {
      setUserId(Number(storedId));
    } else {
      router.push('/');
    }
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { mutate: addRoutineMutate } = useCustomMutation(
    'post',
    '/routine/create',
    {
      onSuccess: () => {
        onChangeRoutine();
      },
    }
  );
  const handleAddRoutine = () => {
    addRoutineMutate({
      title,
      memo,
      isChecked: false,
      routineDate: new Date(),
      userId,
      mandalartId,
    });

    closeModal();
  };
  return (
    <Main>
      <Head>
        <title>만다르트 오늘의 일정</title>
        <meta name="description" content="만다라트 오늘의 일정 추가" />
        <meta name="keywords" content="만다라트,mandalart,daily,dailyRoutine" />
      </Head>
      <MainModal isOpen={isModalOpen} onClose={closeModal}>
        <ModalTitle theme={theme}>
          <div> </div>
          <Title theme={theme}>오늘의 일정 추가하기</Title>
          <CloseBtn>
            <Image src={IcoClose} alt="close" onClick={closeModal} />
          </CloseBtn>
        </ModalTitle>
        <InputTitle theme={theme}>목표 이름</InputTitle>
        <InputDetail
          theme={theme}
          placeholder="15자 이내로 입력해주세요."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputTitle theme={theme}>메모(필수x)</InputTitle>
        <InputDetail
          theme={theme}
          placeholder="메모를 입력해주세요."
          onChange={(e) => {
            setMemo(e.target.value);
          }}
        />
        <ModalButtonYes theme={theme} onClick={handleAddRoutine}>
          추가완료
        </ModalButtonYes>
      </MainModal>
      <TextBox theme={theme} onClick={openModal}>
        + 오늘의 일정 추가하기
      </TextBox>
    </Main>
  );
};
export default AddMission;
