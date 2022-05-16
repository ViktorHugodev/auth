import { useRef } from "react";
import ReactPlayer from "react-player";
import { AulasProps } from "../../pages/curso/modulos";

interface VimeoJsProps {
  video: AulasProps
  handlePlayClass: () => void;
}

export function VideoMp4({video, handlePlayClass }:VimeoJsProps){
  const videomp4Ref = useRef(null)


  return (
    <ReactPlayer
    onEnded={handlePlayClass}
    ref={videomp4Ref}
    width="100%"
    height="100%"
    controls={true}
    url={video.url_video}
    />
  )
}