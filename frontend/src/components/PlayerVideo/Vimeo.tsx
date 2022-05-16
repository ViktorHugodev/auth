import { useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { AulasProps } from "../../pages/curso/modulos";
interface VimeoJsProps {
  video: AulasProps;
  handlePlayClass: () => void;
}

export function VimeoJs({ video, handlePlayClass }: VimeoJsProps) {
  const videoRef = useRef(null);
  const url = `https://vimeo.com/${video.url_video}`;

  const [playedPrevious, setPlayedPrevius] = useState<number | null>(200);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [percentageClass, setPercentageClass] = useState<number>(0);

  function handlePause() {
    setPlayed(timeWatchedNow);
    let timeForFinish = played - duration;
    let percent = Math.floor((played / duration) * 100);
    setPercentageClass(percent);
    console.log("timeForFinish", timeForFinish);
  }
  function onFinishedClass() {
    setPercentageClass(100);
    handlePlayClass();
  }
  function onPlay() {
    if (playedPrevious !== null) videoRef.current?.seekTo(playedPrevious, url);
  }
  //temp consts
  console.log(video);
  if (percentageClass >= 98) console.log("Aula concluida");
  let timeWatchedNow = 0;

  return (
    <ReactPlayer
      playing={true}
      className="react-player"
      ref={videoRef}
      title="iframe"
      onStart={onPlay}
      width="100%"
      onEnded={onFinishedClass}
      height="100%"
      url={url}
      controls={true}
      onDuration={(e) => setDuration(e)}
      onPause={handlePause}
      onProgress={(e) =>
        console.log((timeWatchedNow = Math.floor(e.playedSeconds)))
      }
    />
  );
}
