import styled from '@emotion/styled';

export const Title = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  textAlign: 'center',
  width: '160px',
  height: '68px',
  gap: '12px',
}));
