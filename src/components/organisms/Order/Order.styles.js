import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  width: 37vw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  span {
    font-size: ${({ theme }) => theme.font.s};
    color: red;
  }
`;
