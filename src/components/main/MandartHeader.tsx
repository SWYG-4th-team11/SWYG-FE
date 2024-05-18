import styled from '@emotion/styled';
import Head from 'next/head';
// import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
// import IcoPencil from '../../../public/image/IcoPencil.svg';
import { GetMandart } from '@/pages/api/main/test';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 853px;
  height: 88px;
  padding-left: 30px;
`;
const TitleText = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  width: 452px;
  height: 40px;
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2.fontWeight};
  line-height: ${({ theme }) => theme.typography.title2.lineHeight};
  color: ${({ theme }) => theme.colors.gray[0]};
`;
const Dday = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88px;
  height: 40px;
  color: ${({ theme }) => theme.colors.green[0]};
  background-color: ${({ theme }) => theme.colors.green[3]};
  border-radius: 50px;
`;
const MainText = styled.div`
  display: flex;
  align-items: center;
  width: 352px;
  height: 32px;
`;
const MyFavorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const MyFavoriteItem = styled.div<{ theme: Theme }>`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 108px;
//   height: 40px;
//   border: 1px ${({ theme }) => theme.colors.green[0]} solid;
//   border-radius: 50px;
//   color: ${({ theme }) => theme.colors.green[0]};
// `;
// const IcoUpdateText = styled(Image)`
//   padding-left: 8px;
//   cursor: pointer;
// `;
const MandartHeader = () => {
  const theme = useTheme() as Theme;
  const id = Number(localStorage.getItem('id'));
  const { data: MandartData } = GetMandart(id);
  const getDisDate = (nowDate: Date) => {
    const targetDate: Date = new Date(nowDate);

    const currentDate: Date = new Date();

    const timeDifference: number = targetDate.getTime() - currentDate.getTime();

    const dayDifference: number = Math.ceil(
      timeDifference / (1000 * 60 * 60 * 24)
    );

    return dayDifference;
  };
  return (
    <Main>
      <Head>
        <title>만다르트 메인 헤더</title>
        <meta name="description" content="만다라트 헤더" />
        <meta name="keywords" content="만다라트,mandalart" />
      </Head>
      <TitleText theme={theme}>
        <Dday theme={theme}>
          {`D-${getDisDate(MandartData?.[0]?.due || new Date())}`}
        </Dday>
        <MainText>
          {MandartData?.[0]?.title}
          {/* <IcoUpdateText src={IcoPencil} alt="update title" /> */}
        </MainText>
      </TitleText>
      <MyFavorite>
        {/* <MyFavoriteItem theme={theme}>#디자인</MyFavoriteItem> */}
      </MyFavorite>
    </Main>
  );
};
export default MandartHeader;
