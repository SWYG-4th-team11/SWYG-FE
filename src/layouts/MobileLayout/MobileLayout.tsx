import Footer from '@/components/common/Footer';
import MobileHeader from './MobileHeader';

interface MobileLayoutProps {
  children?: React.ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => (
  <div>
    <MobileHeader />
    {children}
    <Footer />
  </div>
);

export default MobileLayout;

// 모바일 경우 레이아웃을 제공하는 레이아웃.
