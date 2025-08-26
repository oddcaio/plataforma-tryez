import { Link } from "react-router-dom";
import './Header.css';
import { AiFillCrown } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">TryEz
        <AiFillCrown />
      </h1>
      <nav>
        <ul className="nav-list">
          <li><Link to="/coachs">Coachs</Link></li>
          <li><Link to="/aprenda">Aprenda</Link></li>
          <li><Link to="/ensine">Ensine</Link></li>
          <li><Link to="/descubra">Descubra</Link></li>
        </ul>
      </nav>
      <Link to="/login" className="btn-login">
        Entrar
        <AiFillCaretLeft />
      </Link>
    </header>
  );
}

export default Header;