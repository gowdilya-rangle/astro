import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import styled, { css } from "styled-components";
import { ILaunches, ILaunchesProps, ILaunchObject } from "../types";
import MenuItem from '@material-ui/core/MenuItem';


const StyledMenuItem = styled(MenuItem)<{ active: boolean }>`
font-size: 14px;
font-weight: 700;
width: 100%;
margin:0px;
padding:10px;
line-height: 16.8px;
color:white !important;
text-transform: uppercase;

text-align: center;
background-color: ${(active) => (active ? "#ba1e68;" : "transparent;")}
&:hover{
  background-color:#5643fd;

}

`;


const GET_LAUNCHES = gql`
  {
    launches {
      id
      mission_name
      mission_id
    }
  }
`;

export default function Launches(props: ILaunchesProps) {
  const { loading, error, data } = useQuery<ILaunches>(GET_LAUNCHES);

  useEffect(() => {
    if (data && data.launches.length > 0) {
      props.selectLaunch(data.launches[0]);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data
        ? data.launches.map((launchObject: ILaunchObject, index) => {
            return (
              <div
                onClick={() => {
                  props.selectLaunch(launchObject);
                }}
                key={launchObject.id + index}
              >
                <StyledMenuItem
                  active={
                    props.selectedLaunch &&
                    props.selectedLaunch.id === launchObject.id
                      ? true
                      : false
                  }
                >
                  {launchObject.mission_name}
                </StyledMenuItem>
              </div>
            );
          })
        : null}
    </div>
  );
}
