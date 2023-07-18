"use client";
import React, {useState} from "react";
import {addSongToDatabase} from "./addsongtodatabase";
import "../components.css/songinput.css"; // Import the CSS file

const SongInput = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");

  const handleAddSong = async () => {
    try {
      await addSongToDatabase(name, artist);
    } catch (error) {
      console.error("Error adding song:", error);
    }
    window.location.reload();
  };

  return (
    <div className='song-input-container'>
      <label>
        Name:
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Artist:
        <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)} />
      </label>
      <button onClick={handleAddSong}>Add Song to Database</button>
    </div>
  );
};

export default SongInput;
