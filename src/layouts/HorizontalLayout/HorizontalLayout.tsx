import Footer from '@/components/common/Footer';
import HorizontalHeader from './HorizontalHeader';

interface HorizontalLayoutProps {
  children?: React.ReactNode;
}

const VerticalLayout = ({ children }: HorizontalLayoutProps) => (
  <div>
    <HorizontalHeader />
    {children}
    <Footer />
  </div>
);

export default VerticalLayout;
