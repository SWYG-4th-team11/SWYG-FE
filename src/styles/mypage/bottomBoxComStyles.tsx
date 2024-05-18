import styled from '@emotion/styled';

export const BottomBox = styled.div`
  width: 1160px;
  height: 396px;
  display: flex;
  flex-direction: column;
`;

export const AccountBox = styled.div(({ theme }) => ({
  width: '1160px',
  height: '252px',
  borderRadius: '16px',
  border: `1px solid ${theme.colors.green[0]}`,
  padding: '10px 0 0 20px',

  '.title': {
    width: '1160px',
    height: '76px',
    color: theme.colors.gray[3],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },

  '.description': {
    width: '1160px',
    // height: '176px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '20px',
    // padding: '20px 40px 40px 28px',
  },

  '.infoWrapper': {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '918px',
    height: '84px',
  },

  '.flex': {
    display: 'flex',
    flexDirection: 'column',
    width: '720px',
    height: '84px',
    justifyContent: 'space-around',
  },

  '.infoName': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.text1.fontSize,
    fontWeight: theme.typography.text1.fontWeight,
    lineHeight: `${theme.typography.text1.lineHeight}px`,
  },

  '.infoEmail': {
    color: theme.colors.gray[4],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },
}));

export const Button = styled.button(({ theme }) => ({
  fontSize: theme.typography.text2.fontSize,
  fontWeight: theme.typography.text2.fontWeight,
  lineHeight: `${theme.typography.text2.lineHeight}px`,
  color: theme.colors.gray[4],
  border: `1px solid ${theme.colors.gray[5]}`,
  padding: '12px 24px',
  backgroundColor: theme.colors.white,
  borderRadius: '12px',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.colors.gray[5],
  },
}));

export const PasswordBox = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: `1px solid ${theme.colors.gray[5]}`,
  borderRadius: '12px',
  marginTop: '20px',
  padding: '10px 0 0 20px',
  width: '1150px',
  height: '100px',
  '.imgWrapper': {
    width: '918px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },

  '.title': {
    color: theme.colors.gray[1],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },

  '.btnWrapper': {
    display: 'flex',
    width: '160px',
  },
}));
