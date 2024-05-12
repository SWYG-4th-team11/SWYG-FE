import styled from '@emotion/styled';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import Bubble from './Bubble';
import ImgManda from '../../../public/image/ImgManda.svg';

interface ITest {
  width: number;
  theme: Theme;
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 426px;
  border: 1px solid gray;
  margin-top: 20px;
  border-radius: 50px;
`;
const CharacterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 310px;
`;
const CharacterStatus = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 118px;
  /* border: 1px solid black; */
`;
const Status = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
const Level = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green[0]};
  width: 61px;
  height: 32px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green[3]};
`;
const LevelName = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.title2.fontWeight}; */
  font-weight: bold;
  padding-left: 20px;
  color: ${({ theme }) => theme.colors.gray[0]};
`;
const ProgressBar = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.gray[5]};
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 20px;
  overflow: hidden;
`;
const Progress = styled.div`
  width: ${(props: ITest) => props.width}%;
  height: 8px;
  padding: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.green[0]};
  color: #111;
`;
const StatusText = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: flex-end;
  font-size: ${({ theme }) => theme.typography.text4.fontSize};
  font-weight: ${({ theme }) => theme.typography.text4.fontWeight};
  color: ${({ theme }) => theme.colors.gray[3]};
  /* line-height: ${({ theme }) => theme.typography.text4.lineHeight}; */
`;
const CharacterContainer = () => {
  const theme = useTheme() as Theme;
  return (
    <Main>
      <CharacterDiv>
        <Bubble>
          {`가장 어려운 일을 하는 것은 시작하는 것이다.
나머지는 자연스럽게 따라온다. 2줄까지 작성가능`}
        </Bubble>
        <Image src={ImgManda} alt="character" />
      </CharacterDiv>
      <CharacterStatus>
        <Status>
          <Level theme={theme}>LV 1</Level>
          <LevelName theme={theme}>씨앗</LevelName>
        </Status>
        <ProgressBar theme={theme}>
          <Progress width={100 - (4 * 100) / 6} theme={theme} />
        </ProgressBar>
        <StatusText theme={theme}>레밸업까지 목표달성 3/6</StatusText>
      </CharacterStatus>
    </Main>
  );
};
export default CharacterContainer;
