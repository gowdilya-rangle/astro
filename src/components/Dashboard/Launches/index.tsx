import React , { useState }from "react";
import { useQuery, gql } from "@apollo/client";
import RGL, { WidthProvider } from "react-grid-layout";
import styled from "styled-components";




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

export default function Launches() {



  const { loading, error, data } = useQuery<ILaunches>(GET_LAUNCHES);



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;





  return (
    <div>
      
      {data
        ? data.launches.map((launchObject: ILaunchObject) => {
            console.log(launchObject);
            return(
            <div>
                <div>{launchObject.id}</div>
                <div>{launchObject.mission_name}</div>
                
            </div>)
            
          })
        : null}
     
    </div>
  );
}