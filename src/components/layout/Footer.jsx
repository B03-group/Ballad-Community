import styled from 'styled-components';

const StFooter = styled.footer`
  padding: 1.2rem 1rem;
  margin-top: 20px;
  background-color: #252525;
  color: white;
  border-top: 1px solid gray;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
  }
`;

const Footer = () => {
  return <StFooter>©️2024 삼시세끼. All Rights Reserved</StFooter>;
};

export default Footer;
