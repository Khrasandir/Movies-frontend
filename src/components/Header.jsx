import { NavLink } from 'react-router-dom';

//will be header in every route

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/new">New Movie</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
