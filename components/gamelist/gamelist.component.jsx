import GameListData from "./games/data";
import Image from "next/image";

const GameList = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-5">
      {GameListData.map((val) => {
        return (
          <div
            key={val.id}
            className="flex flex-col items-center justify-center w-20 h-20 "
          >
            <div className="w-full h-full flex justify-center items-center">
              <Image
                className="hover:animate-bounce transition duration-700 ease-out"
                src={val.image}
                width={40}
                height={40}
                alt={val.name}
              />
            </div>
            <span className="">{val.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default GameList;
