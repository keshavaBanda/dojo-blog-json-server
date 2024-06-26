import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className='link-title' to="/">
      <h2>Welcome Dojo Blog</h2>
      </Link>
      <div className='align'>
        <Link className="link" to="/">
          <span>Home</span>
        </Link>
        <Link className="link" to="/create">
          <span>New Blog</span>
        </Link>
        <Link className="link" to="/about">
          <span>About</span>
        </Link>
        {/* <a className="link" href="/create">
          <span>Home</span>
        </a> */}

      </div>

    </nav>
  );
}

export default Navbar;