
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import toast from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem("token");
    toast.success("Logout successfully")
    navigate("/login")
  }
  return (
    
    <div>
      <nav className="sticky top-[85px] z-30 bg-[#1F2B6C]  w-full">
      <div className="bg-[#1F2B6C] p-5  ">
        <div className=" mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48">
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
                {
                  localStorage.getItem("token") === "" || localStorage.getItem("token") === undefined ||
                  localStorage.getItem("token") === null ? 
                  <li>
                <NavLink 
                  to="/login" 
                  className={({ isActive }) => 
                    isActive ? "font-semibold text-[#BFD2F8] transition-colors" : "transition-colors hover:text-white"
                  }
                >
                  Login
                </NavLink>
              </li>
             
              :
               <li>
                 <button
                  onClick={handleLogout}
                  className="font-semibold text-red-600 cursor-pointer transition-colors hover:text-red-700"
                  
                >
                  Logout
                </button>
              </li>
                }
              
            </ul>

           <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 mt-6 sm:mt-0"> 
              <CiSearch 
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#FCFEFE]  transition-colors mr-4.5" 
              />
              
              <Link 
                to="/appointment" 
                className="bg-[#BFD2F8] rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 
                          transition-colors flex items-center justify-center 
                          text-sm sm:text-base md:text-[16px] text-[#1F2B6C]
                           whitespace-nowrap" 
              >
                Appointment
              </Link>
            </div>  

          </nav>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar













