import { TiHome } from 'react-icons/ti';
import { FaDollarSign } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';

export const Navigation = () => {
  return (
    <Nav className="navigation">
      <ul className="list">
        <li>
          <LinkHome className="linkHome" to="/home">
            <div className="boxIcon">
              <TiHome className="icon" />
            </div>
            <Span className="styledSpan">Home</Span>
          </LinkHome>
        </li>
        <li>
          <LinkHome className="linkHome" to="/statistics">
            <div className="boxIcon">
              <BiStats className="icon iconRevers" />
            </div>
            <Span className="styledSpan">Statistics</Span>
          </LinkHome>
        </li>
        <li>
          <LinkHome className="linkHome" to="/currency">
            <div className="boxIconDollar">
              <FaDollarSign className="icon dollar" />
            </div>
          </LinkHome>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;