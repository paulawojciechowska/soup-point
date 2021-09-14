import styled from 'styled-components';

export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 55px;
  top: 60px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 15px;
  border-radius: 15px;
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(0)')};
  transform-origin: right top;
  transition: transform 0.6s ease-in-out;
  z-index: 888888;
`;
export const StyledHeading = styled.h1`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.font.l};
  font-weight: ${({ theme }) => theme.font.bold};
  opacity: 1;
  margin: 5px 0;
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
