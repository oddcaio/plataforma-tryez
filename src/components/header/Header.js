import { Link } from "react-router-dom";
import './Header.css';
import { AiFillCrown } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

function Header() {
  return (
    <header className="header">

      <nav>
        <ul className="nav-list">
          <li>
            <h1 className="logo">tryez
              <AiFillCrown style={{ color: "#F2643E" }} />
            </h1>
          </li>

          <li><Link to="/mentoria">Mentoria</Link></li>
          <li><Link to="/aprenda">Aprenda</Link></li>
          <li><Link to="/ensine">Ensine</Link></li>
          <li><Link to="/descubra">Descubra</Link></li>
          <li>
            <Link to="/login" className="btn-login" style={{fontFamily: "'League Spartan', sans-serif"  }}>
              Entrar
              <AiFillCaretLeft />
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;