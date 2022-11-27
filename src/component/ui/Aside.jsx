import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
// import "../../css/default.css";
// import "../../fonts/font.css";

const PageBtnsContainer = styled.aside`
    position: fixed;
    height : 100%;
    width : 4.5vw;
    right: 0;
`;

const PageBtnsWrap = styled.ul`
    position : absolute;
    top : 50%;
    transform: translateY(-50%);

    & > li {
        width : 100%;
        margin : 20px 0px;
    }
`;

const PageBtn = styled.li`
    cursor : pointer;
`;

const PageDot = styled.div`
        width : 8px;
        height : 8px;
        background-color : #d9d9d9;
        border-radius: 100%;
        margin : 0 auto;
        transition:all 0.3s ease-out;

`;


function Aside(props) {
    const {pages} = props;
    return(
        <PageBtnsContainer>
          <PageBtnsWrap>
          {pages.map((page) => {
            return <PageBtn key = {page.id}
            onClick={(e) => {props.onHandleTop(e, page.id)}}
            className={props.pageCount == page.id  ? 'aside_active' : undefined}>
                <PageDot></PageDot>
            </PageBtn>
          })}
          </PageBtnsWrap>
        </PageBtnsContainer>
    );
}

export default Aside;

{/* <li><div id="page_btn_active"></div></li> */}