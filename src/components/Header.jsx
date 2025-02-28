import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background: #333;
  color: white;
  nav a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
`;

