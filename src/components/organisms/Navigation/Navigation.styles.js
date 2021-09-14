import styled from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px;
  z-index: 88888;
`;
export const NavigationMenu = styled(BiMenuAltRight)`
  color: white;
  height: 60px;
  width: 40px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
