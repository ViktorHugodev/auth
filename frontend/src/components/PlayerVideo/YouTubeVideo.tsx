import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
// const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });
interface YoutubePlayerProps {
  videoUrl: string;
  handlePlayClass: () => void;
}
export function YouTubePlayer({
  videoUrl,
  handlePlayClass,
}: YoutubePlayerProps) {

  const youTubeRef = useRef(null);
  const url = `https://www.youtube.com/watch?v=${videoUrl}`;

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
    setPercentageClass(percent);
  }
  function onFinishedClass() {
    setPercentageClass(100);
    handlePlayClass();
  }

  let timeWatchedNow;

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
