import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import HorizontalLayout from '../HorizontalLayout/HorizontalLayout';
import MobileLayout from '../MobileLayout/MobileLayout';
import LayoutStore from '@/store/common/LayoutStore';

interface ResponsiveLayoutProps {
  children?: React.ReactNode;
}

const ResponsiveLayout = ({ children }: ResponsiveLayoutProps) => {
  const layout = useRecoilValue(LayoutStore); // recoil 상태 읽기 및 설정

  const Layout = useMemo(() => {
    switch (layout) {
      case 'Horizontal':
        return HorizontalLayout;
      case 'mobile':
        return MobileLayout;
      default:
        throw new Error(`Invalid layout: ${layout}`);
    }
  }, [layout]);

  return <Layout>{children}</Layout>;
};

export default ResponsiveLayout;
