import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Sarah Bryant</h1>
      <ul>
        <li>< Link to="/">About</Link></li>
        <li>< Link to="/portfolio">Portfolio</Link></li>
        <li>< Link to="/contact">Contact</Link></li>
        <li>< Link to="/resume">Resume</Link></li>
      </ul>
    </header>
  );
}

export default Header;

