import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <ul>
    <li>
        <Link to="/" className="link">Home</Link>
      </li>
      <li>
        <Link to="/int-A" className="link">Interactive Product A</Link>
      </li>
      <li>
        <Link to="/int-B" className="link">Interactive Product B</Link>
      </li>
      <li>
        <Link to="/int-C" className="link">Interactive Product C</Link>
      </li>
      <li>
        <Link to="/stat-A" className="link">Static Product A</Link>
        </li>
        <li>
        <Link to="/stat-B" className="link">Static Product B</Link>
      </li>
      <li>
        <Link to="/stat-C" className="link">Static Product C</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;