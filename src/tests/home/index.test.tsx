import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { useRouter } from 'next/router';
import Home from '@/pages';
import { theme } from '@/providers/ThemeProvider/ThemeProvider';

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
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Home />
        </RecoilRoot>
      </ThemeProvider>
    );
    expect(screen.getByText('ㅇㅇ')).toBeInTheDocument();
  });
});
