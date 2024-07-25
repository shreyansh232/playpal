"use client";
import React, { useState, useEffect } from "react";
import Game from "@/app/GameList/Game";
import Image from "next/image";

function GameList() {
  const [games, setGame] = useState([]);
  useEffect(() => {
    setGame(Game.GameList);
  }, []);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-10">
      {games.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center cursor-pointer"
        >
          <Image
            className="hover:animate-bounce transition-all duration-150"
            src={item.image}
            alt={item.name}
            width={45}
            height={45}
          />
          <h2 className="text-md text-center">{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default GameList;
