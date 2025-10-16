import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const styleActive = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? '#007017' : 'black',
  });

  return (
    <nav>
      <NavLink to="/" style={styleActive}>
        <p>Home</p>
      </NavLink>
      <NavLink to="/statistic" style={styleActive}>
        <p>Statistic</p>
      </NavLink>

      <NavLink to="/register" style={styleActive}>
        {/* <p>register </p> */}
      </NavLink>
      {/* <NavLink to="/register" style={styleActive}>
        <p> </p>
      </NavLink> */}
      {/* <NavLink to="/about" style={styleActive}>
        <h1>about</h1>
      </NavLink> */}
    </nav>
  );
};

export default HomePage;
