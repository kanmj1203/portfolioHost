import React, {useState, useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";

import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import '../../slickStyle.css';
import '../../slick-theme.css';
// import "../../css/default.css";
// import "../../fonts/font.css";

const Section = styled.section`
    width : 100%;
    height : 100%;
    transition:all 0.5s ease-out;

    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content : space-space;

    text-align : center;
`;

const WebArticle = styled.article`
    width : 100%;
    height : 100%;

    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content : space-between;
    text-align : center;
    vertical-align: top;

    // color : white;
    word-wrap: break-word;

`;

// 왼쪽 소개상자
const LeftBox = styled.div`
    width : 40%;
    // height : 30vh;

    // margin : 5% auto;
    margin-right : 2%;

    display : inline-block;
    text-align : left;

    word-wrap: break-word;
    vertical-align: middle;
    
    background-color : white;

    border-radius : 15px;
    box-shadow : 0px 4px 4px rgba(0,0,0,.25);
    
    & > div {
        margin : 30px 30px;

        @media screen and (max-width: 1024px) {
            margin : 10% 8%;
        }
    
        @media screen and (max-width: 768px) {
            margin : 5% 3%;
        }
    }
    
    @media screen and (max-width: 768px) {
        height : 30%;
        width : 100%;
        // margin-bottom : 10%;
    }
`;

const WebTitle = styled.div`
    font-size : 1.5rem;
    font-weight : bold;
    color : #414141;
    @media screen and (max-width: 1024px) {
        font-size : 1.375rem;
    }

    @media screen and (max-width: 500px) {
        font-size : 1.25rem;
    }
`;

const WebText = styled.div`
    min-height : 100px;
    font-size : 1rem;
    color : #414141;
    line-height : 2;

    @media screen and (max-width: 1024px) {
        min-height : 50px;
        font-size : 0.875rem;
        line-height : 1.8;
    }

    @media screen and (max-width: 500px) {
        font-size : 0.75rem;
    }

`;

const WebIntroduce = styled.div`
    font-size : 1.25rem;
    color : #414141;
    line-height : 1.2;

    @media screen and (max-width: 1024px) {
        font-size : 1rem;
        line-height : 1;
    }

    @media screen and (max-width: 500px) {
        font-size : 0.875rem;
    }

`;

const WebIntHead = styled.span`
    margin-right : 10px;
    color : #7a9de2;
    &::after {
        position : relative;
        content : "-";
        right : -5px;
    }
`;

const WebTag = styled.div`

    font-size : 1rem;
    line-height : 2;

    & > span { 
        padding : 2px 8px;
        margin-right : 8px;
        border-radius : 100px;
        background-color : rgba(0,0,0,.1);
        transition:all 0.3s ease-out;

        &:hover {
            background-color : rgba(0,0,0,.2);
            transition:all 0.3s ease-out;
        }
    }
    @media screen and (max-width: 1024px) {
        font-size : 0.875rem;
    }

    @media screen and (max-width: 500px) {
        font-size : 0.75rem;
    }

`;


// 오른쪽 이미지, 파일 설명
const RightBox = styled.div`
    width : 45%;
    height : 70vh;
    // margin : 5% auto;
    // margin-right : -5%;

    display : inline-block;
   
    text-align : left;

    // border-radius : 15px;

    word-wrap: break-word;
    background-color : transparent;
    vertical-align: middle;


    @media screen and (max-width: 768px) {
        height : 30%;
        width : 80%;
    }
`;

const WebImgWrap = styled.div`
   width : 100%;
   height : 90%;
   background-color : rgba(0,0,0,.2);
   border-radius : 100%;
//    box-shadow : 0px 3px 5px rgba(0,0,0,.2);
   display : flex;
    vertical-align: middle;
   & > img {
    margin : auto;
    width : 100%;
    height : auto;
    object-fit: cover;
    vertical-align: middle;
    }
    @media screen and (max-width: 768px) {
        margin-bottom : 10px;
    }
`;

const WebButtonWrap = styled.div`
   width : 100%;
   height : 10%;
//    background-color : pink;

   display : flex;
   align-items: center;
//    justify-content: space-around;
// word-wrap: keep-all;
   & > button {
    border : none;
    border-radius : 100px;
    padding : 5px 15px;
    margin : auto 5px;
    background-color : #7A9DE2;
    font-size : 1.25rem;
    color : #414141;
    transition:all 0.3s ease-out;
    
        &:hover {
            transition:all 0.3s ease-out;
            background-color : #adceff;
            // color : white;
            box-shadow : 0px 2px 3px rgba(0,0,0,.25);
        }
        
    @media screen and (max-width: 1024px) {
        font-size : 1rem;
    }
    @media screen and (max-width: 768px) {
        padding : 3px 12px;
        margin-bottom : 10px;
    }
   }

   
`;


const webs = [
    {
        id : 3,
        title : "CHRISTMAS",
        text : "2020년에 진행한 크리스마스 소개 페이지 입니다."+
        " iframe태그를 사용하여 이미지와 페이지들을 띄웠고, javascript에서 엘리먼트 가져오기, html속성 다루기 등을 이해하기 위해 제작하였습니다.",
        introduce : [
            {
                id : 3000,
                head : '프로젝트 구성',
                text : '적응형 웹 + main',
            },
            {
                id : 3001,
                head : '참여도',
                text : '개인 프로젝트',
            },
            {
                id : 3002,
                head : '툴',
                text : 'HTML, CSS, JavaScript',
            },
        ],
        tags : [
            {
                id : 31,
                tag : '#iframe',
            },
            {
                id : 32,
                tag : '#JavaScript',
            },
        ],
        buttons : [
            {  
                id : 301,
                name : 'WEB SITE',
                link : '/projects/web/christmas/index.html',
            },
            {  
                id : 302,
                name : 'CODE',
                link : 'https://github.com/kanmj1203/christmasIframe',
            },
        ],
        img : '/img/web/christmas.png',
        color : {backgroundColor :' rgba(104,1,1,.1)',},
    }, 
    {
        id : 4,
        title : "POS",
        text : "2021년에 진행한 카페 POS 웹 사이트 입니다."+
        " 로그인, 상품 선택, 계산, 판매 내역, 메뉴 추가 등 POS기기에 필요한 기능들을 PHP로 구현하였습니다.",
        introduce : [
            {
                id : 4000,
                head : '프로젝트 구성',
                text : '적응형 웹 + main + sub(8) : 로그인, 회원가입, 아이디/비밀번호 찾기, 주문하기, 계산하기, 회원정보 수정, 제품관리, 주문 내역)',
            },
            {
                id : 4001,
                head : '참여도',
                text : '개인 프로젝트',
            },
            {
                id : 4002,
                head : '툴',
                text : 'HTML, CSS, PHP, MySQL',
            },
        ],
        tags : [
            {
                id : 41,
                tag : '#PHP',
            },
            {
                id : 42,
                tag : '#Point Of Sales',
            },
        ],
        buttons : [
            {  
                id : 401,
                name : 'CODE',
                link : 'https://github.com/kanmj1203/POSWeb',
            },
        ],
        img : '/img/web/pos_order.png',
        color : {backgroundColor :' rgba(250,214,166,.1)',},
    }, 
    {
        id : 5,
        title : "RAIN GAME",
        text : "2021년에 진행한 비 피하기 게임입니다."+
        " SUBERUNKER 게임을 모티브로 제작하였고 방향키로 내려오는 비를 피하는 게임입니다."+
        " canvas태그, JavaScript를 통해 구현하였습니다.",
        introduce : [
            {
                id : 5000,
                head : '프로젝트 구성',
                text : '적응형 웹 + main',
            },
            {
                id : 5001,
                head : '참여도',
                text : '개인 프로젝트',
            },
            {
                id : 5002,
                head : '툴',
                text : 'HTML, CSS, JavaScript',
            },
        ],
        tags : [
            {
                id : 51,
                tag : '#canvas',
            },
            {
                id : 52,
                tag : '#JavaScript',
            },
            {
                id : 53,
                tag : '#Keyboard Events',
            },
        ],
        buttons : [
            {  
                id : 501,
                name : 'WEB SITE',
                link : '/projects/web/rain_avoid/index.html',
            },
            {  
                id : 502,
                name : 'CODE',
                link : 'https://github.com/kanmj1203/rainavoid',
            },
        ],
        img : '/img/web/rain_avoid.png',
        color : {backgroundColor :' rgba(135,206,250,.1)',},
    }, 
    {
        id : 6,
        title : "CAMPUS MARKET",
        text : "2022년에 진행한 중고거래 웹 사이트입니다."+
        " 판매글 작성/삭제/수정/검색, 1:1 채팅, 로그인, PHP Mailer를 사용한 회원가입 시 이메일 인증, 관리자 페이지 등의 기능을 구현하였고 PHP와 JavaScript로 제작하였습니다.",
        introduce : [
            {
                id : 6000,
                head : '프로젝트 구성',
                text : '반응형 웹 + main + sub(11) : 로그인, 회원가입, 아이디/비밀번호 찾기, 판매글 작성, 판매글 상세보기, 1:1 채팅, 검색, 전공/교양 교재, 실습 도구, 마이페이지, 관리자 페이지',
            },
            {
                id : 6001,
                head : '참여도',
                text : '100% (팀 프로젝트, front-end)',
            },
            {
                id : 6002,
                head : '툴',
                text : 'HTML, CSS, PHP, JavaScript, XD, Zeplin, MySQL',
            },
        ],
        tags : [
            {
                id : 61,
                tag : '#PHP',
            },
            {
                id : 62,
                tag : '#JavaScript',
            },
            {
                id : 63,
                tag : '#PHP Mailer',
            },
        ],
        buttons : [
            {  
                id : 601,
                name : 'WEB SITE',
                link : 'http://tlwldnjs67.cafe24.com/',
            },
            {  
                id : 602,
                name : 'CODE',
                link : 'https://github.com/kanmj1203/campus-market',
            },
        ],
        img : '/img/web/campus_market.png',
        color : {backgroundColor :' rgba(0,126,255,.1)',},
    }, 
]; 



function Web(props) {
    const publicUrl = process.env.PUBLIC_URL;

    const OpenFile =(e, link) => {
        e.preventDefault();
        
        link = link.startsWith('http:') ? link : publicUrl+link;
        
        // window.location.href=link;
        window.open(link, '_blank', 'noreferrer');
    }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Section id={props.pages.title}>
       {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
            {webs.map((web) => {
                return <WebArticle key={web.id}> 
                {/* key={Web.id} */}
                <LeftBox>
                    <WebTitle>{web.title}</WebTitle>
                    <WebText><p>{web.text}</p></WebText>
                    {web.introduce.map((intro) => {
                    return <WebIntroduce key={intro.id}>
                        <WebIntHead>{intro.head}</WebIntHead>
                        <span>{intro.text}</span>
                    </WebIntroduce>
                    })}
                    <WebTag>
                        {web.tags.map((tag) => {
                             return <span key={tag.id}>{tag.tag}</span> 
                        })}
                    </WebTag>
                </LeftBox>
                <RightBox>
                    <WebImgWrap style={web.color}>
                        <img src={`${publicUrl}${web.img}`}></img>
                    </WebImgWrap>
                    <WebButtonWrap>
                        {web.buttons.map((button) => {
                             return <button type="button" onClick={(e) => {OpenFile(e, button.link)}}  key={button.id}>
                                        {button.name}
                                    </button>
                        })}
                    </WebButtonWrap>
                </RightBox>
            </WebArticle>
            })}
        </Slider>
        </Section>
    );
}

export default Web;