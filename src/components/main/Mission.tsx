import { useTheme } from '@emotion/react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import IcoMoreOption from '../../../public/image/IcoMoreOption.svg';
import MainModal from './MainModal';
import { IRoutine } from '@/pages/api/main/test';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';

const Main = styled.div`
  display: flex-start;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 98px;
`;
const CheckBox = styled.input`
  appearance: none;
  margin-left: 20px;
  width: 40px;
  height: 40px;
  border: 1.5px solid gainsboro;
  border-radius: 50px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #03c75a;
  }
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  width: 90%;
  /* align-items: center; */
`;
const MainText = styled.div<{ theme: Theme }>`
  font-size: ${({ theme }) => theme.typography.title3.fontSize};
  font-weight: ${({ theme }) => theme.typography.title3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title3.fontSize};
`;
const SubText = styled.div<{ theme: Theme }>`
  font-size: 16px;
  margin-top: 14px;
  color: ${({ theme }) => theme.colors.gray[2]};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
  font-weight: ${({ theme }) => theme.typography.caption.fontWeight};
  font-size: ${({ theme }) => theme.typography.caption.fontSize};
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
const ModalButtonNo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  border: none;
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
interface MissionProps {
  data: IRoutine;
  onChangeRoutine: () => void;
}

const Mission = ({ data, onChangeRoutine }: MissionProps) => {
  const theme = useTheme() as Theme;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id] = useState(data.id);
  const [title, setTitle] = useState(data.title);
  const [memo, setMemo] = useState(data.memo);
  const [isChecked] = useState(data.isChecked);
  const [routineDate] = useState(data.routineDate);
  const [userId] = useState(data.userId);
  const [mandalartId] = useState(data.mandalartId);
  const queryClient = useQueryClient();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { mutate: updateRoutineMutate } = useCustomMutation(
    'put',
    '/routine/update'
  );
  const handleUpdateRoutine = () => {
    updateRoutineMutate({
      id,
      title,
      memo,
      isChecked,
      routineDate,
      userId,
      mandalartId,
    });
    closeModal();
  };
  const { mutate: deleteRoutineMutate } = useCustomMutation(
    'delete',
    `/routine/${id}`,
    {
      onSuccess: () => {
        onChangeRoutine();
      },
    }
  );
  const handleDeleteRoutine = () => {
    deleteRoutineMutate({});
    closeModal();
  };
  const { mutate: checkRoutineMutate } = useCustomMutation(
    'put',
    'routine/toggle-is-checked',
    {
      onSuccess: () => {
        onChangeRoutine();
        if (id !== undefined) {
          const queryKey = [`/mandalart/userId/${id}`];
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          queryClient.invalidateQueries(queryKey);
        }
      },
    }
  );
  const handleCheckRoutine = () => {
    checkRoutineMutate({
      routineId: id,
      isChecked: !isChecked,
    });
  };
  return (
    <Main>
      <MainModal isOpen={isModalOpen} onClose={closeModal}>
        <InputTitle theme={theme}>목표 이름</InputTitle>
        <InputDetail
          theme={theme}
          placeholder="15자 이내로 입력해주세요."
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputTitle theme={theme}>메모(필수x)</InputTitle>
        <InputDetail
          theme={theme}
          placeholder="메모를 입력해주세요."
          defaultValue={memo}
          onChange={(e) => {
            setMemo(e.target.value);
          }}
        />
        <ModalButtonYes theme={theme} onClick={handleUpdateRoutine}>
          수정완료
        </ModalButtonYes>
        <ModalButtonNo onClick={handleDeleteRoutine}>삭제하기</ModalButtonNo>
      </MainModal>
      <Item>
        <CheckBox
          type="checkbox"
          onClick={handleCheckRoutine}
          defaultChecked={isChecked}
        />
        <TextArea>
          <MainText theme={theme}>{title}</MainText>
          <SubText theme={theme}>{memo}</SubText>
        </TextArea>
        <Image
          src={IcoMoreOption}
          alt="more option"
          style={{ cursor: 'pointer' }}
          onClick={openModal}
        />
      </Item>
    </Main>
  );
};
export default Mission;
