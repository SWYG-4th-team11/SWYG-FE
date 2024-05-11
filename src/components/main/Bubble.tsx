import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@/providers/ThemeProvider/ThemeProvider';

const BubbleWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 64px;
  padding: 0px;
  background: #ebf6eb;
  border-radius: 30px;
  padding: 24px 20px;
  gap: 10px;
  margin-bottom: 10px;

  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 15px 0;
    border-color: #ebf6eb transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -15px;
    left: 120px;
  }
`;
const BubbleText = styled.div<{ theme: Theme }>`
  font-size: ${({ theme }) => theme.typography.text4.fontSize};
  /* font-weight: ${({ theme }) => theme.typography.text4.fontWeight}; */
  font-weight: bold;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray[0]};
`;
interface BubbleProps {
  children: string;
}
const Bubble = ({ children }: BubbleProps) => {
  const theme = useTheme() as Theme;
  return (
    <BubbleWrapper>
      <BubbleText theme={theme}>{children}</BubbleText>
    </BubbleWrapper>
  );
};
export default Bubble;
