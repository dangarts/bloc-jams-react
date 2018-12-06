import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
        {this.state.albums.map((album, index) => (
          <Link to={`/album/${album.slug}`} key={index}>
            <img src={album.albumCover} alt={album.title} />
            <div className="album-title">{album.title}</div>
            <div className="artist">{album.artist}</div>
            <div className="total-songs">{album.songs.length} songs</div>
          </Link>
        ))}


        {/* Album Placeholders */}
        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>

        <Link to="#">
          <img
            src="https://via.placeholder.com/560/f23c7c/fff?text=Album Unavailable"
            alt="Album Placeholder"
          />
          <div className="album-title">Album Name</div>
          <div className="artist">Artist</div>
          <div className="total-songs">Song #</div>
        </Link>
      </section>
    );
  }
}

export default Library;
