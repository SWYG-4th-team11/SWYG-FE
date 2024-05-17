import styled from '@emotion/styled';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import Bubble from './Bubble';
import ImgManda from '../../../public/image/ImgManda.svg';
import ImgManda2 from '../../../public/image/ImgManda2.svg';
import ImgManda3 from '../../../public/image/ImgManda3.svg';
import ImgManda4 from '../../../public/image/ImgManda4.svg';
import ImgManda5 from '../../../public/image/ImgManda5.svg';
import { GetCharacter, GetQuote } from '@/pages/api/main/test';

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
  margin-top: 10px;
  /* line-height: ${({ theme }) => theme.typography.text4.lineHeight}; */
`;
const CharacterContainer = () => {
  const theme = useTheme() as Theme;
  const id = Number(localStorage.getItem('id'));
  const { data: QuoteData } = GetQuote();
  const { data: CharacterData } = GetCharacter(id);

  const getCharcterTitle = (level: number) => {
    if (level === 1) return '씨앗';
    if (level === 2) return '새싹';
    if (level === 3) return '줄기';
    if (level === 4) return '꽃';
    return '나무';
  };
  const getImageManda = (level: number) => {
    if (level === 1) return ImgManda;
    if (level === 2) return ImgManda2;
    if (level === 3) return ImgManda3;
    if (level === 4) return ImgManda4;
    return ImgManda5;
  };
  return (
    <Main>
      <CharacterDiv>
        <Bubble>
          {QuoteData?.content ? QuoteData.content : '시작이 반이다'}
        </Bubble>
        <Image
          src={getImageManda(CharacterData?.[0]?.level || 0)}
          alt="character"
          width={200}
          height={160}
        />
      </CharacterDiv>
      <CharacterStatus>
        <Status>
          <Level theme={theme}>{`LV ${CharacterData?.[0]?.level}`}</Level>
          <LevelName theme={theme}>
            {getCharcterTitle(CharacterData?.[0]?.level || 0)}
          </LevelName>
        </Status>
        <ProgressBar theme={theme}>
          <Progress width={CharacterData?.[0]?.exp ?? 0 / 100} theme={theme} />
        </ProgressBar>
        <StatusText theme={theme}>
          {`레밸업까지 목표달성 ${CharacterData?.[0]?.exp ?? 0}/100`}
        </StatusText>
      </CharacterStatus>
    </Main>
  );
};
export default CharacterContainer;
