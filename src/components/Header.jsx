import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <div>
        <h1>Dashboard</h1>
    </div>
    <div className="nav">
        <Link to="/">Broker</Link>
        <Link to="/class">Class</Link>
    </div>
    </header>
  );
};

export default Header;