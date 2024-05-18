import styled from '@emotion/styled';

export const Label = styled.label(({ theme }) => ({
  width: '160px',
  height: '32px',
  fontSize: theme.typography.title3.fontSize,
  fontWeight: theme.typography.title3.fontWeight,
  lineHeight: `${theme.typography.title3.lineHeight}px`,
  marginTop: '8px',
}));
