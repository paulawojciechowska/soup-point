import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from 'components/atoms/Header/Header';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Home.styles';
import MainSoup from 'components/molecules/MainSoup/MainSoup';

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
