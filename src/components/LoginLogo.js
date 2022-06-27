import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  margin: 30vh auto 1em;
  font-size: 50px;
  font-weight: 700;
  color: #6667AB;
  text-align: center;
`;
const LoginDesc = styled.div`
  color: #6667AB;
  font-size: 20px;
  margin-bottom: 2em;
  text-align: center;
`;

const MainLogo = () => {
    return (
        <div>
            <Logo>회원가입</Logo>
            <LoginDesc></LoginDesc>
        </div>
    );
};

export default MainLogo;