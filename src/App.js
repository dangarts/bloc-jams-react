import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 id="logo">
            <Link to="/">
              <img
                src="/assets/images/dang_jams_logo.png"
                alt="Bloc Jams Logo"
              />
            </Link>
          </h1>
          <div id="tagline">
            <p>Turn up the music!</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>

        <footer>
          <p>Dang Jams &copy; 2019</p>
        </footer>
      </div>
    );
  }
}

export default App;
