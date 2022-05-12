import dynamic from "next/dynamic";
import { useRef, useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
interface YoutubePlayerProps {
  videoUrl: string;
  handleNextClass: () => void;
}
export function YouTubePlayer({
  videoUrl,
  handleNextClass,
}: YoutubePlayerProps) {
  let state = {
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };
  const url = `https://www.youtube.com/watch?v=${videoUrl}`;
  const videoRef = useRef(null);
  const [playedPrevious, setPlayedPrevius] = useState<number | null>(300);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number | null>(null);

  return (
    <ReactPlayer
      ref={videoRef}
      playing={true}
      // playing={true}
      // className='react-player'
      // ref={videoRef}
      // controls={true}
      width="100%"
      onEnded={handleNextClass}
      height="100%"
      url={url}
      // controls={true}
    />
  );
}
