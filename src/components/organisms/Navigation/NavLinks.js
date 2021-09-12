import React from 'react';
import { NavLink } from 'react-router-dom';
import { LinksWrapper, StyledHeading } from './NavLinks.styled';

const NavLinks = ({ isOpen }) => (
  <LinksWrapper isOpen={isOpen}>
    <StyledHeading exact as={NavLink} to="/">
      Home
    </StyledHeading>
    <StyledHeading as={NavLink} to="/delivery">
      Delivery
    </StyledHeading>
    <StyledHeading as={NavLink} to="/order">
      Order
    </StyledHeading>
    <StyledHeading as={NavLink} to="/login">
      Login
    </StyledHeading>
  </LinksWrapper>
);

export default NavLinks;
