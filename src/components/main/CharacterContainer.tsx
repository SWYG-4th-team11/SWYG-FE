import styled from '@emotion/styled';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import Bubble from './Bubble';
import ImgManda from '../../../public/image/ImgManda.svg';
import ImgManda2 from '../../../public/image/ImgManda2.svg';
import ImgManda3 from '../../../public/image/ImgManda3.svg';
import ImgManda4 from '../../../public/image/ImgManda4.svg';
import ImgManda5 from '../../../public/image/ImgManda5.svg';
import ImgLevel2 from '../../../public/image/ImgLevel2.svg';
import ImgLevel3 from '../../../public/image/ImgLevel3.svg';
import ImgLevel4 from '../../../public/image/ImgLevel4.svg';
import ImgLevel5 from '../../../public/image/ImgLevel5.svg';
import { GetCharacter, GetQuote } from '@/pages/api/main/test';
import MainModal from './MainModal';
import { GetLoginUser } from '@/pages/api/auth/authApi';

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
const LevelupTitle = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  /* font-size: ${({ theme }) => theme.typography.title1.fontSize}; */
  font-size: 40px;
  font-weight: ${({ theme }) => theme.typography.title1.fontWeight};
  margin-bottom: 30px;
`;
const LevelupText = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.text3.fontSize};
  /* font-size: 40px; */
  font-weight: ${({ theme }) => theme.typography.text3.fontWeight};
  margin-bottom: 10px;
`;
const LevelupImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
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
const ImageContainer = styled.div`
  animation: moveUpDown 2s ease-in-out infinite;

  @keyframes moveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;
const CharacterContainer = () => {
  const theme = useTheme() as Theme;
  const id = Number(localStorage.getItem('id'));
  const { data: QuoteData } = GetQuote();
  const { data: CharacterData } = GetCharacter(id);
  const { data: LoginUserData } = GetLoginUser({ id: Number(id) });
  const [prevLevel, setPrevLevel] = useState<number | undefined>(undefined);
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);

  useEffect(() => {
    if (CharacterData && CharacterData[0]) {
      const currentLevel = CharacterData[0].level;
      if (prevLevel !== undefined && currentLevel > prevLevel) {
        // 레벨업 팝업 띄우기
        setShowLevelUpPopup(true);
      }
      setPrevLevel(currentLevel);
    }
  }, [CharacterData, prevLevel]);

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
  const getLevelImageManda = (level: number) => {
    if (level === 2) return ImgLevel2;
    if (level === 3) return ImgLevel3;
    if (level === 4) return ImgLevel4;
    return ImgLevel5;
  };
  // const openModal = () => {
  //   setShowLevelUpPopup(true);
  // };

  const closeModal = () => {
    setShowLevelUpPopup(false);
  };
  return (
    <Main>
      <MainModal isOpen={showLevelUpPopup} onClose={closeModal}>
        <LevelupTitle theme={theme}>축하합니다.</LevelupTitle>
        <LevelupText theme={theme}>
          {`${LoginUserData?.nickname}님의 꾸준한 목표달성 덕분에 만다라가 한 단계 성장했어요!`}
        </LevelupText>
        <LevelupText theme={theme}>
          최종 성장까지 앞으로도 열심히 달려봐요!
        </LevelupText>
        <LevelupImage>
          <Image
            src={getLevelImageManda(CharacterData?.[0]?.level || 0)}
            alt="level up"
          />
        </LevelupImage>
        <ModalButtonYes theme={theme} onClick={closeModal}>
          확인했어요!
        </ModalButtonYes>
      </MainModal>
      <CharacterDiv>
        <Bubble>
          {QuoteData?.content ? QuoteData.content : '시작이 반이다'}
        </Bubble>
        <ImageContainer>
          <Image
            src={getImageManda(CharacterData?.[0]?.level || 0)}
            alt="character"
            width={200}
            height={160}
          />
        </ImageContainer>
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
