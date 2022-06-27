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
            <Logo>알고리</Logo>
            <LoginDesc>로그인하시고 알고리 서비스를 사용해보세요!</LoginDesc>
        </div>
    );
};

export default MainLogo;