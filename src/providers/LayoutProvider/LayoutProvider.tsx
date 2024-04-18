import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Global, css } from '@emotion/react';
import LayoutStore from '@/store/common/LayoutStore';
import useMediaQuery from '@/hooks/useMediaQuery/useMediaQuery';

interface LayoutProviderProps {
  children: React.ReactNode;
}

const style = css`
  html,
  body {
    margin: 0;
    padding: 0;
  }
`;

function LayoutProvider({ children }: LayoutProviderProps) {
  const setLayout = useSetRecoilState(LayoutStore); // recoil 상태 읽기 및 설정
  const isMobile = useMediaQuery('(max-width: 768px)'); // 768px 이하일 경우 모바일로 간주

  useEffect(() => {
    // 화면 크기에 따라 레이아웃 상태 업데이트
    if (isMobile) {
      setLayout('mobile');
    } else {
      setLayout('Horizontal');
    }
  }, [isMobile, setLayout]); // 의존성 배열에 isMobile과 setLayout 추가

  return (
    <div>
      <Global styles={style} />
      {children}
    </div>
  );
}

export default LayoutProvider;
