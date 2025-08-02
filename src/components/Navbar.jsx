
// import React from 'react'
// import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { CiSearch } from "react-icons/ci";
// import { FaRegUserCircle } from "react-icons/fa";
// import { IoIosLogIn } from "react-icons/io";
// import toast from 'react-hot-toast';

// const Navbar = () => {
//   const navigate = useNavigate()
//   const handleLogout = (e)=>{
//     e.preventDefault();
//     localStorage.removeItem("token");
//     toast.success("Logout successfully")
//     navigate("/login")
//   }
//   return (
    
//     <div>
//       <nav className="sticky top-[85px] z-30 bg-[#1F2B6C]  w-full">
//       <div className="bg-[#1F2B6C] p-5  ">
//         <div className=" mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48">
//           <nav className="flex flex-col sm:flex-row justify-between items-center">
//             <ul className="flex flex-col sm:flex-row gap-6 sm:gap-6 text-[#FCFEFE] text-[18px] items-center">
//               <li>
//                 <NavLink 
//                   to="/" 
//                   className={({ isActive }) => 
//                     isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/about" 
//                   className={({ isActive }) => 
//                     isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
//                   }
//                 >
//                   About us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/services" 
//                   className={({ isActive }) => 
//                     isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
//                   }
//                 >
//                   Services
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/doctors" 
//                   className={({ isActive }) => 
//                     isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
//                   }
//                 >
//                   Doctors
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/news" 
//                   className={({ isActive }) => 
//                     isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
//                   }
//                 >
//                   News
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink 
//                   to="/contact" 
//                   className={({ isActive }) => 
//                     isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
//                   }
//                 >
//                   Contact
//                 </NavLink>
//                 </li>
              
//             </ul>

//            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 mt-6 sm:mt-0"> 
//               <CiSearch 
//                 className="w-6 h-6 sm:w-7 sm:h-7 text-[#FCFEFE]  transition-colors mr-4.5" 
//               />
              
//               <Link 
//                 to="/appointment" 
//                 className="bg-[#BFD2F8] rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 
//                           transition-colors flex items-center justify-center 
//                           text-sm sm:text-base md:text-[16px] text-[#1F2B6C]
//                            whitespace-nowrap" 
//               >
//                 Appointment
//               </Link>

//               {
//                   localStorage.getItem("token") === "" || localStorage.getItem("token") === undefined ||
//                   localStorage.getItem("token") === null ? 
                  
//                 <Link 
//                   to="/login" 
//                   className="
//                     font-semibold transition-colors cursor-pointer  text-[18px]"
                  
//                 >
//                   <IoIosLogIn size={35} color='#BFD2F8' />
//                 </Link>
              
             
//               :
               
//                  <button
//                   onClick={handleLogout}
//                   className="font-semibold  cursor-pointer  text-[18px] transition-colors "
                  
//                 >
//                   <FaRegUserCircle size={35} color='#BFD2F8'/>
//                 </button>
              
//                 }
//             </div>  

//           </nav>
//         </div>
//       </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar







import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import toast from 'react-hot-toast';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isAuthenticated = localStorage.getItem("token");
    

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        toast.success("Logout successfully");
        navigate("/login");
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close the dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div>
            <nav className="sticky top-[85px] z-30 bg-[#1F2B6C] w-full">
                <div className="bg-[#1F2B6C] p-5">
                    <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48">
                        <nav className="flex flex-col sm:flex-row justify-between items-center">
                            <ul className="flex flex-col sm:flex-row gap-6 sm:gap-6 text-[#FCFEFE] text-[18px] items-center">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) =>
                                            isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                                        }
                                    >
                                        About us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services"
                                        className={({ isActive }) =>
                                            isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/doctors"
                                        className={({ isActive }) =>
                                            isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                                        }
                                    >
                                        Doctors
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/news"
                                        className={({ isActive }) =>
                                            isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                                        }
                                    >
                                        News
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>

                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 mt-6 sm:mt-0">
                                <CiSearch
                                    className="w-6 h-6 sm:w-7 sm:h-7 text-[#FCFEFE] transition-colors mr-4.5"
                                />

                                <Link
                                    to="/appointment"
                                    className="bg-[#BFD2F8] rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 transition-colors flex items-center justify-center text-sm sm:text-base md:text-[16px] text-[#1F2B6C] whitespace-nowrap"
                                >
                                    Appointment
                                </Link>

                                {/* Login/Logout with Dropdown */}
                                {isAuthenticated ? (
                                    <div className="relative" ref={dropdownRef}>
                                        <button onClick={toggleDropdown} className="font-semibold cursor-pointer text-[18px]  transition-colors">
                                            <FaRegUserCircle size={35} color='#BFD2F8' className='mt-1'/>
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-30 rounded-md shadow-lg bg-[#1F2B6C] ring-1 ring-black ring-opacity-5">
                                                <div className="py-1 flex flex-col">
                                                    <span onClick={()=>navigate("/profile")} className=" cursor-pointer text-left px-4 py-2 text-md text-white  hover:bg-gray-700">
                                                      Profile 
                                                    </span>
                                                    <button
                                                        onClick={handleLogout}
                                                        className=" text-left cursor-pointer px-4 py-2 text-md text-white hover:bg-gray-700"
                                                    >
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="font-semibold transition-colors cursor-pointer text-[18px]"
                                    >
                                        <IoIosLogIn size={35} color='#BFD2F8' />
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;