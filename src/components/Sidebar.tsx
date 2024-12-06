import SidebarLink from "./SidebarLink";
import Prize from "@/assets/Icons/Diamonds.svg";
import Play from "@/assets/Icons/play.svg";
import GamePad from "@/assets/Icons/Gamepad.svg";
import Slots from "@/assets/Icons/Slots.svg";
import CupStar from "@/assets/Icons/CupStar.svg";
import TableGames from "@/assets/Icons/TableGames.svg";
import LiveGames from "@/assets/Icons/LiveGames.svg";

const Sidebar = () => {
  return (
    <aside className="bg-[#070B14] w-[300px] h-screen text-white flex flex-col justify-between py-8 px-4">
      {/* Top Section */}
      <div className="space-y-6">
        <div className="relative bg-gradient-to-r from-[#004F2A] to-[#35353542] p-2 rounded-xl flex gap-4 overflow-hidden">
          <img src={Prize} alt="Prize" className="object-contain" />

          <span>
            <p className="text-[#7E8699] text-sm">Claim your</p>
            <p className="font-semibold">VIP Rewards</p>
          </span>

          <img
            src={Play}
            alt="Play"
            className="object-contain absolute right-0 bottom-0"
          />
        </div>

        {/* Main Navigation */}
        <nav className="space-y-6 p-4 rounded-xl bg-background/5">
          <SidebarLink to="/" icon={GamePad} label="Lobby" />
          <SidebarLink to="/profile" icon={Slots} label="Slots" />
          <SidebarLink to="/newGames" icon={CupStar} label="New Games" />
          <SidebarLink to="/tableGames" icon={TableGames} label="Table Games" />
          <SidebarLink to="/liveGames" icon={LiveGames} label="Live Games" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6 p-4 rounded-xl bg-background/5">
        <SidebarLink to="/help" icon={GamePad} label="Help Center" />
        <SidebarLink to="/support" icon={GamePad} label="Live Support" />
      </div>
    </aside>
  );
};

export default Sidebar;
