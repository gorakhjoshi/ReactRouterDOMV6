import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const NavStyles = css`
  margin-bottom: 15px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
  }
`;

function Nav() {
  return (
    <nav className={NavStyles}>
      <Link to='/'>Product</Link>
      <Link to='admin'>Admin</Link>
    </nav>
  );
}

export default Nav;
