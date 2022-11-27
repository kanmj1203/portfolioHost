import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const Section = styled.section`
    text-align: center;
    justify-content: center;
    width : 100%;
    height : 100%;
    display : flex;
    align-items: center;
    flex-direction: row;
    justify-content : space-around;
`;

const LeftArticle = styled.article`
    width : 30%;
    height : auto;

    margin-right : -5%;

    display : flex;
    flex-direction: column;
    color : white;
    word-wrap: break-word;
    @media screen and (max-width: 768px) {
        width : 40%;
    }
`;

const Introduce = styled.div`
    width : 100%;
    background-color : ${props => props.nameBlock ? "#7A9DE2" : "#414141"};
    box-shadow : 0px 4px 4px rgba(0,0,0,.25);
    border-radius : 15px;
    text-align : left;
    & {
        :not(:last-child) {
            margin-bottom : 30px;
        }
    }
`;

const IntroduceTitle = styled.p`
    font-size : 1.5rem;
    margin : 20px 30px;
    text-decoration: underline;
    text-underline-position:under;
    @media screen and (max-width: 1024px) {
        font-size : 1.375rem;
        margin : 8% 0px 3% 8%;
    }

    @media screen and (max-width: 500px) {
        font-size : 1.25rem;
    }
`;

const IntroduceContent = styled.p`
    font-size : 1rem;
    margin-left : 10%;
    line-height : ${props => props.contect ? 3 : 2};
    
    
    & {
        :is(:last-child) {
            margin-bottom : 20px;
        }
    }

    & > img {
        border-radiue : 100%;
        width : 24px;
        height : 24px;
        object-fit: cover;
        vertical-align: middle;
    }


    @media screen and (max-width: 1024px) {
        font-size : 0.875rem;
        margin-left : 15%;

        & > img {
            width : 20px;
            height : 20px;
        }
    }

    @media screen and (max-width: 500px) {
        font-size : 0.75rem;
        margin-left : 8%;
    }
`;

const RightArticle = styled.article`
    width : 40%;
    height : auto;
    background-color : #fff;
    box-shadow : 0px 4px 4px rgba(0,0,0,.25);
    border-radius : 15px;

    margin-left : -5%;

    display : flex;
    flex-direction: column;
    text-align : left;
    word-wrap: break-word;

    // align-items : flex-start;
    @media screen and (max-width: 768px) {
        width : 40%;
    }
`;

const SkillTitle = styled.p`
    font-size : 1.5rem;
    margin : 30px;
    margin-bottom : 15px;
    color : #000;
    @media screen and (max-width: 1024px) {
        font-size : 1.375rem;
        margin : 8% 0px 3% 8%;
    }
    @media screen and (max-width: 500px) {
        font-size : 1.25rem;
    }
`;

const SkillImgContainer = styled.div`
    width : 100%;
    height: auto;
    text-align : center;
    margin-bottom : 4%;
    // display : flex;
    // flex-direction : row;
    // align-items : center;
    // justify-contents : center;
    
`;

const SkillImg = styled.div`
    display : inline-block;
    width : 100px;
    height : 100px;
    border-radius : 100%;
    vertical-align: middle;
    justify-contents : space-around;
    margin : 4% 4% 1% 4%;

    @media screen and (max-width: 1024px) {
        width : 80px;
        height : 80px;
        margin : 3% 3%;
    }

    & > img {
        width : 100%;
        height : 100%;
        object-fit: cover;
        vertical-align: middle;
    }
`;



// {`${publicUrl}/img/footer_icon/email_icon.png`}

function Home(props) {
    const publicUrl = process.env.PUBLIC_URL;
   
    return (
        <Section id={props.pages.title}>
            <LeftArticle>
                <Introduce nameBlock>
                    <IntroduceTitle>NAME</IntroduceTitle>
                    <IntroduceContent>강민지 / Kang Min Ji</IntroduceContent>
                    <IntroduceTitle>EDUCATION</IntroduceTitle>
                    <IntroduceContent>2020.03 ~ 신구대학교 재학 중</IntroduceContent>
                </Introduce>
                <Introduce contectBlock>
                    <IntroduceTitle>CONTECT</IntroduceTitle>
                    <IntroduceContent contect>&#128241; 010-4258-3558</IntroduceContent>
                    <IntroduceContent contect>&#128231; rkdalswl1203@g.shingu.ac.kr</IntroduceContent>
                    <IntroduceContent contect><img src={`${publicUrl}/img/skill/github_icon.png`} alt="github_icon" /> GitHub</IntroduceContent>
                </Introduce>
            </LeftArticle>

            <RightArticle>
                <SkillTitle>SKILLS</SkillTitle>
                <SkillImgContainer>
                    <SkillImg><img src={`${publicUrl}/img/skill/html5_icon.png`} alt="html5" /></SkillImg> 
                    <SkillImg><img src={`${publicUrl}/img/skill/css_icon.png`} alt="css" /></SkillImg>
                    <SkillImg><img src={`${publicUrl}/img/skill/figma_icon.png`} alt="figma" /></SkillImg>
                    <br/>
                    <SkillImg><img src={`${publicUrl}/img/skill/xd_icon.png`} alt="xd" /></SkillImg>
                    <SkillImg><img src={`${publicUrl}/img/skill/js_icon.png`} alt="js" /></SkillImg>
                    <SkillImg><img src={`${publicUrl}/img/skill/php_icon.png`} alt="php" /></SkillImg>
                    {/* <br/>
                    <SkillImg><img src={`${publicUrl}/img/skill/python_icon.png`} alt="python" /></SkillImg>
                    <SkillImg><img src={`${publicUrl}/img/skill/mysql_icon.png`} alt="mysql" /></SkillImg>
                    <SkillImg><img src="" alt="" /></SkillImg> */}
                </SkillImgContainer>
            </RightArticle>
        </Section>
    );
}

export default Home;
// <!-- 스크롤 아이콘  제작자: fulmal - Flaticon -->