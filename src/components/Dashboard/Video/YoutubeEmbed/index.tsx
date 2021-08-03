import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
`;

interface IYoutubeProps {
  embedId: string;
}

const YoutubeEmbed = (props: IYoutubeProps) => (
  <ContainerDiv>
    <VideoIframe
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </ContainerDiv>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
