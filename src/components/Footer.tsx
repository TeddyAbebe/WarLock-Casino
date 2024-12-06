import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="backdrop-blur py-12 supports-[backdrop-filter]:bg-background/5">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-gray-300 text-sm font-semibold mb-4">About</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Responsible Gaming
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Affiliate
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 text-sm font-semibold mb-4">Help</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 text-sm font-semibold mb-4">
            Regulations
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                General Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                AML & KYC Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 text-sm font-semibold mb-4">Social</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/facebook" className="flex items-center gap-2">
                <span className="bg-[#808792] rounded-full p-1">
                  <FaFacebookF className="h-3 w-3 text-[#070B14]" />
                </span>
                <p className="text-gray-400 hover:text-white">Facebook</p>
              </Link>
            </li>
            <li>
              <Link to="/twitter" className="flex items-center gap-2">
                <span className="bg-[#808792] rounded-full p-1">
                  <FaTwitter className="h-3 w-3 text-[#070B14]" />
                </span>
                <p className="text-gray-400 hover:text-white">Twitter</p>
              </Link>
            </li>
            <li>
              <Link to="/instagram" className="flex items-center gap-2">
                <span className="bg-[#808792] rounded-full p-1">
                  <FaInstagram className="h-3 w-3 text-[#070B14]" />
                </span>
                <p className="text-gray-400 hover:text-white">Instagram</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
