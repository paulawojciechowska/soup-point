import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;
export const WrapperDark = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBrown};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.15;
`;
export const InfoPlate = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vw;
  height: 80vh;
  min-height: 540px;
  border-radius: 45px;
  box-shadow: 0 0 3.5em ${({ theme }) => theme.colors.brownDark};
  background-color: transparent;
`;
