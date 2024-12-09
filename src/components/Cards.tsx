import React from "react";

import MajesticSafari from "@/assets/Images/MajesticSafari.png";
import FruitBlaze from "@/assets/Images/FruitBlaze.png";
import ZuluGold from "@/assets/Images/ZuluGold.png";
import GreekLegends from "@/assets/Images/GreekLegends.png";
import DayOfDead from "@/assets/Images/DayOfDead.png";

import FateOfFortune from "@/assets/Images/FateOfFortune.png";
import FullMoonWildTrack from "@/assets/Images/FullMoonWild.png";
import GonzosQuest from "@/assets/Images/GonzoQuest.png";
import DazzleMeMegaways from "@/assets/Images/DazzleMe.png";

// import Blackjack from "@/assets/Images/Blackjack.png";
// import FootballStudio from "@/assets/Images/FootballStudio.png";
// import Baccarat from "@/assets/Images/Baccarat.png";

const CardsSection: React.FC = () => {
  const lobbyGames = [
    { name: "Majestic Safari", image: MajesticSafari },
    { name: "Fruit Blaze", image: FruitBlaze },
    { name: "Zulu Gold", image: ZuluGold },
    { name: "Greek Legends", image: GreekLegends },
    { name: "Day of Dead", image: DayOfDead },
  ];

  const topRated = [
    { name: "Fate of Fortune", image: FateOfFortune },
    { name: "Day of Dead", image: DayOfDead },
    { name: "Full Moon Wild Track", image: FullMoonWildTrack },
    { name: "Gonzo's Quest", image: GonzosQuest },
    { name: "Dazzle Me Megaways", image: DazzleMeMegaways },
  ];

  //   const liveCasino = [
  //     { name: "Blackjack", image: Blackjack },
  //     { name: "Football Studio", image: FootballStudio },
  //     { name: "Baccarat", image: Baccarat },
  //   ];

  const renderCards = (games: { name: string; image: string }[]) =>
    games.map((game, index) => (
      <div
        key={index}
        className="rounded-xl bg-[#1C1C1C] h-[200px] md:h-[240px] flex flex-col justify-between items-center"
      >
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-contain"
        />
        {/* <p className="text-sm md:text-md text-gray-300 text-center">
          {game.name}
        </p> */}
      </div>
    ));

  return (
    <div className="space-y-8">
      {/* Lobby Section */}
      <div>
        <h2 className="text-lg md:text-2xl font-bold mb-4">Lobby</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
          {renderCards(lobbyGames)}
        </div>
      </div>

      {/* Top Rated Section */}
      <div>
        <h2 className="text-lg md:text-2xl font-bold mb-4">Top Rated</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
          {renderCards(topRated)}
        </div>
      </div>

      {/* Live Casino Section */}
      {/* <div>
        <h2 className="text-lg md:text-2xl font-bold mb-4">Live Casino</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
          {renderCards(liveCasino)}
        </div>
      </div> */}
    </div>
  );
};

export default CardsSection;
