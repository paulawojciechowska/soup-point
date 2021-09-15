import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`;
export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.font.m};
  margin: 55px 0 0 0;
`;