
import "../../../node_modules/react-grid-layout/css/styles.css";
import '../../../node_modules/react-resizable/css/styles.css';
import React, {useState} from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import Launches from './Launches/';
import YoutubeEmbed from  './Video/index';


 import styled from "styled-components";
import { useEffect } from "react";

 const GridElementDiv= styled.div`
  
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





 
interface ILaunchObject {
  id: string;
  mission_name: string;
  mission_id: string[];
}

const ReactGridLayout = WidthProvider(RGL);

export default function Dashboard() {

  const [launch, setLaunch] = useState<ILaunchObject|null>(null);


 

  const handleSetLaunch = (launchObject:ILaunchObject) =>{
    setLaunch(launchObject);
  }
  


  const layoutLG = [
    { i: "a", x: 0, y: 0, w: 5, h: 11 , maxH:11, minW:5, resizeHandles:[]},
    { i: "b", x: 3, y: 0, w: 8, h: 13},
    { i: "c", x: 6, y: 0, w: 3, h: 5},
  ];

  //const [gridLayout, setGridLayout] = useState(layout);


  var gridProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    cols: 12,
    transformScale: 1,
  };


  // const onLayoutChange = (layout:any)  =>{
  //   setGridLayout(layout)
  // }

  

    return (
      // <div style={{transform: 'scale(0.5) translate(-50%, -50%)'}}>
        <ReactGridLayout
          layout={layoutLG}
          //onLayoutChange={onLayoutChange}
          {...gridProps}
          resizeHandles={["se", "ne", "nw", "sw"]}
        >
          <GridElementDiv key="a">
            
              Launch
            <ScrollDiv>
            <Launches selectLaunch={handleSetLaunch} selectedLaunch={launch}></Launches>
            </ScrollDiv>
          </GridElementDiv>
          <GridElementDiv key="b">
            <YoutubeEmbed/>
          </GridElementDiv>
          <GridElementDiv key="c"><span>c</span></GridElementDiv>
        </ReactGridLayout>
      // </div>
    );
  
}

