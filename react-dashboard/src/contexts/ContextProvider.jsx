

    import React, { createContext, useContext, useState,  useEffect} from 'react';

const StateContext = createContext();

const initialState = {
  cart: false,
  chat: false,
  notification: false,
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked,) => {
    setIsClicked({ ...initialState, [clicked]: true });
   
  };

  const closeComponent = () => {
    setIsClicked (initialState);
  }

  useEffect(() => {
  const handleResize = () => setScreenSize(window.innerWidth);

  window.addEventListener('resize', handleResize);
  handleResize(); // set initial value
  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        closeComponent,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
