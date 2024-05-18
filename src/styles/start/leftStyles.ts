import styled from '@emotion/styled';

export const ContentSection = styled.section(({ theme }) => ({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  widows: '481px',
  height: '196px',
  fontSize: `${theme.typography.title1.fontSize}px`,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
}));

export const TextFrame = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  marginTop: '-1px',
  position: 'relative',
  whiteSpace: 'nowrap',
  width: 'fit-content',
}));

export const Description = styled.p(({ theme }) => ({
  color: theme.colors.gray[1],
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  textAlign: 'start',
}));

export const BtnWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: row;
  width: 460px;
  gap: 12px 12px;
  position: relative;
  margin-top: 40px;
`;

export const StartBtn = styled.button(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  gap: '16px',
  height: '64px',
  padding: '20px 24px 20px 40px',
  border: `2px solid ${theme.colors.green[0]}`,
  backgroundColor: theme.colors.green[0],
  color: theme.colors.white,
  borderRadius: '40px',
  cursor: 'pointer',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
}));

export const JoinBtn = styled.button(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex',
  gap: '16px',
  height: '64px',
  padding: '20px 24px 20px 40px',
  border: `2px solid ${theme.colors.gray[2]}`,
  backgroundColor: theme.colors.white,
  color: theme.colors.gray[2],
  borderRadius: '40px',
  cursor: 'pointer',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
}));

export const BtnText = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  textAlign: 'left',
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
}));
