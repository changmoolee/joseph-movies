import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import useResize from "../../hooks/useResize";
import * as Styled from "./Youtube.styles";

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
    <Styled.VideoBox>
      {width > breakpoint ? (
        <YouTube videoId={videoId} opts={pcOpts} />
      ) : (
        <YouTube videoId={videoId} opts={mobileOpts} />
      )}
    </Styled.VideoBox>
  );
}
