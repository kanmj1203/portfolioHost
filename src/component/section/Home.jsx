import React, {useState, useEffect} from "react";
import styled, {keyframes} from "styled-components";
// import "../../css/default.css";
// import "../../fonts/font.css";

const Section = styled.section`
    text-align: center;
    justify-content: center;
    width : 100%;
    height : 100%;
    display : flex;
    align-items: center;
    flex-direction: column;
    transition:all 0.5s ease-out;
`;

const HomeTextBox = styled.article`
    /* font-family: 'Noto Serif KR', serif; */
    /* font-family: 'Josefin Slab', serif; */
    font-family: 'Bungee', cursive;
    line-height: 1.5;
    font-size : 4rem;
    /* text-align: center; */

    /* 드래그 방지 */
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    u
    ser-select: none;
`;

const HomeText = styled.span`
    color : #5E8DE8;
    text-shadow: 3px 3px 1px #c2c2c2;
    white-space: pre-line;
`;

const text_blink = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
`;

const Blink = styled.span`
    color : #353535;
    animation: ${text_blink} 0.6s infinite;
    font-family: 'Noto Serif KR', sans-serif;
    font-size : 3.3rem; 
    vertical-align: top;
`;


  /* 스크롤 안내 */
const ScrollArrow = styled.article`
    position : absolute;
    bottom : 5%;
`;

const ScrollArrowImg = styled.div`
    display : inline-block;
    width : 48px;
    height : 48px;
    vertical-align: middle;
    justify-contents : space-around;

    & > img {
        width : 100%;
        height : 100%;
        object-fit: cover;
        vertical-align: middle;
    }
`;

function Home(props) {
    const content = "Hello! \n Welcome to my portfolio";
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    const publicUrl = process.env.PUBLIC_URL;

    useEffect(() => {
        const interval = setInterval(() => {
            setText(text + content[count]); // 이전 set한 문자 + 다음 문자
            setCount(count + 1); // 개수 만큼 체크 
        }, 120);
        if(count === content.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    });
    
    // toUpperCase()
    return (
        <Section id={props.pages.title}> 
        <HomeTextBox>
          <HomeText>{text}</HomeText>
          <Blink>|</Blink>
        </HomeTextBox>
        <ScrollArrow>
          <ScrollArrowImg><img src={`${publicUrl}/img/icon_scroll_down.png`} title="스크롤 아이콘"></img></ScrollArrowImg>
        </ScrollArrow>
        </Section>
    );
}

export default Home;
// <!-- 스크롤 아이콘  제작자: fulmal - Flaticon -->