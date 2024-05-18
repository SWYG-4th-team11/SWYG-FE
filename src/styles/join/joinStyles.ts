import styled from '@emotion/styled';

export const BoxWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  gap: 32px;
  padding: 56px 32px 40px;
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
`;

export const BtnWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 859px;
  position: relative;
`;
