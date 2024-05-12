import { useTheme } from '@emotion/react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import IcoMoreOption from '../../../public/image/IcoMoreOption.svg';
import MainModal from './MainModal';

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
const Mission = () => {
  const theme = useTheme() as Theme;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Main>
      <MainModal isOpen={isModalOpen} onClose={closeModal}>
        <ModalButtonYes theme={theme}>수정완료</ModalButtonYes>
        <ModalButtonNo>삭제하기</ModalButtonNo>
      </MainModal>
      <Item>
        <CheckBox type="checkbox" />
        <TextArea>
          <MainText theme={theme}>잘 먹고 잘 살기</MainText>
          <SubText theme={theme}>잘 먹는건 몹시 중요하다</SubText>
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
