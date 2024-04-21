import Role from "../constants/role";
import { User } from "../types/User";

const userData: User[] = [
  {
    id: 1,
    email: "prashwarmishra@gmail.com",
    firstName: "Prashwar",
    lastName: "Mishra",
    fullName: "Prashwar Mishra",
    role: Role.Admin,
  },
  {
    id: 2,
    email: "maghav@credhive.in",
    firstName: "Maghav",
    lastName: "Kumar",
    fullName: "Maghav Kumar",
    role: Role.Admin,
  },
  {
    id: 3,
    email: "chirag@credhive.in",
    firstName: "Chirag",
    lastName: "Sharma",
    fullName: "Chirag Sharma",
    role: Role.Admin,
  },
  {
    id: 4,
    email: "Loremipsum@credhive.in",
    firstName: "Lorem",
    lastName: "Ipsum",
    fullName: "Chirag Sharma",
    role: Role.Admin,
  },
  {
    id: 5,
    email: "prashwarmishra@gmail.com",
    firstName: "Prashwar",
    lastName: "Mishra",
    fullName: "Prashwar Mishra",
    role: Role.Labeler,
  },
];

export default userData;
