import styled from '@emotion/styled';
import Image from 'next/image';
import { useTheme } from '@emotion/react';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';
import IcoPencil from '../../../public/image/IcoPencil.svg';

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
const MyFavoriteItem = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 40px;
  border: 1px ${({ theme }) => theme.colors.green[0]} solid;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.green[0]};
`;
const IcoUpdateText = styled(Image)`
  padding-left: 8px;
  cursor: pointer;
`;
const MandartHeader = () => {
  const theme = useTheme() as Theme;
  return (
    <Main>
      <TitleText theme={theme}>
        <Dday theme={theme}>D-150</Dday>
        <MainText>
          조금 더 성장하는 내가 되기 위하여
          <IcoUpdateText src={IcoPencil} alt="update title" />
        </MainText>
      </TitleText>
      <MyFavorite>
        {/* <MyFavoriteItem theme={theme}>#디자인</MyFavoriteItem> */}
      </MyFavorite>
    </Main>
  );
};
export default MandartHeader;
