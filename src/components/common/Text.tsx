import styled from '@emotion/styled';

export const ErrorText = styled.div(({ theme }) => ({
  color: 'red',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
}));

export const ConfirmText = styled.div(({ theme }) => ({
  color: 'green',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
}));
