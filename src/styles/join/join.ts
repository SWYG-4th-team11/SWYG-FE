import styled from '@emotion/styled';

export const BoxWrapper = styled.div(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.gray[4]}`,
  borderRadius: '20px',
  gap: '32px',
  padding: '56px 32px 40px',
}));

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

export const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  width: 860px;
  padding: 20px 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  width: 859px;
  gap: 16px;
  /* height: 140px; */
`;

export const MultiInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  width: 859px;
  gap: 16px;

  /* height: 260px; */
`;

export const Label = styled.label(({ theme }) => ({
  width: '160px',
  height: '32px',
  fontSize: theme.typography.title3.fontSize,
  fontWeight: theme.typography.title3.fontWeight,
  lineHeight: `${theme.typography.title3.lineHeight}px`,
  marginTop: '8px',
}));

export const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 859px;
  position: relative;
`;
