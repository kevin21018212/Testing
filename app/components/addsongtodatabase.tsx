"use server";

import prisma from "@/lib/prisma";
export async function addSongToDatabase(name: string, artist: string) {
  await prisma.song.create({
    data: {
      name,
      artist,
    },
  });
}
