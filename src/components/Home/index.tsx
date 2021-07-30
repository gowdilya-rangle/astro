import React from 'react';
import styled from "styled-components";



export default function Home() {
    const StyledP = styled.p`
  font-size: 18px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 650;
  line-height: 1.43;
  letter-spacing: 0.01071e;
  color:white;
  text-align:center;
`

const StyledDiv = styled.div`
height:100vh;
display:block;
`
    return(<StyledDiv>
        <StyledP>Welcome to this test App I built for exploring TypeScript, GraphQL, and Styled Components. </StyledP>
    </StyledDiv>)
}
