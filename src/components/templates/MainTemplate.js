import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { BrowserRouter as Router } from 'react-router-dom';

const MainTemplate = ({ children }) => (
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Router>
);

export default MainTemplate;
