// import PropTypes from "prop-types";

// const Navbar = ({ setToken }) => {
//   const handleLogout = () => {
//     setToken("");
//   };

//   return (
//     <header className="bg-gradient-to-r from-green-800 to-green-800 text-white h-16 flex items-center justify-between px-6 shadow-md">
//       {/* Left Section: Title */}
//       <div>
//         {/* <span className="text-sm md:text-base font-medium">Welcome, Admin</span> */}
//         <span className="text-base md:text-lg font-bold">
//           <span
//             style={{
//               color: "#90ee90", // Light green color
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               fontSize: "1.5rem", // Increased font size
//               fontWeight: "bold",
//             }}
//           >
//             Welcome,
//           </span>{" "}
//           <span
//             style={{
//               color: "white",
//               textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//               fontSize: "1.5rem", // Increased font size
//               fontWeight: "bold",
//             }}
//           >
//             Admin
//           </span>
//         </span>
//       </div>

//       {/* Right Section: Welcome and Logout */}
//       <div className="flex items-center gap-4">
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg font-medium shadow-md transition-all transform hover:scale-105"
//         >
//           Logout
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// Navbar.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

import PropTypes from "prop-types";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    setToken("");
  };

  return (
    <header className="bg-gradient-to-r from-green-800 to-green-700 text-white h-16 flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 shadow-md">
      {/* Centered Title */}
      <div className="flex-grow text-center">
        <span className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
          <span
            className="text-[#90ee90]"
            style={{
              textShadow: "2px 7px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Greetings,
          </span>{" "}
          <span
            className="text-white"
            style={{
              textShadow: "2px 7px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Administrator
          </span>
        </span>
      </div>

      {/* Logout Button */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg font-medium shadow-md transition-all transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};
