import LOCAL_STORAGE from "../constants/localStorage";

const useAuth = () => {
  // @TODO: add comprehensive logic
  const isAuthenticated = window.localStorage.getItem(
    LOCAL_STORAGE.isAuthenticated
  );

  return {
    isAuthenticated: isAuthenticated === "true",
  };
};

export default useAuth;
