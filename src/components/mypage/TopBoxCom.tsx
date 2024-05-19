import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import {
  Title,
  TopBox,
  Description,
  LineWrapper,
  ProgressBarContainer,
  ProgressBarFiller,
} from '@/styles/mypage/topBoxComStyles';
import AuthStore from '@/store/auth/authStore';

const TopBoxCom = () => {
  const authData = useRecoilValue(AuthStore);

  return (
    <>
      <Title>My</Title>
      <TopBox>
        <Image src="ball.svg" alt="ball" width={190} height={215} />
        <Description>
          <p>가장 어려운 일을 하는 것은 시작하는 것이다.</p>
          <p> 나머지는 자연스럽게 따라온다. 2줄까지 작성가능</p>
        </Description>

        <LineWrapper>
          <div className="smallTitle">
            LV
            {authData.level}
          </div>
          <div className="smallWrapper">
            <span className="title">씨앗</span>
            {authData && (
              <ProgressBarContainer>
                <ProgressBarFiller
                  exp={authData.exp !== null ? authData.exp : 0}
                />
              </ProgressBarContainer>
            )}
          </div>
          <div className="description">레벨업까지 목표달성 3/6</div>
        </LineWrapper>
      </TopBox>
    </>
  );
};

export default TopBoxCom;
