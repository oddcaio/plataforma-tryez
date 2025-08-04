import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import { GoTriangleDown } from "react-icons/go";



function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="logo"
        className="logo"
        style={{ width: '150px', height: 'auto' }}
      />
      <nav className='nav-links'>
        <Link to="/">Coachs</Link>
        <Link to="/">Aprenda</Link>
        <Link to="/">Ensine</Link>
        <Link to="/">Descubra</Link>
        <Link to="/">Explorar</Link>
      </nav>
      <button>
        <Link to="/">Entrar</Link>
        <GoTriangleDown />
      </button>
    </header >
  );
}

export default Header;
