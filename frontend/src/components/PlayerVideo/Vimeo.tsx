import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";

interface VimeoJsProps {
  videoUrl: string;
  handleNextClass: () => void;
}

export function VimeoJs({ videoUrl, handleNextClass }: VimeoJsProps) {
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
  const videoRef = useRef(null);
  const [playedPrevious, setPlayedPrevius] = useState<number | null>(300);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number | null>(null);

  const [percentageClass, setPercentageClass] = useState<number>(0);
  const url = `https://vimeo.com/${videoUrl}`;

  function handlePause() {
    let timeForFinish = played - duration;
    let percent = Math.floor((played / duration) * 100);
    setPercentageClass(percent);
    console.log("timeForFinish", timeForFinish);
  }
  function nextClass() {
    setPercentageClass(100);

    handleNextClass();
  }
  function loadOnCurrentTime() {
    if (playedPrevious !== null)
      videoRef.current?.player.seekTo(playedPrevious);
  }
  console.log("videoref", videoRef.current?.player.player.currentTime);

  console.log("durationVideo", duration);
  console.log("watchedMs", played);
  console.log("percentageWatched", percentageClass);
  if (percentageClass >= 98) console.log("Aula concluida");
  return (
    <ReactPlayer
      playing={true}
      className="react-player"
      ref={videoRef}
      title="iframe"
 
    
      onPlay={loadOnCurrentTime}
      width="100%"
      onEnded={nextClass}
      height="100%"
      url={url}
      controls={true}
      onDuration={(e) => setDuration(e)}
      onPause={handlePause}
      // onPause={e => console.log('onSeek', passado = e)}
      onProgress={(e) => setPlayed(Math.floor(e.playedSeconds))}
    />
  );
}
