// // src/components/NavBar.js
// import React, { useContext, useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdOutlineDashboard } from "react-icons/md";
// import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
// import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
// import { Link, Outlet } from "react-router-dom";
// import { FaSignOutAlt } from "react-icons/fa";
// import { AuthContext } from "../AuthContex/AuthProvider";
// import Swal from "sweetalert2";
// import useAdmin from "../hooks/useAdmin";
// import logo from "../assets/logo.png";

// const NavBar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch((error) => console.log(error));
//     Swal.fire("Thanks!", "Sign out successfully", "success");
//   };
//   const menus = [
//     { name: "Profile", link: "/account", icon: AiOutlineUser },

//     {
//       name: "Bank Balance Report",
//       link: "/balanceReport",
//       icon: MdOutlineDashboard,
//     },
//     isAdmin
//       ? {
//           name: "Bank Wise Balance",
//           link: "/balanceEntry",
//           icon: FiMessageSquare,
//         }
//       : undefined,

//     user
//       ? {
//           name: "Sign Out",
//           icon: FaSignOutAlt,
//           onClick: () => handleLogOut(),
//           link: "/",
//         }
//       : undefined,
//   ].filter((menu) => menu !== undefined); // Filter out undefined values;
//   const [open, setOpen] = useState(true);

//   return (
//     <section className="flex gap-6">
//       <div
//         className={`bg-gray-800 min-h-screen ${
//           open ? "w-72" : "w-16"
//         } duration-500 text-gray-100 px-4`}
//       >
//         <div className="py-3 flex  ">
//           {open && (
//             <div className="py-3 w-full flex justify-between">
//               <div className="w-full ">
//                 <img
//                   className="ms-5 sm:h-10 sm:w-40 hidden sm:block "
//                   src={logo}
//                   alt="website logo"
//                 />
//                 <p className="hidden sm:block tracking-wide font-bold text-xl text-center">
//                   <br />
//                   <span className="text-lime-500">Daily</span>
//                   <span className="text-sky-500"> Bank</span>
//                   <span className="text-pink-500"> Balance</span>
//                 </p>
//               </div>

//               <HiMenuAlt3
//                 size={26}
//                 className="cursor-pointer "
//                 onClick={() => setOpen(!open)}
//               />
//             </div>
//           )}
//           {!open && (
//             <HiMenuAlt3
//               size={26}
//               className="cursor-pointer "
//               onClick={() => setOpen(!open)}
//             />
//           )}
//         </div>

//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus?.map((menu, i) => (
//             <Link
//               to={menu?.link}
//               onClick={menu.name === "Sign Out" && menu.onClick}
//               key={i}
//               className={` ${
//                 menu?.margin && "mt-5"
//               } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md border-collapse`}
//             >
//               <div>{React.createElement(menu?.icon, { size: "20" })}</div>
//               <h2
//                 style={{
//                   transitionDelay: `${i + 3}00ms`,
//                 }}
//                 className={`whitespace-pre duration-500 ${
//                   !open && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {menu?.name}
//               </h2>
//               <h2
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
//               >
//                 {menu?.name}
//               </h2>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <div className="flex-grow">
//         <Outlet></Outlet>
//       </div>
//     </section>
//   );
// };

// export default NavBar;











import React, { useContext, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi"; // Added this line
import { FaSignOutAlt } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContex/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import logo from "../assets/logo.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const location = useLocation();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Thanks!", "Sign out successfully", "success");
      })
      .catch((error) => console.log(error));
  };

  const menus = [
    { name: "Profile", link: "/account", icon: AiOutlineUser },
    { name: "Bank Balance Report", link: "/balanceReport", icon: MdOutlineDashboard },
    isAdmin ? { name: "Bank Wise Balance", link: "/balanceEntry", icon: FiMessageSquare } : undefined,
    user ? { name: "Sign Out", icon: FaSignOutAlt, onClick: handleLogOut, link: "/" } : undefined,
  ].filter((menu) => menu !== undefined); // Filter out undefined values

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-gray-800 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex">
          {open && (
            <div className="py-3 w-full flex justify-between">
              <div className="w-full">
                <img
                  className="ms-5 sm:h-10 sm:w-40 hidden sm:block"
                  src={logo}
                  alt="website logo"
                />
                <p className="hidden sm:block tracking-wide font-bold text-xl text-center">
                  <br />
                  <span className="text-lime-500">Daily</span>
                  <span className="text-sky-500"> Bank</span>
                  <span className="text-pink-500"> Balance</span>
                </p>
              </div>
              <HiMenuAlt3
                size={26}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
          {!open && (
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              onClick={menu.name === "Sign Out" ? menu.onClick : undefined}
              key={i}
              className={`${
                menu.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md border-collapse ${
                location.pathname === menu.link ? "bg-indigo-500" : "hover:bg-gray-800"
              }`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </section>
  );
};

export default NavBar;

