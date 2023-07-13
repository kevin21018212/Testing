'use client';
import React, { useState } from 'react';
import axios from 'axios';
import '../componentscss/databaseinput.css';

const AddSongForm = () => {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/songs', {
        songName,
        artist,
        album,
        year,
        rating,
      });

      console.log(response.data); // Optional: Handle the response from the server

      // Clear the form inputs after successful submission
      setSongName('');
      setArtist('');
      setAlbum('');
      setYear('');
      setRating('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='form-group'>
        <label className='label'>Song Name:</label>
        <input type='text' value={songName} onChange={(e) => setSongName(e.target.value)} className='input' />
      </div>
      <div className='form-group'>
        <label className='label'>Artist:</label>
        <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)} className='input' />
      </div>
      <div className='form-group'>
        <label className='label'>Album:</label>
        <input type='text' value={album} onChange={(e) => setAlbum(e.target.value)} className='input' />
      </div>
      <div className='form-group'>
        <label className='label'>Year:</label>
        <input type='text' value={year} onChange={(e) => setYear(e.target.value)} className='input' />
      </div>
      <div className='form-group'>
        <label className='label'>Rating:</label>
        <input type='text' value={rating} onChange={(e) => setRating(e.target.value)} className='input' />
      </div>
      <button type='submit' className='button'>
        Submit
      </button>
    </form>
  );
};

export default AddSongForm;
