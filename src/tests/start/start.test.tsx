import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import Start from '@/pages/start';
import { theme } from '@/providers/ThemeProvider/ThemeProvider';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Start Component Tests', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  test('renders Start component', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Start />
        </RecoilRoot>
      </ThemeProvider>
    );
    expect(screen.getByText('목표 달성을 위하여 함께!')).toBeInTheDocument();
  });

  test('handles start button click', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Start />
        </RecoilRoot>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('시작하기'));
    expect(pushMock).toHaveBeenCalledWith('/serviceInformation');
  });

  test('handles join button click', () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Start />
        </RecoilRoot>
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('회원가입'));
    expect(pushMock).toHaveBeenCalledWith('/join');
  });
});
