import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import MainSoup from 'components/molecules/MainSoup/MainSoup';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  position: relative;
  h4 {
    max-width: 400px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: ${({ theme }) => theme.font.bold};
    margin: 15px 0;
  }
  h5 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: ${({ theme }) => theme.font.regular};
    max-width: 350px;
    margin: 15px 0;
  }
  img {
    width: 200px;
    margin: 20px 0;
    position: absolute;
    top: 100%;
  }
  div {
    display: flex;
    gap: 20px;
    @media (max-width: 1190px) {
      flex-direction: column;
    }
  }
`;
const Home = () => (
  <Wrapper>
    <Header>Welcome to Souppoint</Header>
    <h4>Neque porro quisquam est qui dolorem ipsum</h4>
    <h5>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.</h5>
    <MainSoup />
    <div>
      <Button grey as={NavLink} to="/order">
        Make an order
      </Button>
      <Button as={NavLink} to="/login">
        Login
      </Button>
    </div>
  </Wrapper>
);

export default Home;
