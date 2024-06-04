import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>©2024 삼시세끼. All Rights Reserved</p>
    </FooterContainer>
  );
};

export default Footer;
