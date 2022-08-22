import React from "react";
import {useParams} from "react-router-dom";
import { useHistory } from "react-router-dom"
import styled from "styled-components";

function Detail () {
    const id = useParams();
    console.log(id)
    const history = useHistory();
    
    return(
        <StContainer>
        <StWrrap>
            <div> 
                <StHeader>
                    <div>id</div>
                    <button onClick={() => history.goBack("/")}>이전으로</button>
                </StHeader>
                <StTitle>리액트</StTitle>
                <StBody>리액트를배워봅시다</StBody>
            </div>
        </StWrrap>    
        </StContainer>

    )
}

export default Detail;


const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StWrrap = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
    margin: 24px;
`

const StBody = styled.main`
    margin: 24px;
`