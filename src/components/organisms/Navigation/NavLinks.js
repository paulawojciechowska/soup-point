import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 50px;
  top: 100px;
  align-items: flex-end;
`;
const StyledHeading = styled.h1``;
const NavLinks = () => (
  <LinksWrapper>
    <StyledHeading exact as={NavLink} to="/">
      Home
    </StyledHeading>
    <StyledHeading as={NavLink} to="/delivery">
      Delivery
    </StyledHeading>
    <StyledHeading as={NavLink} to="/sign">
      SignIn
    </StyledHeading>
  </LinksWrapper>
);

export default NavLinks;
