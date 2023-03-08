import CartWidget from "../CartWidget";
import "./styles.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img className="imagen-logo"
              src="/images/tunel_icon.png"
              alt="Site logo"
              height="100"
              width="100"
            />
          </Link>
        </div>

        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/detalle">Detalle</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
