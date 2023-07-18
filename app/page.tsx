import React, {cache, use} from "react";
import prisma from "@/lib/prisma";
import {GetStaticProps} from "next";
import SongList from "./components/songlist";
import SongInput from "./components/songinput";

export default async function Home() {
  return (
    <div>
      <h1>Welcome to the Music Library</h1>
      <SongList />
      <SongInput />
    </div>
  );
}
