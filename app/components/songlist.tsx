import {PrismaClient} from "@prisma/client";
import React from "react";
import "../components.css/songlist.css";
const prisma = new PrismaClient();

export default async function SongList() {
  const songlist = await prisma.song.findMany();
  return (
    <div className='song-list-container'>
      <h2 className='song-list-heading'>Song List</h2>
      <ul className='song-list'>
        {songlist.map((songlist) => (
          <li className='song-list-item' key={songlist.id}>
            {songlist.name} - {songlist.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const songlist = await prisma.song.findMany();

  return {
    props: {
      songlist,
    },
  };
}
