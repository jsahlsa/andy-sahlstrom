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

  const onLoadedMetadata = (e) => {
    console.log(e.target.duration);
    const seconds = Math.floor(e.target.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    console.log(audioPlayer.current);

    console.log('duration: ' + audioPlayer.current.duration);
  };

  const calculateTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const returnedSeconds = secs < 10 ? `0${secs}` : secs;
    return `${minutes}:${returnedSeconds}`;
  };

  const playPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);

    if (!isPlaying) {
      audioPlayer.current.play();
      barOneEl.current.style.transform = 'rotate(90deg) translate(0, -5.5em)';
      barThreeEl.current.style.transform =
        'rotate(90deg) translate(-0.1em, 7.7em)';
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
  };

  function tapSpaceBar(e) {
    if (e.keyCode === 32) {
      playPause();
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${
        (Number(progressBar.current.value) / audioPlayer.current.duration) * 100
      }%`
    );
    console.log(Number(progressBar.current.value) / Number(duration));

    setCurrentTime(progressBar.current.value);
  };

  return (
    <div>
      <div className={styles.track_container}>
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
        <div className={styles.track_info}>
          <p className={styles.track_name}>{song.name}</p>

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

          <div className={styles.duration_items}>
            <div>
              <p className={styles.mono}>{calculateTime(currentTime)}</p>
            </div>

            <div>
              <p className={styles.mono}>
                {!isNaN(duration) && calculateTime(duration)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
