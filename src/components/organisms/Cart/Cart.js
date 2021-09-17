import React from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import CartInfo from 'components/molecules/CartInfo/CartInfo';
import OrderSoup from 'components/molecules/OrderSoup/OrderSoup';

export const Wrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  width: 37vw;
`;
const Cart = () => (
  <Wrapper>
    <Header>ORDER SUMMARY</Header>
    <CartInfo title="Soup flavour" content="Tomato" />
    <CartInfo title="Additives" content="None" />
    <CartInfo title="Delivery Adress" content="Street, number" />
    <CartInfo title="Approximate delivery time" content="10:00" />
    <OrderSoup />
  </Wrapper>
);

export default Cart;
