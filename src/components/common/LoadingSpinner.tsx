import styled from '@emotion/styled';

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
  z-index: 9999;
  position: fixed;
  top: 30%;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
