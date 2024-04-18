import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Home from '@/pages';

describe('Home Component Tests', () => {
  test('renders Home component', () => {
    render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );
    expect(screen.getByText('ㅇㅇ')).toBeInTheDocument();
  });
});
