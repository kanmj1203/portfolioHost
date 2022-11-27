import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import {FullPage, Slide} from "react-full-page";
// import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import $ from "jquery";

// import logo from './logo.svg';
import './App.css';
// Pages
import Footer from "./component/ui/Footer";
import Header from "./component/ui/Header";
import Aside from "./component/ui/Aside";
import Home from "./component/section/Home";
import About from "./component/section/About";
import Design from "./component/section/Design";
import Web from "./component/section/Web";
// import $ from "jquery";

const PointerWrap = styled.div`
    width : 100vw;
    height : 100vh;
    background-color: #f5f5f5;
    
    // display : fixed;
    // overflow-x : hidden;
    // overflow-y : hidden;
`;

const Pointer = styled.div`
    position : fixed;
    width:20px; 
    height:20px;
    border-radius:100%; 
    background:rgba(94,141,232, 0.3); 
    transition:all 0.2s ease-out;
    z-index : 1000;
    pointer-events: none;
   
`;

const Main = styled.main`
    background-color: #f5f5f5;
    width : 100vw;
    height : 100vh;
    font-size : 1rem;
    // overflow-x : hidden;
    // overflow-y : hidden;
`;

// const Wrapper = styled.div`
//     width : 100vw;
//     height : 100vh;
//     margin-left: calc(-50vw + 50%);
// `;


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


function App() {
    // 마우스 원
  const [xy,setXY] = useState({x:0,y:0});

  const handleMouseMove=(e)=>{
        setXY({x:e.clientX ,y:e.clientY });
        // console.log(xy);
    }

  const scrollRef = useRef(null);

   // header, aside 클릭, 스크롤 시 스크롤 이동 
   const [scrollY, setScrollY] = useState(0);
   const [pageHeight, setPageHeight] = useState(0);
   const [pageCount, setPageCount] = useState(1);
 
   //클릭
   const handleTop = (e, count) => {  // 클릭하면 스크롤이 위로 올라가는 함수
     e.preventDefault();
     window.scrollTo({
       top: (count-1) * pageHeight,
       behavior: "smooth"
     });
     setScrollY(count-1);  // ScrollY 의 값을 초기화
     setPageCount(count);
   }

   useEffect(() => {
    // console.log(pageCount)
    setPageHeight(window.innerHeight);
      // const watch = setInterval(() => {
      //   window.addEventListener('scroll', setScrollY);
      // },1000)
      const watch = () => {
        window.addEventListener('scroll', setScrollY);
      };
      watch();
      return () => {
        // clearInterval(watch);
        window.removeEventListener('scroll', setScrollY);
      }
   })

   // 스크롤

   const handleScroll = (e) => {
    // e.preventDefault();
    // console.log(e)
      // 스크롤 행동 구현
      const { deltaY } = e;
        if (deltaY > 0) { 
            // 스크롤 내릴 때
             if (pageCount < pages.length) { //scrollTop >= 0 && scrollTop < pageHeight
              // setPageCount(pageCount+1);
              // window.scrollTo({
              //   top: (pageCount-1) * pageHeight,
              //   behavior: "smooth"
              // });
              // setScrollY(pageCount-1);  // ScrollY 의 값을 초기화
              handleTop(e, pageCount+1)
            } else {
          }
        } else {
            // 스크롤 올릴 때
            if (1 < pageCount) { //scrollTop >= 0 && scrollTop < pageHeight
            //     setPageCount(pageCount-1);
            //     window.scrollTo({
            //       top: (pageCount-1) * pageHeight,
            //       behavior: "smooth"
            //     });
            //     setScrollY(pageCount-1);  // ScrollY 의 값을 초기화
                
            //   }
            handleTop(e, pageCount-1)
            }
          }
    }

   useEffect(() => {

    setPageHeight(window.innerHeight); // 화면 세로길이, 100vh와 같습니다.
          
    
    // console.log(pageCount)
    const scrollToElement = scrollRef.current;

     const scrollTimer = setInterval(() => {
      scrollToElement.addEventListener("wheel", handleScroll, { passive: false });
     }, 300);
    //  scrollTimer();

     return () => {
       clearInterval(scrollTimer);
       scrollToElement.removeEventListener("wheel", handleScroll, { passive: false });
     }
   })

  return (
    <PointerWrap onMouseMove={(e) => handleMouseMove(e)}>
      <Pointer style={{left:xy.x-10,top:xy.y-10}}/>
      <Main ref={scrollRef}>
          <Header 
              pages = {pages} 
              pageCount = {pageCount}
              onHandleTop = {handleTop}
          ></Header>
          <Aside 
              pages = {pages} 
              pageCount = {pageCount}
              onHandleTop = {handleTop}
            ></Aside>
          {/* <FullPage controls controlsProps={{className: 'slide-navigation'}}>
              <Slide><Home pages = {pages[0]} ></Home></Slide>
              <Slide><About pages = {pages[1]} ></About></Slide>
              <Slide><Design pages = {pages[2]} ></Design></Slide>
              <Slide><Web pages = {pages[3]} ></Web></Slide>
          </FullPage> */}
          <Home pages = {pages[0]} ></Home>
              <About pages = {pages[1]} ></About>
              <Design pages = {pages[2]} ></Design>
              <Web pages = {pages[3]} ></Web>
          <Footer></Footer>
      </Main>
    </PointerWrap>
  );
}

export default App;
