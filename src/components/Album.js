import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      activeHoverIndex: null,
      activeSongIndex: null,
      volume: 0
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = 0.5;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumecontrol: e => {
        this.setState({ volume: this.audioElement.volume });
      }
    };
    this.audioElement.addEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumecontrol",
      this.eventListeners.volumecontrol
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.removeEventListener(
      "volumecontrol",
      this.eventListeners.volumecontrol
    );
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song, index) {
    const isSameSong = this.state.currentSong === song;
    this.setState({ activeSongIndex: index });

    if (this.state.isPlaying && isSameSong) {
      this.pause();
      this.setState({ activeSongIndex: null });
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    this.audioElement.volume = e.target.value;
    this.setState({ volume: e.target.value });
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );

    const totalSongs = this.state.album.songs;
    const newIndex = Math.min(totalSongs.length - 1, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleSongHoverOn(index) {
    this.setState({ activeHoverIndex: index });
  }

  handleSongHoverOff(index) {
    this.setState({ activeHoverIndex: null });
  }

  handlePlayPause(index) {
    const currentSongPlayingIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );

    if (this.state.isPlaying === true && currentSongPlayingIndex === index) {
      return <span className="icon ion-md-pause" />;
    }

    if (this.state.activeHoverIndex === index) {
      return <span className="icon ion-md-play" />;
    }
    return index + 1;
  }

  formatTime(filterTime) {
    let time = filterTime;

    if (time === undefined || time === null || time === Boolean) {
      return "-:--";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);

    let newTime = "";
    newTime += "" + minutes + ":" + (seconds < 10 ? "0" : "");
    newTime += "" + seconds;

    return newTime;
  }

  render() {
    return (
      <section className="album">
        {this.props.match.params.slug} Album will go here
        <section id="album-info">
          <img
            id="album-cover-art"
            src={this.state.album.albumCover}
            alt={this.state.album.title}
          />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list" cellSpacing="0" cellPadding="2">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody className="album-songs">
            {this.state.album.songs.map((song, index) => (
              <tr
                className="song"
                key={index}
                onClick={() => this.handleSongClick(song, index)}
                onMouseEnter={() => this.handleSongHoverOn(index)}
                onMouseLeave={() => this.handleSongHoverOff(index)}
              >
                <td className="song-number">{this.handlePlayPause(index)}</td>
                <td>{song.title}</td>
                <td>{this.formatTime(song.duration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.formatTime(this.audioElement.currentTime)}
          duration={this.formatTime(this.audioElement.duration)}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={e => this.handleTimeChange(e)}
          newTimeInputValue={
            this.audioElement.currentTime / this.audioElement.duration
          }
          handleVolumeChange={e => this.handleVolumeChange(e)}
        />
      </section>
    );
  }
}

export default Album;
