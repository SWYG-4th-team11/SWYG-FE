import styled from '@emotion/styled';

export const TopBox = styled.div(({ theme }) => ({
  display: 'flex',
  width: '1161px',
  height: '475px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  border: `1px solid ${theme.colors.gray[5]}`,
  marginBottom: '20px',
}));

export const Title = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.title1.fontSize,
  fontWeight: theme.typography.title1.fontWeight,
  lineHeight: `${theme.typography.title1.lineHeight}px`,
  width: '1161px',
}));

export const Description = styled.div(({ theme }) => ({
  color: theme.colors.gray[0],
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  position: 'absolute',
  top: '-25px',
  right: '20px',
}));

export const LineWrapper = styled.div(({ theme }) => ({
  width: '916px',
  height: '44px',
  gap: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.smallTitle': {
    color: theme.colors.green[0],
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
  },

  '.smallWrapper': {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.title': {
    color: theme.colors.gray[0],
    fontSize: theme.typography.text1.fontSize,
    fontWeight: theme.typography.text1.fontWeight,
    lineHeight: `${theme.typography.text1.lineHeight}px`,
    marginRight: '15px',
  },

  '.line': {
    backgroundColor: theme.colors.green[0],
    width: '534px',
    height: '8px',
  },

  '.description': {
    color: theme.colors.gray[4],
    fontSize: theme.typography.text3.fontSize,
    fontWeight: theme.typography.text3.fontWeight,
    lineHeight: `${theme.typography.text3.lineHeight}px`,
  },
}));

interface ProgressBarProps {
  exp: number; // 너비를 백분율로 받기 위해 number 타입으로 정의
}

export const ProgressBarContainer = styled.div(({ theme }) => ({
  width: '534px', // 전체 너비
  height: '10px',
  backgroundColor: theme.colors.gray[5], // 그레이 색상 배경
  borderRadius: '5px',
  overflow: 'hidden', // 내용이 넘치지 않도록 설정
}));

export const ProgressBarFiller = styled.div<ProgressBarProps>(
  ({ theme, exp }) => ({
    width: `${exp}%`, // 경험치 백분율에 따라 너비 설정
    height: '100%',
    backgroundColor: theme.colors.green[0], // 그린 색상 진행 바
    borderRadius: 'inherit',
    transition: 'width 0.2s ease-in', // 너비 변경 시 애니메이션 효과
  })
);
