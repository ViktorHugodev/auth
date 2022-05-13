import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { AulasProps } from "../../pages/curso/modulos";

interface VimeoJsProps {
  video: AulasProps
  handleNextClass: () => void;
}

export function VimeoJs({ video, handleNextClass }: VimeoJsProps) {
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
  const url = `https://vimeo.com/${video.url_video}`;
  
  const [playedPrevious, setPlayedPrevius] = useState<number | null>(200);
  const [played, setPlayed] = useState<number>(0);
  const [duration, setDuration] = useState<number | null>(null);
  const [percentageClass, setPercentageClass] = useState<number>(0);
  const dataAtual = new Date().toJSON()
  console.log('data',dataAtual)
  function handlePause() {
    setPlayed(timeWatchedNow);
    let timeForFinish = played - duration;
    let percent = Math.floor((played / duration) * 100);
    setPercentageClass(percent);
    console.log("timeForFinish", timeForFinish);
  }
  function onFinishedClass() {
    setPercentageClass(100);
    handleNextClass();
  }
  function onPlay() {
    if (playedPrevious !== null)
    videoRef.current?.seekTo(playedPrevious, url);
  }
  //temp consts
  const published_at = '"2022-06-29T18:52:43.000000Z"'
  const wait_days = 4
  console.log(video)
  if (percentageClass >= 98) console.log("Aula concluida");
  let timeWatchedNow = 0;
  if(video.published !== 'active' && video.blocked === 'active'){
    return (
      <h1>Vídeo ainda não publicado ou inativo</h1>
    )
  }
  if(wait_days > 0){
    return <h1>Você ainda precisa esperar {wait_days} dias para acessar o vídeo</h1>
  }
  if(published_at < dataAtual){
    return <h1>Vídeo ainda não liberado</h1>
  }
  else {
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
        // onPause={e => console.log('onSeek', passado = e)}
        onProgress={(e) =>
          console.log((timeWatchedNow = Math.floor(e.playedSeconds)))
        }
      />
    );
  }
 
}
