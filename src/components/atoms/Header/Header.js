import styled from 'styled-components';

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.font.xl};
  margin: 10px 0;
  @media (max-width: 1190px) {
    font-size: ${({ theme }) => theme.font.l};
  }
`;
