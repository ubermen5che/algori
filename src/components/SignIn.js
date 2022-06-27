import React, { useState } from "react";
import styled from "styled-components";
import MainLogo from "./MainLogo";

const MainForm = styled.form`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  input {
    height: 40px;
    padding: 10px;
    margin-bottom: 15px;
    background-color: white;
    color: black;
    border: solid 1px #6f737a;
    border-radius: 5px;
  }
  button {
    height: 30px;
    color: white;
    border: solid 1px #6f737a;
    border-radius: 5px;
    margin-bottom: 7px;
    background-color: #6667AB;
  }
`;

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch("/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({ email, password }),
            })
                .then((res) => res.json())
                .then((json) => {
                    localStorage.setItem("userId", json.userId);
                    window.location.href = "/";
                });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <MainLogo />
            <MainForm onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Enter Email Address" required value={email} onChange={onChange} />
                <input type="password" name="password" placeholder="Enter Your password" required value={password} onChange={onChange} />
                <button type="submit">Sign in</button>
                <div>
                </div>
            </MainForm>
        </div >
    );
};

export default SignIn;