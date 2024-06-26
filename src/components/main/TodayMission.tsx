import styled from '@emotion/styled';
import Image from 'next/image';
import DatePicker from 'react-datepicker';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@emotion/react';
import IcoCalender from '../../../public/image/IcoCalendar.svg';
import IcoArrowLeft from '../../../public/image/IcoArrowLeft.svg';
import IcoArrowRight from '../../../public/image/IcoArrowRight.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';

interface TodayMissionProps {
  onNowDateChange: (date: Date) => void;
}
const TodayMission = ({ onNowDateChange }: TodayMissionProps) => {
  const DateMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 88px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.6);
    font-weight: bold;
  `;
  const ImageDiv = styled.div`
    margin-right: 10px;
    cursor: pointer;
  `;
  const InputDay = styled.div<{ theme: Theme }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
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
  const StyledImage = styled(Image)`
    cursor: pointer;
  `;
  const theme = useTheme() as Theme;
  const [isOpenCalender, setIsOpenCalender] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const buttonRef = useRef<HTMLImageElement>(null);
  const openCalender = () => {
    setIsOpenCalender(!isOpenCalender);
  };
  useEffect(() => {
    onNowDateChange(startDate);
  }, [startDate, onNowDateChange]);
  return (
    <DateMain>
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
              openCalender();
            }}
            inline
          />
        </DatePickerDiv>
      )}
      <div> </div>
      <InputDay theme={theme}>
        <StyledImage
          src={IcoArrowLeft}
          alt="prev day"
          onClick={() => {
            const day = new Date(startDate);
            const prevDay = new Date(startDate);
            prevDay.setDate(day.getDate() - 1);
            return setStartDate(prevDay);
          }}
        />
        {startDate && ` ${startDate.toISOString().slice(0, 10)}`}
        <StyledImage
          src={IcoArrowRight}
          alt="next day"
          onClick={() => {
            const day = new Date(startDate);
            const nextDay = new Date(startDate);
            nextDay.setDate(day.getDate() + 1);
            return setStartDate(nextDay);
          }}
        />
      </InputDay>
      <ImageDiv onClick={openCalender}>
        <Image
          src={IcoCalender}
          alt="Calendar"
          width={30}
          height={100}
          ref={buttonRef}
        />
      </ImageDiv>
    </DateMain>
  );
};
export default TodayMission;
