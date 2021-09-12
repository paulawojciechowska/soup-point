import React, { useState } from 'react';
import styled from 'styled-components';
import MainLogo from 'assets/images/mainLogo.svg';
import NavLinks from './NavLinks';
import { BiMenuAltRight } from 'react-icons/bi';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px;
`;
const NavigationMenu = styled(BiMenuAltRight)`
  color: white;
  height: 60px;
  width: 40px;
  cursor: pointer;
`;

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Wrapper>
        <img src={MainLogo} alt="logo" />
        <NavigationMenu onClick={() => setOpenNav(!openNav)} />
      </Wrapper>
      {openNav && <NavLinks />}
    </>
  );
};

export default Navigation;
