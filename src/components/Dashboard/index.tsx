
import "../../../node_modules/react-grid-layout/css/styles.css";
import '../../../node_modules/react-resizable/css/styles.css';
import React, {useState} from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import Launches from './Launches/';


 import styled from "styled-components";

 const StyledDiv = styled.div`
  width:500px;
  height:500px;
  color: #fff;
  background-color: #3f51b5;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071e
`;

const ScrollDiv = styled.div`
  overflow:scroll;
  height:390px;
  background-color: #0c164f;
`;





 


const ReactGridLayout = WidthProvider(RGL);

export default function Dashboard() {


  const layout = [
    { i: "a", x: 0, y: 0, w: 3, h: 11 , maxH:11},
    { i: "b", x: 3, y: 0, w: 3, h: 2},
    { i: "c", x: 6, y: 0, w: 3, h: 5},
  ];

  const [gridLayout, setGridLayout] = useState(layout);

  var gridProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    cols: 12,
    transformScale: 1,
  };




  const onLayoutChange = (layout:any)  =>{
    setGridLayout(layout)
  }


    return (
      // <div style={{transform: 'scale(0.5) translate(-50%, -50%)'}}>
        <ReactGridLayout
          layout={layout}
          onLayoutChange={onLayoutChange}
          {...gridProps}
          resizeHandles={["se", "ne", "nw", "sw"]}
        >
          <StyledDiv key="a">
            
              Launch
            <ScrollDiv>
            <Launches></Launches>
            </ScrollDiv>
          </StyledDiv>
          <StyledDiv key="b">b</StyledDiv>
          <StyledDiv key="c"><span>c</span></StyledDiv>
        </ReactGridLayout>
      // </div>
    );
  
}

