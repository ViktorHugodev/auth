import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
// const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });
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
  const youTubeRef = useRef(null);
  const url = `https://www.youtube.com/watch?v=${videoUrl}`;

  const [showChild, setShowChild] = useState(true);
  const [playedPrevious, setPlayedPrevius] = useState<number | null>(500);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [percentageClass, setPercentageClass] = useState<number>(0);

  function onPlay() {
    if (playedPrevious !== null)
      youTubeRef.current?.seekTo(playedPrevious, url);
  }

  function handlePause() {
    setPlayed(timeWatchedNow);
    let timeForFinish = timeWatchedNow - duration;
    let percent = (timeWatchedNow / duration) * 100;
    // setPercentageClass(percent);
    console.log("percT", percent);
    console.log("timeForFinish", timeForFinish);
    console.log("percentageWatched", percentageClass);
  }
  function onFinishedClass() {
    setPercentageClass(100);
    handleNextClass();
  }


  let timeWatchedNow;

  if (!showChild) return <h1>wait</h1>;
  if (showChild) {
    return (
      <ReactPlayer
        ref={youTubeRef}
        playing={true}
        className="react-player"
        controls={true}
        onDuration={(e) => setDuration(e)}
        width="100%"
        onStart={onPlay}
        onEnded={onFinishedClass}
        height="100%"
        url={url}
        onPause={() => handlePause()}
        onProgress={(e) => {
          console.log(e);
          timeWatchedNow = Math.floor(e.playedSeconds);
          console.log("timeW", timeWatchedNow);
        }}
      />
    );
  }
}
