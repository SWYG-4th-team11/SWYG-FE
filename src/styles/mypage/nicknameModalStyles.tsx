import styled from '@emotion/styled';

export const Wrapper = styled.div(({ theme }) => ({
  width: '600px',
  height: ' 200px',
  gap: ' 40px',
  padding: '40px 28px 28px 28px',
  position: 'absolute',
  top: '600px',
  left: '50%',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  backgroundColor: 'white',
  borderRadius: '16px',

  '.div1': {
    width: 'fit-content',
    gap: '8px',
    padding: '10 0px',
  },

  '.title': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.title3.fntSize,
    fontWeight: theme.typography.title3.fotWeight,
    lineHeight: `${theme.typography.title3.lineHeight}px`,
  },
}));

export const Input = styled.input<{ error?: boolean }>(({ theme, error }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.colors.gray[6],
  borderRadius: '6px',
  gap: '10px',
  height: '72px',
  width: '544px',
  padding: '0 20px',
  position: 'relative',

  border: error ? '2px solid red' : '1px solid #ccc', // 기본 테두리 색상

  '::plcaeholder': {
    color: theme.colors.gray[3],
    fontSize: theme.typography.text3.fntSize,
    fontWeight: theme.typography.text3.fotWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    position: 'fixed',
    left: '0',
    top: '0',
    whiteSpace: 'nowrap',
    height: '30px',
    width: '203px',
  },
}));

export const Button = styled.button(({ theme }) => ({
  width: '590px',
  height: '72px',
  color: theme.colors.white,
  backgroundColor: theme.colors.green[0],
  borderRadius: '40px',
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  border: 'none',
  cursor: 'pointer',
}));
