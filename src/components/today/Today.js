import { useContext } from "react";
import UserContext from "../../contexts/userContext";
export default function Today() {
  const { user } = useContext(UserContext);
  return <span>{user.name}</span>;
}
