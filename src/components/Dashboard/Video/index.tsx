import YoutubeEmbed from "./YoutubeEmbed";
import { IVideoProps } from "../types";
import { useQuery, gql } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

const ProgressDiv = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  .MuiCircularProgress-root {
    display: inline-block;
    margin-top: 25% !important;
    width: 100px !important;
    height: 100px !important;
  }
`;

interface IVideo {
  launch: {
    id: string;
    links: {
      video_link: string;
    };
  };
}

function Video(props: IVideoProps) {
  var embedID: string = "";

  const GET_VIDEO = gql`
    query GET_LAUNCH_VIDEO($launchId: ID!) {
      launch(id: $launchId) {
        id
        links {
          video_link
        }
      }
    }
  `;

  var launchId = props.selectedLaunch.id;

  const { loading, error, data } = useQuery<IVideo>(GET_VIDEO, {
    variables: { launchId },
  });
  if (data) {
    console.log(data.launch.links.video_link);
    var url = data.launch.links.video_link;
    if (url) {
      embedID = url.split("https://www.youtube.com/watch?v=")[1];
      console.log(embedID);
      if (!embedID) {
        embedID = url.split("https://youtu.be/")[1];
      }
    }
  }
  if (loading)
    return (
      <ProgressDiv>
        <CircularProgress />
      </ProgressDiv>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {embedID && embedID.length > 0 ? (
        <YoutubeEmbed embedId={embedID} />
      ) : null}
    </div>
  );
}

export default Video;
