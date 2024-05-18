import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/providers/ThemeProvider/ThemeProvider';
import HomeMain from '@/pages';

import ResponsiveLayout from '@/layouts/ResponsiveLayout/ResponseiveLayout';
import { queryClient } from '@/utils/apis';

// Next.js Router 모듈 mock
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Home Component Tests', () => {
  test('renders Home component', () => {
    const router = {
      push: jest.fn(), // Router의 push 메서드를 mock
    };

    (useRouter as jest.Mock).mockReturnValue(router); // useRouter 함수의 결과를 mock

    render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <HomeMain />
          </RecoilRoot>
        </ThemeProvider>
      </QueryClientProvider>
    );
    // expect(screen.getByText('목표')).toBeInTheDocument();
  });
});

export default function Home() {
  return (
    <ResponsiveLayout>
      <div>목표</div>
    </ResponsiveLayout>
  );
}
