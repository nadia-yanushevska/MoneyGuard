import { TiHome } from 'react-icons/ti';
import { FaDollarSign } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';

export const Navigation = () => {
  return (
    <StyledNav className="navigation">
      <ul className="list">
        <li>
          <StyledLinkHome className="linkHome" to="/home">
            <div className="boxIcon">
              <TiHome className="icon" />
            </div>
            <StyledSpan className="styledSpan">Home</StyledSpan>
          </StyledLinkHome>
        </li>
        <li>
          <StyledLinkHome className="linkHome" to="/statistics">
            <div className="boxIcon">
              <BiStats className="icon iconRevers" />
            </div>

            <StyledSpan className="styledSpan">Statistics</StyledSpan>
          </StyledLinkHome>
        </li>
        <li>
          <StyledLinkHome className="linkHome" to="/currency">
            <div className="boxIconDollar">
              <FaDollarSign className="icon dollar" />
            </div>
          </StyledLinkHome>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;