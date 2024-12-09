import React from "react";
import { Button } from "@/components/ui/button";
import JoyStick from "@/assets/Images/JoyStick.png";
import Cards from "@/assets/Images/Cards.png";

const PromotionSection: React.FC = () => {
  return (
    <div className="relative overflow-x-auto scrollbar-hidden w-full mb-8">
      <div className="flex gap-5 w-max">
        {/* Left Promotion Box */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#56082D] to-[#004688] rounded-xl h-[280px] w-[300px] md:w-[400px] lg:w-[600px] py-7 px-6 flex items-center justify-between">
          <div className="w-1/2 flex flex-col justify-between">
            <h2 className="text-2xl font-bold">Get $20 Bonus</h2>

            <p className="mt-2 text-sm md:text-md">
              Get your $20 bonus today! Sign up now and enjoy instant rewards
              for joining our amazing community.
            </p>
            <Button className="mt-4 w-1/2 bg-[#262626] border border-gray-400">
              Get Bonus
            </Button>
          </div>

          <div className="w-1/2 h-full flex items-center">
            <img
              src={JoyStick}
              alt="Joy Stick"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Promotion Box */}
        <div className="flex-shrink-0 bg-gradient-to-r from-[#1C2A42] via-[#143342] to-[#094042] rounded-xl h-[280px] w-[300px] md:w-[400px] lg:w-[600px] py-7 pl-6 flex items-center justify-between">
          <div className="w-1/2 flex flex-col justify-between">
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-b from-[#FDCB41] to-[#009487] text-transparent bg-clip-text">
              Register Now & Claim Your Exclusive Bonus!
            </h2>
            <Button className="mt-4 w-1/2 bg-gradient-to-r from-[#FF9260] to-[#FFF5A3] text-black hover:opacity-80">
              Start Now
            </Button>
          </div>

          <div className="flex items-center">
            <img
              src={Cards}
              alt="Cards"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionSection;
