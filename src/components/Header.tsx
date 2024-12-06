import Logo from "@/assets/Logo.svg";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SelectComponent } from "./Select";

const Header = () => {
  const handleLanguageChange = (value: string) => {
    console.log("Selected language:", value);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex w-1/2 gap-24">
        {/* Logo Section */}
        <Link to={"/"}>
          <img src={Logo} alt="WarLock Logo" className="h-" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 text-[#B9C5E0]">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/promotions" className="hover:underline">
            Promotions
          </Link>
          <Link to="/about-us" className="hover:underline">
            About Us
          </Link>
        </div>
      </div>

      {/* Buttons and Language Selector */}
      <div className="flex items-center gap-8">
        <Button className="bg-gradient-to-r from-[#FCAC4A] via-[#c97bcb] to-[#5CDBE5] text-white px-4 py-2 rounded-md">
          Log in
        </Button>

        <Button className="bg-gradient-to-r from-[#4A90E2] to-[#5CDBE5] text-white px-4 py-2 rounded-md">
          Sign up
        </Button>

        <SelectComponent
          options={[
            { label: "EN", value: "en" },
            { label: "ES", value: "es" },
            { label: "FR", value: "fr" },
            { label: "DE", value: "de" },
            { label: "ZH", value: "zh" },
          ]}
          onChange={handleLanguageChange}
          className="bg-background/5 text-white border-none outline-none shadow-none"
        />
      </div>
    </div>
  );
};

export default Header;
