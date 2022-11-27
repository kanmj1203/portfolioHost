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

    @media screen and (max-width: 768px) {
        flex-direction: row;
    }
`;

const DesignArticle = styled.article`
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
        margin-bottom : 3%;
    }
`;

const DesignTitle = styled.div`
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

const DesignText = styled.div`
    min-height : 100px;
    font-size : 1rem;
    color : #414141;
    line-height : 2;

    @media screen and (max-width: 1024px) {
        font-size : 0.875rem;
        min-height : 50px;
    }

    @media screen and (max-width: 500px) {
        font-size : 0.75rem;
        
    }

`;

const DesignTag = styled.div`

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

const DesignImgWrap = styled.div`
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

const DesignButtonWrap = styled.div`
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


const designs = [
    {
        id : 1,
        title : "SEOUL LAND",
        text : "2021년에 진행한 서울랜드 홈페이지 리뉴얼 디자인 입니다."+
        " 메인 페이지, 놀이기구 상세보기 페이지를 제작하였습니다."+
        " 모바일, 타블렛, 데스크탑 3개의 반응형 분기점마다 디자인하였고 XD로 제작하였습니다.",
        tags : [
            {
                id : 11,
                tag : '#XD',
            },
            {
                id : 12,
                tag : '#반응형 웹',
            },
            {
                id : 13,
                tag : '#웹사이트 리뉴얼',
            },
        ],
        buttons : [
            {  
                id : 101,
                name : '기존 페이지',
                link : '/projects/design/seoul_lend.pdf',
            },
            {  
                id : 102,
                name : 'XD PROTOTYPE',
                link : 'https://xd.adobe.com/view/ec13c03d-88fb-4722-b5c3-9365d9f3910d-b940/',
            },
        ],
        img : '/img/design/seoul_renewal.png',
        color : {backgroundColor :' rgba(255,0,51,.1)',},
    },
    {
        id : 2,
        title : "TWINKLE",
        text : "2021년에 진행한 악세서리 앱 디자인 입니다."+
        " 메인 화면, 카테고리 목록, 마이페이지, 상품 상세보기 등 을 제작하였습니다."+
        " 모바일 사이즈로 제작하였고 Figma로 제작하였습니다.",
        tags : [
            {
                id : 21,
                tag : '#FIGMA',
            },
            {
                id : 22,
                tag : '#모바일 앱',
            },
            {
                id : 23,
                tag : '#쇼핑몰',
            },
        ],
        buttons : [
            {  
                id : 201,
                name : 'FIGMA UI KIT',
                link : 'https://www.figma.com/file/WsjvFvxznZUsb3pLoOsw2U/Twinkle_UI_KIT?t=GWhTG28aM3u9X6xi-0',
            },
            {  
                id : 202,
                name : 'FIGMA PROTOTYPE',
                link : 'https://www.figma.com/file/TK3M7UZvZgfQjZkepJ0RuX/Twinkle?node-id=0%3A1&t=GWhTG28aM3u9X6xi-0',
            },
        ],
        img : '/img/design/twinkle.png',
        color : {backgroundColor :' rgba(78,74,201,.1)',},
    },
]; 



function Design(props) {
    const publicUrl = process.env.PUBLIC_URL;

    const OpenFile =(e, link) => {
        e.preventDefault();
        
        link = link.endsWith('pdf') ? publicUrl+link : link;
        
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
            {designs.map((design) => {
                return <DesignArticle key={design.id}> 
                {/* key={design.id} */}
                <LeftBox>
                    <DesignTitle>{design.title}</DesignTitle>
                    <DesignText><p>{design.text}</p></DesignText>
                    <DesignTag>
                        {design.tags.map((tag) => {
                             return <span key={tag.id}>{tag.tag}</span> 
                        })}
                    </DesignTag>
                </LeftBox>
                <RightBox>
                    <DesignImgWrap style={design.color}>
                        <img src={`${publicUrl}${design.img}`}></img>
                    </DesignImgWrap>
                    <DesignButtonWrap>
                        {design.buttons.map((button) => {
                             return <button type="button" onClick={(e) => {OpenFile(e, button.link)}}  key={button.id}>
                                        {button.name}
                                    </button>
                        })}
                    </DesignButtonWrap>
                </RightBox>
            </DesignArticle>
            })}
        </Slider>
        </Section>
    );
}

export default Design;