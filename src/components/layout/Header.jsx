import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 24px;
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin-left: 20px;
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #555;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>발라드 음악 추천 사이트</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/auth">Login/Register</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
