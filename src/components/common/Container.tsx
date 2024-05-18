import styled from '@emotion/styled';

export const BaseWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem',
  backgroundColor: theme.colors.gray[6],
  height: '80vh',
}));
