import styled from '@emotion/styled';

export const Description = styled.div(({ theme }) => ({
  color: theme.colors.gray[1],
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  marginBottom: '20px',
}));
