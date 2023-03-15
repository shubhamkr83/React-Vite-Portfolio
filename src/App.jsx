import React, { useState } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Home/Home';

import Footer from './Components/Footer/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './Components/theme';


const StyledApp = styled.div``;

const App = () => {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledApp>
        <>
          <Navbar theme={theme} themeToggler={themeToggler} />
          <Home />
          
          <Footer />
        </>
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;