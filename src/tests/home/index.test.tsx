import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import Home from '@/pages';
import { theme } from '@/providers/ThemeProvider/ThemeProvider';

describe('Home Component Tests', () => {
  test('renders Home component', () => {
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
