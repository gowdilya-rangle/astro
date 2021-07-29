import React , { useState, useEffect }from "react";
import { useQuery, gql } from "@apollo/client";
import styled,{css} from "styled-components";




const Pheading = styled("p")<{active:boolean}>`
font-size: 11.2px;
font-weight: 700;
width: 100%;
height: 16px;
line-height: 16.8px;
margin-top: 4px;
text-transform: uppercase;
background-color: ${props => props.active ? "#ba1e68;" :"#0c164f;"}
&:hover{
  background-color:#5643fd;

}

`;
//#5643fd

const GET_LAUNCHES = gql`
  {
    launches {
      id
      mission_name
      mission_id
    }
  }
`;

interface ILaunches {
  launches: ILaunchObject[];

}

interface ILaunchObject {
  id: string;
  mission_name: string;
  mission_id: string[];
}

interface ILaunchesProps{
  selectLaunch:(launchObject:ILaunchObject)=>void;
  selectedLaunch:(ILaunchObject|null);
}

export default function Launches(props:ILaunchesProps) {



  const { loading, error, data } = useQuery<ILaunches>(GET_LAUNCHES);

  useEffect(()=>{
    if (data && data.launches.length > 0){
      props.selectLaunch(data.launches[0]);
    }

  },[data])



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;





  return (
    <div>
      {data
        ? data.launches.map((launchObject:ILaunchObject, index) => {
            console.log(launchObject);
            console.log(props.selectedLaunch);
            return(
            <div onClick={()=>{props.selectLaunch(launchObject)}} key={launchObject.id + index} >
                <Pheading active={props.selectedLaunch && props.selectedLaunch.id === launchObject.id?true:false} >{launchObject.mission_name}</Pheading>
                
            </div>)
            
          })
        : null}
    </div>
  );
}