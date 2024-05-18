/* eslint-disable no-nested-ternary */
// Emotion Styled Import
import styled from '@emotion/styled';

export const SmallInput = styled.input<{ error?: boolean; success?: boolean }>(
  ({ theme, error, success }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[6],
    borderRadius: '6px',
    gap: '10px',
    height: '72px',
    width: '736px',
    padding: '0 20px',
    position: 'relative',
    border: error
      ? '2px solid red'
      : success
      ? '2px solid green'
      : '1px solid #ccc', // 기본 테두리 색상

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
  })
);

export const BigInput = styled.input<{ error?: boolean; success?: boolean }>(
  ({ theme, error, success }) => ({
    width: '860px',
    height: '40px',
    padding: '16px 20px',
    backgroundColor: theme.colors.gray[6],
    position: 'relative',
    gap: '10px',
    borderRadius: '6px',
    fontSize: theme.typography.text3.fntSize,
    fontWeight: theme.typography.text3.fotWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
    border: error
      ? '2px solid red'
      : success
      ? '2px solid green'
      : '1px solid #ccc', // 기본 테두리 색상

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
  })
);
