import LOCAL_STORAGE from "../constants/localStorage";
import Role from "../constants/role";
import passwordData from "../data/password";
import userData from "../data/user";

const authenticateUser = (email: string, password: string, role: Role) => {
  const user = userData.find(
    (user) => user.email === email && user.role === role
  );

  if (user && passwordData[user.id] === password) {
    return user;
  }

  return null;
};

export const getUserCredentials = () => {
  const stringifiedData = localStorage.getItem(LOCAL_STORAGE.userCredentials);
  if (stringifiedData) {
    return JSON.parse(stringifiedData);
  }
  return null;
};

export const logoutUser = () => {
  localStorage.removeItem(LOCAL_STORAGE.userCredentials);
};

export default authenticateUser;
