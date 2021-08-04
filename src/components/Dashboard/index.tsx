import { Responsive, WidthProvider } from "react-grid-layout";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";
import { useState } from "react";
import Launches from "./Launches/";
import Video from "./Video";
import styled from "styled-components";
import { ILaunchObject } from "./types";
import Info from "./Info";
import space from './../../images/space.png';


const ResponsiveGridLayout = WidthProvider(Responsive);

const StyledDiv = styled.div`
  height: 100vh;
  display: block;
  /*background-image: url(${space});*/


`;

const HeaderDiv = styled.div`
  border: 1px solid white;
  background:transparent;
  font-size: 22px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 650;
  line-height: 1.43;
  letter-spacing: 0.01071e;
  text-align: center;
  height: 30px;
  margin:10px;
`;





const GridElementDiv = styled.div`
border: 1px solid white;
  color: #fff;
  background-color: transparent;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071e;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

//inheriting styles of Grid Element
const DarkGridElementDiv = styled(GridElementDiv)`
  background-color: transparent;
  border: 1px solid white;
`




const StyledGrid = styled.div`
  background: #ba1e68;
  overflow: auto;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
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
  overflow: scroll;
  height: 390px;
  background-color: transparent;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export default function Dashboard() {
  const [launch, setLaunch] = useState<ILaunchObject | null>(null);

  const handleSetLaunch = (launchObject: ILaunchObject) => {
    setLaunch(launchObject);
  };

  const layoutLG = [
    { i: "a", x: 0, y: 0, w: 3, h: 12, maxH: 12, minW: 2, resizeHandles: [] },
    { i: "b", x: 3, y: 1, w: 6, h: 12 },
    { i: "c", x: 3, y: 0, w: 6, h: 9 },
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
    <StyledDiv>
      <ResponsiveGridLayout
        layouts={{ lg: layoutLG }}
        //onLayoutChange={onLayoutChange}
        {...gridProps}
        resizeHandles={["se", "ne", "nw", "sw"]}
      >

        <GridElementDiv key="a">
          <HeaderDiv>
              Launch
          </HeaderDiv>
          <ScrollDiv>
            <Launches
              selectLaunch={handleSetLaunch}
              selectedLaunch={launch}
            ></Launches>
          </ScrollDiv>
        </GridElementDiv>
        <StyledGrid key="b">
          {launch ? <Video selectedLaunch={launch} /> : null}
        </StyledGrid>
        <DarkGridElementDiv key="c">
          {launch ? <Info selectedLaunch={launch}></Info> : null}
        </DarkGridElementDiv>
      </ResponsiveGridLayout>
    </StyledDiv>
  );
}
