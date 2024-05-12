import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Title = styled.div(({ theme }) => ({
  height: '68px',
  width: '298px',
  color: theme.colors.gray[1],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  whiteSpace: 'nowrap',
}));
const GridContainer = styled.div`
  display: grid; // 그리드 레이아웃 활성화
  grid-template-columns: repeat(3, 1fr); // 세 개의 열을 동일한 너비로 설정
  gap: 1rem; // 그리드 아이템 간의 간격
`;

const Box = styled.div(({ theme }) => ({
  height: '510px',
  width: '420px',
  backgroundColor: theme.colors.white,
  borderRadius: '24px',
  boxShadow: '0px 4px 11.1px #8b8a9f14',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BoxTitleWrapper = styled.div(({ theme }) => ({
  height: '176px',
  width: '364px',
  color: theme.colors.gray[1],
  fontSize: theme.typography.title3.fontSize,
  fontWeight: theme.typography.title3.fontWeight,
  lineHeight: `${theme.typography.title3.lineHeight}px`,
  //   marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
}));

const ImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: ${({ theme }) => theme.colors.gray[6]}; */
`;

const BoxTitle = styled.div(({ theme }) => ({
  height: '32px',
  width: '171px',
  color: theme.colors.gray[0],
  fontSize: theme.typography.title2.fontSize,
  fontWeight: theme.typography.title2.fontWeight,
  lineHeight: `${theme.typography.title2.lineHeight}px`,
  whiteSpace: 'nowrap',
  marginLeft: '0.5rem',
}));

const BoxDescription = styled.div(({ theme }) => ({
  height: '132px',
  width: '380px',
  color: theme.colors.gray[2],
  fontSize: theme.typography.text4.fontSize,
  fontWeight: theme.typography.text4.fontWeight,
  lineHeight: `${theme.typography.text4.lineHeight}px`,
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center', // 수직 정렬
  //   justifyContent: 'center', // 수평 정렬
  //   margin: '0 auto', // 컨테이너 내에서 중앙 정렬
  //   backgroundColor: 'red',
}));

const BottomIamge = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  /* background-color: ${({ theme }) => theme.colors.gray[6]}; */
  width: 260px;
  height: 210px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 1.2rem;
`;

const Third = () => (
  <>
    <Title>서비스 이용 방법</Title>
    <GridContainer>
      <Box>
        <BoxTitleWrapper>
          <ImageWrapper>
            <Image src="vector.svg" alt="vectorImg" width={24} height={19} />
            <BoxTitle>만다라트 서정하기</BoxTitle>
          </ImageWrapper>
          <BoxDescription>
            가운데 자신의 최종 목표를 기입하고
            <br />
            나머지 가운데 여백칸을 중간 목표로 채워주세요.
            <br />
            주변 구역의 가운데는 자신의 중간 목표를
            <br />
            해당 구역의 여백칸은 소목표들을 기입해주세요.
          </BoxDescription>
        </BoxTitleWrapper>
        <BottomIamge>
          <Image src="layer_1.svg" alt="layer_1" width={260} height={210} />
        </BottomIamge>
      </Box>
      <Box>
        <BoxTitleWrapper>
          <ImageWrapper>
            <Image src="vector.svg" alt="vectorImg" width={24} height={19} />
            <BoxTitle>데일리 루틴 작성하기</BoxTitle>
          </ImageWrapper>
          <BoxDescription>
            <div>
              만다라트를 계획하고 채우셨다면 목표를 시각화하고 키워유를 이용할
              준비가 80% 끝나셨어요.
              <br />
              아래 텍스트 칸을 통해 만다라트를 달성하기 위해
              <br />
              매일 해야할 데일리 루틴들을 자유롭게 작성해주세요.
            </div>
          </BoxDescription>
        </BoxTitleWrapper>
        <BottomIamge>
          <Image src="layer_2.svg" alt="layer_1" width={242} height={212} />
        </BottomIamge>
      </Box>
      <Box>
        <BoxTitleWrapper>
          <ImageWrapper>
            <Image src="vector.svg" alt="vectorImg" width={24} height={19} />
            <BoxTitle>캐릭터 성장 시스템</BoxTitle>
          </ImageWrapper>
          <BoxDescription>
            키워유 서비스는 만다라트를 달성하며 자신의 성장과 동시에 캐릭터도
            함께 성장해요!
            <br />
            캐릭터는 총 5단계로 되어있으며, 사용자가 중목표
            <br />
            1개를 달성시마다 다음 레벨로 성장합니다.
          </BoxDescription>
        </BoxTitleWrapper>
        <BottomIamge>
          <Image src="layer_3.svg" alt="layer_1" width={345} height={178} />
        </BottomIamge>
      </Box>
    </GridContainer>
  </>
);

export default Third;
