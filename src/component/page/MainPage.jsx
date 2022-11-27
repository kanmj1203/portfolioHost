import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import {FullPage, Slide} from "react-full-page";

import Footer from "../ui/Footer";
import Header from "../ui/Header";
// import Aside from "../ui/Aside";
import Home from "../section/Home";
import About from "../section/About";
import Design from "../section/Design";
import Web from "../section/Web";
// import $ from "jquery";


const Main = styled.main`
    background-color: #f5f5f5;
    width : 100vw;
    height : 100vh;
    font-size : 1rem;
    // overflow-x : hidden;
    // overflow-y : hidden;
`;

const Wrapper = styled.div`
    width : 100vw;
    height : 100vh;
    margin-left: calc(-50vw + 50%);
`;


const pages = [
    {
        id : 1,
        title : "home",
    },
    {
        id : 2,
        title : "about",
    },
    {
        id : 3,
        title : "design",
    },
    {
        id : 4,
        title : "web",
    },
];

  
function MainPage(props) {
    
    const scrollRef = useRef(null);

    const [scrollIndex, setScrollIndex] = useState(1);

    const scrollPageChange = (scrollIndex) => {
      setScrollIndex(scrollIndex);
    }

    return (
      <Main>
          <Header 
              pages = {pages} 
              scrollIndex = {scrollIndex}
              onScrollChange = {scrollPageChange}
           ></Header>
          <FullPage controls controlsProps={{className: 'class-name'}}>
                  <Slide><Home pages = {pages[0]} ></Home></Slide>
                  <Slide><About pages = {pages[1]} ></About></Slide>
                  <Slide><Design pages = {pages[2]} ></Design></Slide>
                  <Slide><Web pages = {pages[3]}></Web></Slide>
          </FullPage>
          <Footer></Footer>
      </Main>
    );
}

export default MainPage;