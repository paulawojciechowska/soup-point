import styled from 'styled-components';

export const Wrapper = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.darkGrey};
  height: 35px;
  padding: 0 10px;
  width: 200px;
  margin: 5px 0;
`;
