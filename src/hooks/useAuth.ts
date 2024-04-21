import LOCAL_STORAGE from "../constants/localStorage";

const useAuth = () => {
  // @TODO: add comprehensive logic
  const isAuthenticated = window.localStorage.getItem(
    LOCAL_STORAGE.userCredentials
  );

  return {
    isAuthenticated: !!isAuthenticated,
  };
};

export default useAuth;
