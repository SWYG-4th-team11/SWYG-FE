// Emotion Styled Import
import styled from '@emotion/styled';

// NextButton 컴포넌트 정의
export const NextButton = styled.button(({ theme }) => ({
  width: '860px',
  height: '84px',
  display: 'flex',
  gap: '16px',
  padding: '20px 40px',
  alignItems: 'center',
  backgroundColor: theme.colors.green[0],
  borderRadius: '40px',
  color: theme.colors.white,
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: theme.typography.title2.fontSize,
  fontWeight: theme.typography.title2.fontWeight,
  lineHeight: `${theme.typography.title2.lineHeight}px`,
  marginTop: '1rem',
  border: 'none',
}));

export const CheckButton = styled.button(({ theme }) => ({
  alignItems: 'center',
  border: '2px solid',
  borderColor: theme.colors.green[0],
  borderRadius: '6px',
  display: 'flex',
  gap: '10px',
  height: '74px',
  justifyContent: 'center',
  padding: '16px',
  position: 'relative',
  width: '115px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green[0],
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  cursor: 'pointer',
}));

export const WhiteSmallButton = styled(NextButton)`
  width: 429px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray[4]};
  color: ${(props) => props.theme.colors.gray[1]};
`;

export const GreenSmallButton = styled(NextButton)`
  width: 429px;
`;
