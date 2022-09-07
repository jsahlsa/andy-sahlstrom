import { useState, useRef } from 'react';
import styles from '../styles/music.module.css';

export default function RenderMusic(song) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const barOneEl = useRef();
  const barTwoEl = useRef();
  const barThreeEl = useRef();

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
      barOneEl.current.style.transform = 'rotate(90deg) translate(0, -5em)';
      barThreeEl.current.style.transform =
        'rotate(360deg) translate(10em, -5em)';
      barThreeEl.current.style.opacity = '0';
      barOneEl.current.style.width = '80px';
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      barOneEl.current.style.width = '60px';
      barThreeEl.current.style.transform =
        'rotate(-35deg) translate(-0.7em, 0.7em)';
      barThreeEl.current.style.opacity = '1';
      barOneEl.current.style.transform =
        'rotate(37deg) translate(2.6em, -1.7em)';
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
      <div className={styles.track_container}>
        <p>{song.name}</p>
        <button
          className={!isPlaying ? styles.play_button : styles.pause_button}
          onClick={playPause}
          onKeyPress={tapSpaceBar}
        >
          <div className={styles.playpause_wrapper}>
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect
                ref={barOneEl}
                className={`${styles.barone} ${styles.bars}`}
                width="60"
                height="15"
              ></rect>
              <rect
                ref={barTwoEl}
                className={`${styles.bartwo} ${styles.bars}`}
                y="32"
                width="80"
                height="15"
              ></rect>
              <rect
                ref={barThreeEl}
                className={`${styles.barthree} ${styles.bars}`}
                y="65"
                width="60"
                height="15"
              ></rect>
            </svg>
          </div>
        </button>

        <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
        <div>{calculateTime(currentTime)}</div>
        <div>
          <input
            className={styles.progress_bar}
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
    </div>
  );
}
