import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import {
  Title,
  TopBox,
  Description2,
  LineWrapper,
  ProgressBarContainer,
  ProgressBarFiller,
  ImageContainer,
} from '@/styles/mypage/topBoxComStyles';
import AuthStore from '@/store/auth/authStore';
import { GetQuote } from '@/pages/api/main/test';
import Bubble from '../main/Bubble';
import ImgManda from '../../../public/image/ImgManda.svg';
import ImgManda2 from '../../../public/image/ImgManda2.svg';
import ImgManda3 from '../../../public/image/ImgManda3.svg';
import ImgManda4 from '../../../public/image/ImgManda4.svg';
import ImgManda5 from '../../../public/image/ImgManda5.svg';

const TopBoxCom = () => {
  const authData = useRecoilValue(AuthStore);
  const { data: QuoteData } = GetQuote();
  const getCharcterTitle = (level: number | null) => {
    if (level === 1) return '씨앗';
    if (level === 2) return '새싹';
    if (level === 3) return '줄기';
    if (level === 4) return '꽃';
    return '나무';
  };
  const getImageManda = (level: number | null) => {
    if (level === 1) return ImgManda;
    if (level === 2) return ImgManda2;
    if (level === 3) return ImgManda3;
    if (level === 4) return ImgManda4;
    return ImgManda5;
  };
  return (
    <>
      <Title>My</Title>
      <TopBox>
        <ImageContainer>
          <Image
            src={getImageManda(authData.level)}
            alt="ball"
            width={180}
            height={195}
          />
        </ImageContainer>
        <Description2>
          <Bubble>
            {QuoteData?.content ? QuoteData.content : '시작이 반이다'}
          </Bubble>
        </Description2>

        <LineWrapper>
          <div className="smallTitle">
            LV
            {authData.level}
          </div>
          <div className="smallWrapper">
            <span className="title">{getCharcterTitle(authData.level)}</span>
            {authData && (
              <ProgressBarContainer>
                <ProgressBarFiller
                  exp={authData.exp !== null ? authData.exp : 0}
                />
              </ProgressBarContainer>
            )}
          </div>
          <div className="description">{`레밸업까지 목표달성 ${authData.exp}/100`}</div>
        </LineWrapper>
      </TopBox>
    </>
  );
};

export default TopBoxCom;
