import styled from '@emotion/styled';
import Head from 'next/head';
// import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  @media (max-width: 1300px) {
    width: 76px;
    height: 32px;
  }
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
const MyFavoriteItem = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 40px;
  font-weight: bold;
  border: 1px ${({ theme }) => theme.colors.green[0]} solid;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.green[0]};
`;
// const IcoUpdateText = styled(Image)`
//   padding-left: 8px;
//   cursor: pointer;
// `;
const MandartHeader = () => {
  const theme = useTheme() as Theme;
  const router = useRouter();
  // const id =
  //   typeof window !== 'undefined' ? Number(localStorage?.getItem('id')) : null;
  const [id, setId] = useState(0);
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
  useEffect(() => {
    const storedId = Number(localStorage.getItem('id'));
    if (storedId) {
      setId(Number(storedId));
    } else {
      router.push('/');
    }
  }, []);
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
        {/* <MyFavoriteItem theme={theme}>
          {`# ${MandartData?.[0].categories[0]}`}
        </MyFavoriteItem> */}
        {MandartData?.[0]?.categories.map((value, index) => {
          if (index > 2) return null;
          return (
            <MyFavoriteItem key={`${index + 1}${value}`} theme={theme}>
              {`# ${value}`}
            </MyFavoriteItem>
          );
        })}
      </MyFavorite>
    </Main>
  );
};
export default MandartHeader;
