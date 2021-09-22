import React, { useContext } from 'react';
import styled from 'styled-components';
import { Header } from 'components/atoms/Header/Header';
import CartInfo from 'components/molecules/CartInfo/CartInfo';
import { SoupsWrapper, SoupWrapper } from './Cart.styles';
import { dataContext } from 'providers/DataProvider';

export const Wrapper = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  width: 37vw;
`;
const Cart = () => {
  const { address, soups } = useContext(dataContext);
  return (
    <Wrapper>
      <Header>ORDER SUMMARY</Header>
      <SoupsWrapper>
        {soups.map((soup) => {
          return (
            <SoupWrapper>
              <CartInfo title="Soup flavour" content={soup.flavour} />
              <CartInfo title="Additives" content={soup.additive} />
            </SoupWrapper>
          );
        })}
      </SoupsWrapper>
      <CartInfo title="Delivery Adress" content={`${address[0].street}, ${address[0].number}`} />
      <CartInfo title="Approximate delivery time" content={address[0].time} />
    </Wrapper>
  );
};

export default Cart;
