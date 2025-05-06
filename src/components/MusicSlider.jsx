import React, { useState } from "react";
import "../styles/MusicSlider.css";
import img1 from '../assets/react.svg'

const MusicSlider = () => {
  const [selected, setSelected] = useState("item-1");

  const handleChange = (e) => {
    setSelected(e.target.id);
    document.body.classList.toggle("blue");
  };

  return (
    <div className="container">
      <input
        type="radio"
        name="slider"
        id="item-1"
        checked={selected === "item-1"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider"
        id="item-2"
        checked={selected === "item-2"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider"
        id="item-3"
        checked={selected === "item-3"}
        onChange={handleChange}
      />

      <div className="cards">
        <label className="card" htmlFor="item-1" id="song-1">
          <img
            src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-2" id="song-2">
          <img
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="song"
          />
        </label>
        <label className="card" htmlFor="item-3" id="song-3">
          <img
            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="song"
          />
        </label>
      </div>

      <div className="player">
        <div className="upper-part">
          <div className="play-icon">▶️</div>
          <div className="info-area" id="test">
            <label className="song-info" id="song-info-1">
              <div className="title">Bunker</div>
              <div className="sub-line">
                <div className="subtitle">Balthazar</div>
                <div className="time">4:05</div>
              </div>
            </label>
            <label className="song-info" id="song-info-2">
              <div className="title">Words Remain</div>
              <div className="sub-line">
                <div className="subtitle">Moderator</div>
                <div className="time">4:05</div>
              </div>
            </label>
            <label className="song-info" id="song-info-3">
              <div className="title">Falling Out</div>
              <div className="sub-line">
                <div className="subtitle">Otzeki</div>
                <div className="time">4:05</div>
              </div>
            </label>
          </div>
        </div>
        <div className="progress-bar">
          <span className="progress"></span>
        </div>
      </div>
    </div>
  );
};

export default MusicSlider;
