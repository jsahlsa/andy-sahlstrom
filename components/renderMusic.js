import { useState, useRef } from 'react';

export default function RenderMusic(song) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  function onLoadedMetadata() {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    progressBar.current.max = seconds;
  }

  function calculateTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const returnedSeconds = secs < 10 ? `0${secs}` : secs;
    return `${minutes}:${returnedSeconds}`;
  }

  function playPause() {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();

      cancelAnimationFrame(animationRef.current);
    }
  }

  function tapSpaceBar(e) {
    if (e.keyCode === 32) {
      playPause();
    }
  }

  function whilePlaying() {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function changeRange() {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  function changePlayerCurrentTime() {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  }

  return (
    <div>
      <p>{song.name}</p>
      <button onClick={playPause} onKeyPress={tapSpaceBar}>
        {isPlaying ? 'II' : '>'}
      </button>

      <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
      <div>{calculateTime(currentTime)}</div>
      <div>
        <input
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      <audio
        ref={audioPlayer}
        src={song.file}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
}
