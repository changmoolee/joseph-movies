import React from "react";
import styled from "styled-components";
import YouTube, { YouTubeProps } from "react-youtube";
import useResize from "../hooks/useResize";

export function Trailer({ videoId }: any) {
  const { width, height } = useResize();
  const breakpoint = 672;

  const pcOpts: YouTubeProps["opts"] = {
    width: width * 0.4,
    height: height * 0.4,
    playerVars: {},
  };

  const mobileOpts: YouTubeProps["opts"] = {
    width: width * 0.9,
    playerVars: {},
  };

  return (
    <VideoBox>
      {width > breakpoint ? (
        <YouTube videoId={videoId} opts={pcOpts} />
      ) : (
        <YouTube videoId={videoId} opts={mobileOpts} />
      )}
    </VideoBox>
  );
}

const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
