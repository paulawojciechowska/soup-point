import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ orange, theme }) => (orange ? theme.colors.orange : theme.colors.darkGrey)};
  font-size: ${({ small, theme }) => (small ? theme.font.s : theme.font.m)};
  margin: ${({ small }) => (small ? '5px 0;' : '55px 0 0 0')};
  width: ${({ small }) => (small ? '200px' : 'auto')};
  @media (max-width: 1190px) {
    margin: 5px 0;
    font-size: 12px;
  }
`;
