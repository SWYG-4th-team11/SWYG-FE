import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import LayoutProvider from '@/providers/LayoutProvider/LayoutProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider/ReactQueryProvider';
import GlobalStyle from '@/styles/globalStyles';
import { theme } from '@/providers/ThemeProvider/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
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
