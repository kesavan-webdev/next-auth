"use client";
import { useEffect, useState } from "react";
import GameListData from "./games/data";
import Image from "next/image";

const GameList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(GameListData);
  }, []);
  return (
    <div className="flex items-center justify-center gap-8 mt-5 px-5">
      {data.map((val) => {
        return (
          <div
            key={val.id}
            className="flex flex-col items-center justify-center w-20 h-20 "
          >
            <div className="w-full h-full flex justify-center items-center hover:animate-bounce transition duration-700 ease-out">
              <Image src={val.image} width={40} height={40} alt={val.name} />
            </div>
            <small className="font-semibold">{val.name}</small>
          </div>
        );
      })}
    </div>
  );
};
export default GameList;
