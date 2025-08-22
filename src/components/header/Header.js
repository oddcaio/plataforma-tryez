import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">TryEz</h1>
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
      </Link>
    </header>
  );
}

export default Header;