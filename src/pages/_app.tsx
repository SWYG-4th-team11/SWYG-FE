import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import LayoutProvider from '@/providers/LayoutProvider/LayoutProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider/ReactQueryProvider';
import GlobalStyle from '@/styles/globalStyles';
import { theme } from '@/providers/ThemeProvider/ThemeProvider';
import { Api } from '@/utils/apis';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Api.init();
  }, []);

  return (
    <ReactQueryProvider pageProps={pageProps}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </RecoilRoot>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
