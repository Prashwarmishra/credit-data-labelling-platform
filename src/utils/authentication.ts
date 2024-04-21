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

export default authenticateUser;
