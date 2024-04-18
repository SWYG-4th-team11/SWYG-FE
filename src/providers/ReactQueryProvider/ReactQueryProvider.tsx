/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

interface ReactQueryProviderProps {
  children: React.ReactNode;
  pageProps: any; // any 타입으로 설정 => 추후 변경? any 타입 사용에 대한 고민 필요
}

const ReactQueryProvider = ({
  children,
  pageProps,
}: ReactQueryProviderProps) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0, // 재시도 횟수
        refetchOnWindowFocus: false, // 창이 포커스될 때 다시 불러올지 여부
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
  }));
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
