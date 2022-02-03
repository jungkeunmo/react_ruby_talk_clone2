import React from "react";
import styled from "styled-components";
import BottomNav from "./BottomNav";
import { Routes, Route } from "react-router-dom";
import Friend from "./Friend";
import Message from "./Message";
import Profile from "./Profile";
import Setting from "./Setting";
import Login from "./Login";

const ContentWrapper = styled.section`
    width: 100%;
    height: calc(100vh - 60px);

    overflow: scroll;
`;


export default App;