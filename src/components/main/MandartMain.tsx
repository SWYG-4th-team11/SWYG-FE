import styled from '@emotion/styled';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { useTheme } from '@emotion/react';
import { useRef, useState } from 'react';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import IcoAdd from '../../../public/image/IcoAdd.svg';
import IcoClose from '../../../public/image/IcoClose.svg';
import IcoCalender from '../../../public/image/IcoCalendar.svg';
import IcoCheck from '../../../public/image/IcoCheck.svg';
import MainModal from './MainModal';
import 'react-datepicker/dist/react-datepicker.css';
import { GetMandart } from '@/pages/api/main/test';
import { useCustomMutation } from '@/hooks/reactQueryHooks/reactQueryHooks';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
const BoxMain = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 92px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px 2px;
  padding: 37.5px 15.5px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text3.fontWeight}; */
  font-weight: bold;
  /* line-height: ${({ theme }) => theme.typography.text3.lineHeight}; */
  line-height: 25px;
  color: white;
  background-color: ${({ theme }) => theme.colors.green[0]};
`;
const BoxMainAchieved = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 92px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px 2px;
  padding: 37.5px 15.5px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text3.fontWeight}; */
  font-weight: bold;
  /* line-height: ${({ theme }) => theme.typography.text3.lineHeight}; */
  line-height: 25px;
  color: white;
  background-color: ${({ theme }) => theme.colors.green[0]};
  opacity: 50%;
  position: relative;
`;
const BoxMid = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 92px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px 2px;
  padding: 37.5px 15.5px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text3.fontWeight}; */
  font-weight: bold;
  /* line-height: ${({ theme }) => theme.typography.text3.lineHeight}; */
  line-height: 25px;
  color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.sub.lightYellow};
`;
const BoxMidAchieved = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 92px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px 2px;
  padding: 37.5px 15.5px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text3.fontWeight}; */
  font-weight: bold;
  /* line-height: ${({ theme }) => theme.typography.text3.lineHeight}; */
  line-height: 25px;
  color: ${({ theme }) => theme.colors.gray[1]};
  background-color: ${({ theme }) => theme.colors.green[3]};
  opacity: 50%;
  position: relative;
`;
const BoxSmall = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 92px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px 2px;
  padding: 37.5px 15.5px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text3.fontWeight}; */
  font-weight: bold;
  /* line-height: ${({ theme }) => theme.typography.text3.lineHeight}; */
  line-height: 25px;
  color: ${({ theme }) => theme.colors.gray[1]};
`;
const BoxSmallAchieved = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 136px;
  height: 92px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  margin: 2px 2px;
  padding: 37.5px 15.5px;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text3.fontWeight}; */
  font-weight: bold;
  /* line-height: ${({ theme }) => theme.typography.text3.lineHeight}; */
  line-height: 25px;
  color: ${({ theme }) => theme.colors.gray[3]};
  background-color: ${({ theme }) => theme.colors.gray[5]};
  opacity: 50%;
  position: relative;
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
  /* line-height: ${({ theme }) => theme.typography.title2.lineHeight}; */
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
const InputDetailWithDay = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[4]};
  border: none;
  margin-bottom: 20px;
`;
const InputDay = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
`;
const InputDetailToggle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
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
const ToggleContainer = styled.div`
  position: relative;
  margin-top: 18px;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0, 200, 102);
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

const Desc = styled.div`
  //설명 부분의 CSS를 구현
  text-align: center;
  margin: 20px;
`;

const MandartMain = () => {
  const theme = useTheme() as Theme;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isOn, setisOn] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const buttonRef = useRef<HTMLImageElement>(null);
  const id = Number(localStorage.getItem('id'));
  const { data: MandartData, refetch } = GetMandart(id);
  const [nowIndex, setNowIndex] = useState(0);
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [goalDate, setGoalDate] = useState<Date>(new Date());
  const [achieved, setAchieved] = useState<boolean>();
  const openModal = (index: number) => {
    setIsModalOpen(true);
    setNowIndex(index);
    setStartDate(MandartData?.[0].subGoals[index].goalDate || new Date());
    setAchieved(MandartData?.[0].subGoals[index].achieved);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    // setisOn(!isOn);
    setAchieved(!achieved);
  };
  const [isOpenCalender, setIsOpenCalender] = useState(false);
  const openCalender = () => {
    setIsOpenCalender(!isOpenCalender);
  };
  const { mutate: updateMandartMutate } = useCustomMutation(
    'put',
    '/goal/update',
    {
      onSuccess: () => {
        refetch();
      },
    }
  );
  const handleUpdateMandart = () => {
    updateMandartMutate({
      id: MandartData?.[0].subGoals[nowIndex].id,
      title,
      content,
      goalDate,
      achieved,
    });
    closeModal();
  };
  const DatePickerBack = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    opacity: 30%;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100000;
  `;
  const DatePickerDiv = styled.div<{ top: number; left: number }>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100001;
  `;
  const CheckIcon = styled(Image)`
    position: absolute;
    bottom: 5px;
    right: 5px;
  `;
  return (
    <Main>
      {isOpenCalender && (
        <DatePickerBack onClick={() => setIsOpenCalender(!isOpenCalender)} />
      )}
      {isOpenCalender && buttonRef.current && (
        <DatePickerDiv
          top={buttonRef.current.offsetTop + buttonRef.current.offsetHeight}
          left={
            buttonRef.current.offsetLeft + buttonRef.current.offsetWidth / 2
          }
        >
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date);
              setGoalDate(date);
              openCalender();
            }}
            inline
          />
        </DatePickerDiv>
      )}
      <MainModal isOpen={isModalOpen} onClose={closeModal}>
        <ModalTitle theme={theme}>
          <div> </div>
          <Title theme={theme}>목표 설정</Title>
          <CloseBtn>
            <Image src={IcoClose} alt="close" onClick={closeModal} />
          </CloseBtn>
        </ModalTitle>
        <InputTitle theme={theme}>목표 이름</InputTitle>
        <InputDetail
          theme={theme}
          placeholder="15자 이내로 입력해주세요."
          defaultValue={MandartData?.[0].subGoals[nowIndex].title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputTitle theme={theme}>마감일</InputTitle>
        <InputDetailWithDay theme={theme}>
          <InputDay theme={theme}>
            {new Date(startDate).toISOString().slice(0, 10)}
          </InputDay>
          <Image
            onClick={openCalender}
            style={{ cursor: 'pointer' }}
            src={IcoCalender}
            alt="Calendar"
            width={30}
            height={40}
            ref={buttonRef}
          />
        </InputDetailWithDay>
        <InputTitle theme={theme}>메모(필수x)</InputTitle>
        <InputDetail
          theme={theme}
          placeholder="메모를 입력해주세요."
          defaultValue={MandartData?.[0].subGoals[nowIndex].content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <InputTitle theme={theme}>달성여부</InputTitle>
        <InputDetailToggle>
          {achieved === false ? (
            <Desc>
              <div className="OFF">미달성</div>
            </Desc>
          ) : (
            <Desc>
              <div className="ON">달성</div>
            </Desc>
          )}
          <ToggleContainer onClick={toggleHandler}>
            <div
              className={`toggle-container ${
                achieved ? 'toggle--checked' : null
              }`}
            />
            <div
              className={`toggle-circle ${achieved ? 'toggle--checked' : null}`}
            />
          </ToggleContainer>
        </InputDetailToggle>
        <ModalButtonYes theme={theme} onClick={handleUpdateMandart}>
          수정완료
        </ModalButtonYes>
        <ModalButtonNo>삭제하기</ModalButtonNo>
      </MainModal>
      {MandartData?.[0].subGoals?.map((data, index) => {
        let Box;
        if (data.type === 'main') {
          Box = data.achieved ? BoxMainAchieved : BoxMain;
        } else if (data.type === 'middle') {
          Box = data.achieved ? BoxMidAchieved : BoxMid;
        } else if (data.type === 'small') {
          Box = data.achieved ? BoxSmallAchieved : BoxSmall;
        } else {
          Box = BoxSmall;
        }

        return (
          <Box key={data.id} theme={theme} onClick={() => openModal(index)}>
            {!data.title && <Image src={IcoAdd} alt="add" />}
            {data.title && data.title}
            {data.achieved && (
              <CheckIcon src={IcoCheck} alt="check" width={40} height={40} />
            )}
          </Box>
        );
      })}
    </Main>
  );
};
export default MandartMain;
