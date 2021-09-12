import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  width: 37vw;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  @media (max-width: 1190px) {
    flex-direction: column;
  }
`;
