import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 기본 스타일 */
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f6f5f7;
  }

  /* 헤더 스타일 */
  header {
    background-color: #fff;
    color: #333;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  header h1 {
    margin: 0;
    font-size: 24px;
  }

  header nav {
    display: flex;
    align-items: center;
  }

  header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  header li {
    margin-left: 20px;
  }

  header a {
    color: #333;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #555;
    }
  }

  /* 푸터 스타일 */
  footer {
    background-color: #fff;
    color: #333;
    text-align: center;
    padding: 10px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  /* 로그인/회원가입 컨테이너 스타일 */
  .login-container, .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  /* 로그인/회원가입 폼 스타일 */
  .login-container form, .register-container form {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .login-container form div, .register-container form div {
    margin-bottom: 15px;
  }

  .login-container form label, .register-container form label {
    display: block;
    margin-bottom: 5px;
  }

  .login-container form input, .register-container form input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  .login-container form button, .register-container form button {
    width: 100%;
    padding: 10px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* 로그아웃 버튼 스타일 */
  header nav ul li button {
    background: none;
    border: none;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    padding: 0;

    &:hover {
      color: #555;
    }
  }
`;

export default GlobalStyle;
