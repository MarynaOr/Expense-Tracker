import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const styleActive = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#007017' : 'black',
  });

  return (
    <nav>
      <NavLink to="/" style={styleActive}>
        <h1>Home</h1>
      </NavLink>
      {/* <NavLink to="/about" style={styleActive}>
        <h1>about</h1>
      </NavLink> */}
    </nav>
  );
};

export default HomePage;
