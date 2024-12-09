import React from "react";
import PromotionSection from "@/components/PromotionSection";
import SearchAndFilter from "@/components/SearchFilter";
import CardsSection from "@/components/Cards";

const Home: React.FC = () => {
  return (
    <div className="text-white min-h-screen px-6 py-4 bg-[#121212]">
      {/* Promotion Section */}
      <PromotionSection />

      {/* Search and Filter */}
      <SearchAndFilter />

      {/* Cards Section */}
      <CardsSection />
    </div>
  );
};

export default Home;
