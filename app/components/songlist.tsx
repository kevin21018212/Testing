import {PrismaClient} from "@prisma/client";
import React from "react";
import "../components.css/songlist.css";
const prisma = new PrismaClient();

export default async function SongList() {
  const songs = await prisma.song.findMany();
  return (
    <div className='song-list-container'>
      <h2 className='song-list-heading'>Song List</h2>
      <ul className='song-list'>
        {songs.map((song) => (
          <li className='song-list-item' key={song.id}>
            {song.name} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const songs = await prisma.song.findMany();

  return {
    props: {
      songs,
    },
  };
}
