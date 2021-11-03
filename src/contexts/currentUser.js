import { useState, createContext } from "react";

export const CurrentUserContext = createContext([{}, () => {}]);

const CurrentUserProvider = ({ children, ...rest }) => {
  const [state, setState] = useState({
    isLoading: false,
    isLoggedIn: null,
    currentUser: null,
  });

  return (
    <CurrentUserContext.Provider value={[state, setState]} {...rest}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
