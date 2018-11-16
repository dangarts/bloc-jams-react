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
      isPlaying: false,
      activeHoverIndex: null,
      activeSongIndex: null
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
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

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
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

  handlePlayPauseIcons(index) {
    if (this.state.activeHoverIndex === index) {
      if (this.state.activeSongIndex === index) {
        return <span className="icon ion-md-pause" />;
      }
      return <span className="icon ion-md-play" />;
    }
    return index + 1;
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
                <td className="song-number">
                  {this.handlePlayPauseIcons(index)}
                </td>
                <td>{song.title}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
        />
      </section>
    );
  }
}

export default Album;
