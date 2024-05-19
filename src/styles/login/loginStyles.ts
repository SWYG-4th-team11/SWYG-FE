import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.gray[6], // 테마의 회색 색상 사용
  height: '70vh', // 전체 높이
}));

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 7.8px;
  height: 78.2px;
  padding: 9.36px;
  position: relative;
  width: 750px;
`;

export const LoginBox = styled.div(({ theme }) => ({
  width: '664px',
  // height: '576px',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.gray[4]}`,
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  padding: '56px 32px 40px',
}));

export const LoginBoxTop = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  position: relative;

  .div-2 {
    align-items: flex-end;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    position: relative;
  }
`;

export const InputWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  position: relative;

  .div-4 {
    display: inline-flex;
    align-items: flex-start;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }
`;

export const WrapperTitle = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title2.fontSize,
  fontWeight: theme.typography.title2.fontWeight,
  lineHeight: `${theme.typography.title2.lineHeight}px`,
  marginTop: '-1px',
  position: 'relative',
  width: '141px',
}));

export const Input = styled.input(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.gray[6],
  borderRadius: '8px',
  height: '72px',
  padding: '8px 20px',
  position: 'relative',
  width: '600px',
  color: theme.colors.gray[3],
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  whiteSpace: 'nowrap',
  border: `1px solid ${theme.colors.gray[4]}`,
}));

export const Line = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;

  .div-5 {
    flex: 0 0 auto;
    position: relative;
  }
`;

export const ButtonWrapper = styled.div(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.colors.green[0],
  borderRadius: '40px',
  display: 'flex',
  gap: '8px',
  height: '72px',
  justifyContent: 'center',
  padding: '8px 20px',
  position: 'relative',
  width: '600px',
  cursor: 'pointer',

  '.text-wrapper-3': {
    color: theme.colors.white,
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    backgroundColor: theme.colors.green[0],
    border: 'none',
    cursor: 'pointer',
  },
}));

export const SocialIconsWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  margin-left: -20px;
  margin-right: -20px;
  position: relative;

  .div-8 {
    display: inline-flex;
    align-items: flex-start;
    flex: 0 0 auto;
    gap: 24px;
    position: relative;
  }
`;

export const EasyLoginLine = styled.div(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flex: '0 0 auto',
  gap: '1px',
  position: 'relative',
  width: '640px',

  '.rectangle': {
    backgroundColor: theme.colors.gray[4],
    height: '1px',
    position: 'relative',
    width: '267px',
  },

  '.div-wrapper-3': {
    alignItems: 'center',
    display: 'inline-flex',
    flex: '0 0 auto',
    gap: '10px',
    justifyContent: 'center',
    padding: '10px 12px',
    position: 'relative',
  },

  '.text-wrapper-4': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  '.tectangle-2': {
    backgroundColor: theme.colors.gray[4],
    height: '1px',
    position: 'relative',
    width: '266px',
  },
}));

export const BottomBox = styled.div(({ theme }) => ({
  display: 'inline-flex',
  gap: '12px',
  alignItems: 'center',
  position: 'relative',
  marginTop: '20px',

  '.text-wrapper': {
    color: theme.colors.gray[3],
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '-0.24px',
    lineHeight: '28px',
    marginTop: '-1px',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 'fit-content',
  },

  '.div': {
    color: theme.colors.green[0],
    fontSize: '20px',
    fontWeight: '600',
    letterSpacing: '-0.24px',
    lineHeight: '28px',
    marginTop: '-1px',
    position: 'relative',
    textDecoration: 'underline',
    whiteSpace: 'nowrap',
    width: 'fit-content',
    cursor: 'pointer',
  },
}));
