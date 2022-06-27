import React, { useState } from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';

function HeaderMain() {

    const [search, setSearch] = useState("")

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onClick = (e) => {
        e.preventDefault();
        console.log(search)
        window.location.href = "/search?q=" + search;
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            window.location.href = "/search?q=" + search;
        }
    }

    const check = () => {
        var name = "Login";
        var option = "width = 550, height = 550, top = 100, left = 400, location = no"
        if (localStorage.getItem("userId") === null) {
            window.open("/login", name, option)
        }
        else {
            window.location.href = "/write";
        }
    }

    return (
        <>
            <Container>
                <nav className="navbar justify-content-center navbar-expand-lg navbar-light bg-white" style={{ backgroundColor: '#6667AB' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><b>ALGORI</b></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {localStorage.getItem("userId") !== null
                                    ? null
                                    : <li className="nav-item">
                                        <a className="nav-link" onClick={() => window.location.href = "/signin"}>로그인</a>
                                    </li>
                                }
                                {localStorage.getItem("userId") === null
                                    ? <li className="nav-item">
                                        <a className="nav-link" onClick={() => window.location.href = "/signup"}>회원가입</a>
                                    </li>
                                    : null
                                }
                                {localStorage.getItem("userId") !== null
                                    ? <li className="nav-item">
                                        <a className="nav-link" onClick={check}>문제 등록</a>
                                    </li>
                                    : null
                                }
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">난이도별</a>
                                </li> */}
                            </ul>
                            <form class="d-flex">
                                <input onChange={onChange} onKeyPress={onKeyPress} value={search} class="form-control me-2" style={{ width: "230px" }} type="search" placeholder="키워드 검색" aria-label="Search" />
                                <button onClick={onClick} class="btn btn-outline-secondary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </Container>
            <LoginCheck />
        </>

    );
}

function LoginCheck() {

    const onLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    if (localStorage.getItem("userId")) {
        return (
            <Welcome><b></b>환영합니다!<Logout onClick={onLogout}>logout</Logout></Welcome>
        )
    }
    return (<></>)
}

const Container = styled.div`
    border-bottom: 1px rgb(219 221 224) solid;
`

const Welcome = styled.span`
    position: absolute;
    right: 0.5%;
    padding: 0.5%;
`

const Logout = styled.button`
    border: none;
    background: none;
    margin-left: 5px;
    color: grey;
    text-decoration: underline;
`

export default HeaderMain;
