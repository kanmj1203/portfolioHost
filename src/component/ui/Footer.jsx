import React from "react";
import styled from "styled-components";
// import "../../css/default.css";
// import "../../fonts/font.css";

  /* 푸터 */

const StyledFooter = styled.footer`
    position: fixed;
    bottom : 0;
    height : 40px;
    width : 100%;
    font-family: 'Noto Sans KR', sans-serif;
`;

const FooterCopyright = styled.div`
    position : absolute;
    left : 5vw;
    font-size: .8rem;
    color : #686868;
`;

const FooterLinks = styled.div`
    position : absolute;
    right : 5vw;

    & > ul > li  {
        width : 20px;
        height : 20px;
        display : inline-block;
        margin-left : 10px;
    }

    & > ul > li > a > img  {
        width : 100%;
        height : 100%;
        object-fit: cover;
        filter: opacity(.5) drop-shadow(0 0 0 gray);
        -webkit-filter: opacity(.5) drop-shadow(0 0 0 gray);
    }

`;



function Footer(props) {
    const publicUrl = process.env.PUBLIC_URL;
 return (
    <StyledFooter>
          <FooterCopyright>
            ©2022 KangMinJi All Rights Reserved.
          </FooterCopyright>
          <FooterLinks>
            <ul>
              <li><a href="mailto:rkdalswl1203@g.shingu.ac.kr.com"><img src={`${publicUrl}/img/footer_icon/email_icon.png`} alt="email" /></a></li>
              <li><a href="https://github.com/kanmj1203"><img src={`${publicUrl}/img/footer_icon/github_icon.png`} alt="github" /></a></li>
            </ul>
          </FooterLinks>
    </StyledFooter>
 );
}

export default Footer;
