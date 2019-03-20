import React from "react";
import styles from "./index.module.css";
import AudioPlayer from "react-h5-audio-player";
import songSrc from "../../audio/song.mp3";

const Footer = () => {
  let song;
  return (
    <div className={styles.footer}>
      <a
        href="https://github.com/IlyaAgarishev/hacker-portfolio"
        target="_blank"
        className={styles.githubLink}
        rel="noopener noreferrer"
      >
        github
      </a>
      <div
        className={styles.playSong}
        onClick={() => {
          song.togglePlay();
        }}
      >
        song
      </div>
      <AudioPlayer
        src={songSrc}
        hidePlayer={true}
        loop={true}
        ref={ref => (song = ref)}
      />
    </div>
  );
};

export default Footer;