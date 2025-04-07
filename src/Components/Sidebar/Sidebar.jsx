import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineShoppingCart,
  HiOutlinePlusCircle,
  HiOutlineStar,
  HiOutlineChartBar,
  HiOutlinePencilAlt,
  HiMenu,
  HiX,
} from "react-icons/hi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false); // Close mobile menu on resize
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navigationItems = [
    { to: "/", label: "Dashboard", icon: HiOutlineHome },
    { to: "/add", label: "Add Items", icon: HiOutlinePlusCircle },
    { to: "/list", label: "List Items", icon: HiOutlineClipboardList },
    { to: "/orders", label: "Orders", icon: HiOutlineShoppingCart },
    { to: "/expenses", label: "Expense", icon: HiOutlineChartBar },
    { to: "/feedbacks", label: "Reviews", icon: HiOutlineStar },
    { to: "/report", label: "Report", icon: HiOutlinePencilAlt },
  ];

  return (
    <>
    
      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button
          className="text-white bg-green-700 p-2 rounded-md shadow-lg"
          onClick={toggleMobileMenu}
        >
          {isMobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-green-800 text-white shadow-md flex flex-col fixed top-0 left-0 z-30 h-full transition-all duration-300
        ${isCollapsed ? "w-14" : "w-60"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Logo/Header */}
        <div
          className={`flex items-center h-16 border-b border-green-300 ${
            isCollapsed ? "justify-center" : "justify-between px-4"
          }`}
        >
          {!isCollapsed ? (
            <span className="text-xl font-extrabold tracking-wide">
              <span style={{ color: "white", textShadow: "2px 7px 4px rgba(0, 0, 0, 0.5)" }}>
                GREEN
              </span>
              <span style={{ color: "#90ee90", textShadow: "2px 7px 4px rgba(0, 0, 0, 0.5)" }}>
                HEAVEN
              </span>
            </span>
          ) : (
            <img src="/images.png" alt="Logo" className="w-10 h-10" />
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-3 space-y-2">
          {navigationItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-md transition-all ${
                  isActive ? "bg-green-700 shadow-lg" : "hover:bg-green-800"
                } ${isCollapsed ? "justify-center" : ""}`
              }
              onClick={() => setIsMobileOpen(false)} // auto-close on mobile
            >
              <Icon className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm font-medium">{label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
