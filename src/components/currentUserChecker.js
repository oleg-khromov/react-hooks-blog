import { useEffect, useContext } from "react";
import { useFetch, useLocalStorage } from "../hooks";
import { CurrentUserContext } from "../contexts/currentUser";

const CurrentUserChecker = ({ children }) => {
  const [{ data }, doFetch] = useFetch("user");
  const [token] = useLocalStorage("token");
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) {
      setCurrentUserState((state) => ({
        ...state,
        isLoggedIn: false,
      }));

      return;
    }

    doFetch();
    setCurrentUserState((state) => ({
      ...state,
      isLoading: true,
    }));
  }, [token, setCurrentUserState, doFetch]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setCurrentUserState((state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: data.user,
    }));
  }, [data, setCurrentUserState]);

  return children;
};

export default CurrentUserChecker;
