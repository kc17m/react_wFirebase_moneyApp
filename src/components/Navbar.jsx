import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { logout } = useLogout(); //fires useLogout hook
  //this will lead to useReducer -> Dispatch -> useAuthContext
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
