import { NavLink } from 'react-router-dom';
import { css } from '@emotion/css';

const NavStyles = css`
  margin-bottom: 15px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;

    &.active {
      color: #50fa7b;
      border: 2px solid #50fa7b;
    }
  }
`;

function Nav() {
  return (
    <nav className={NavStyles}>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Product
      </NavLink>
      <NavLink
        to='admin'
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Admin
      </NavLink>
    </nav>
  );
}

export default Nav;
