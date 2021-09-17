import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 1190px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const CategoryTitle = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.l};
  margin: 0;
  margin-right: 15px;
`;
const Content = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => theme.font.bold};
  font-size: ${({ theme }) => theme.font.l};
  text-transform: uppercase;
  margin: 0;
`;
const CartInfo = ({ title, content }) => (
  <Wrapper>
    <CategoryTitle orange>{title}:</CategoryTitle>
    <Content>{content}</Content>
  </Wrapper>
);

export default CartInfo;
