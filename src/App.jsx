import React, { useState } from "react";
import { createContext } from "react";
import './index.css';
import Navbar from "./comps/NavBar";
import FullPage from "./comps/ReactFullPage";

export const ThemeContext = React.createContext(null)

const App = () => {
  const [theme, setTheme]= useState('dark')

  const toggleTheme = () => {
    setTheme((curr) =>(curr === 'light' ? 'dark': 'light'))
  }


  return(
    <ThemeContext.Provider value={{theme, setTheme}}> 
      <div id={theme}>
        <Navbar toggleTheme={toggleTheme}/>
        <FullPage />
      </div> 
    </ThemeContext.Provider>
  )
}
export default App;