import styled from "styled-components";

const Footer = () => {
  return <StyledFooter>© {new Date().getFullYear()} Rental Car</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  text-align: center;
  padding: 16px;
  background: #333;
  color: white;
`;
