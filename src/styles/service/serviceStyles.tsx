import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem', // 필요에 따라 조정하세요.
  backgroundColor: theme.colors.white[0], // 테마의 회색 색상 사용
  height: '70vh', // 전체 높이
  position: 'relative',
}));

export const LineWrppaer = styled.div(({ theme }) => ({
  width: '640px',
  hegith: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  '.line': {
    backgroundColor: theme.colors.green[0],
    width: '600px',
    height: '8px',
  },

  '.number': {
    color: theme.colors.gray[1],
  },
}));

export const TitleWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '490px',
  height: '148px',
  textAlign: 'center',
  marginTop: '50px',
  gap: '8px',

  '.title': {
    fontSize: theme.typography.title1.fontSize,
    fontWeight: theme.typography.title1.fontWeight,
    lineHeight: `${theme.typography.title1.lineHeight}px`,
  },

  '.description': {
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
    color: theme.colors.gray[0],
  },
}));

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 10px;
`;

export const TagButton = styled.button<{ isSelected?: boolean }>(
  ({ theme, isSelected }) => ({
    border: '1px solid', // 테두리 색상
    borderColor: isSelected ? theme.colors.green[0] : theme.colors.gray[4], // 선택 여부에 따라 색상 변경
    backgroundColor: '#fff',
    gap: '10px',
    padding: '32px 30px',
    cursor: 'pointer',
    height: '60px',
    borderRadius: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: '#d0d0d0',
    },
    color: theme.colors.gray[1], // 예시로 theme에서 text color를 사용
    fontSize: theme.typography.text2.fontSize,
    fontWeight: theme.typography.text2.fontWeight,
    lineHeight: `${theme.typography.text2.lineHeight}px`,
    position: 'relative',
  })
);

export const AddButton = styled(TagButton)`
  color: green;
  border: 1px solid green;
  /* padding: 32px 30px; */
  width: 120px;
`;
export const OrderIndicator = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.green[0]};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  pointer-events: none; // 이벤트 차단
`;

export const Description = styled.div(({ theme }) => ({
  fontSize: theme.typography.text3.fontSize,
  fontWeight: theme.typography.text3.fontWeight,
  lineHeight: `${theme.typography.text3.lineHeight}px`,
  color: theme.colors.gray[4],
  marginTop: '50px',
}));

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin-top: 50px;
`;
