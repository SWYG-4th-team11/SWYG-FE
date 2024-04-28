import styled from '@emotion/styled';
import Footer from '@/components/common/Footer';
import HorizontalHeader from './HorizontalHeader';

interface HorizontalLayoutProps {
  children?: React.ReactNode;
}

const Wrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.gray[6],
  height: '994px',
  width: '100%',
}));

const VerticalLayout = ({ children }: HorizontalLayoutProps) => (
  <>
    <HorizontalHeader />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
);

export default VerticalLayout;
