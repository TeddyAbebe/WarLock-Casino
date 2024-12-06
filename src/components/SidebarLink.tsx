import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  to: string;
  icon: string;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  const gradientClasses = isActive
    ? "bg-gradient-to-r from-[#800225] via-[#2D101F47] to-[#11151D] text-white"
    : "text-gray-400";

  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 hover:text-white p-3 rounded-lg ${gradientClasses}`}
    >
      <img src={icon} alt={label} className="object-contain" />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarLink;
