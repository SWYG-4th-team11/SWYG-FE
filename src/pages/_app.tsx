import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import LayoutProvider from '@/providers/LayoutProvider/LayoutProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider/ReactQueryProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider pageProps={pageProps}>
      <RecoilRoot>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </RecoilRoot>
    </ReactQueryProvider>
  );
}
