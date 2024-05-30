import styled from '@emotion/styled';

export const Container = styled.div`
  width: 356px;
  height: 243px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.div`
  text-align: center;
  width: 107px;
  height: 155px;
  gap: 12px;
`;

export const Text = styled.div(({ theme }) => ({
  fontSize: theme.typography.text1.fontSize,
  fontWeight: theme.typography.text1.fontWeight,
  lineHeight: `${theme.typography.text1.lineHeight}px`,
  color: theme.colors.green[0],
}));

export const Description = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '600px',
  height: '68px',
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
}));
