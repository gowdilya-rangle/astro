import { Responsive, WidthProvider } from 'react-grid-layout';
import "../../../node_modules/react-grid-layout/css/styles.css";
import '../../../node_modules/react-resizable/css/styles.css';
import {useState} from "react";
import Launches from './Launches/';
import YoutubeEmbed from  './Video/index';
import styled from "styled-components";

const ResponsiveGridLayout = WidthProvider(Responsive);

 const GridElementDiv= styled.div`
  color: #fff;
  background-color: #3f51b5;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071e
`;


const StyledGrid = styled.div`
background: #b71c1c;
overflow: auto;
.react-resizable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0;
  background-position: bottom right;
  padding: 0 3px 3px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: se-resize;
}
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



export default function Dashboard() {

  const [launch, setLaunch] = useState<ILaunchObject|null>(null);


 

  const handleSetLaunch = (launchObject:ILaunchObject) =>{
    setLaunch(launchObject);
  }
  


  const layoutLG = [
    { i: "a", x: 0, y: 0, w: 3, h: 11 , maxH:11, minW:3, resizeHandles:[]},
    { i: "b", x: 3, y: 0, w: 8, h: 18},
    { i: "c", x: 6, y: 0, w: 3, h: 5},
  ];

  //const [gridLayout, setGridLayout] = useState(layout);


  var gridProps = {
    className: "layout",
    items: 20,
    rowHeight: 30,
    transformScale: 1,
  };


  // const onLayoutChange = (layout:any)  =>{
  //   setGridLayout(layout)
  // }

  

    return (
      // <div style={{transform: 'scale(0.5) translate(-50%, -50%)'}}>
        <ResponsiveGridLayout
          layouts={{lg:layoutLG}}
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
          <StyledGrid key="b">
            <YoutubeEmbed/>
          </StyledGrid>
          <GridElementDiv key="c"><span>c</span></GridElementDiv>
        </ResponsiveGridLayout>
      // </div>
    );
  
}

