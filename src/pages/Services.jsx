import React from "react";
import DoctorServiceOne from "../../src/assets/DoctorServiceOne.jpg";
import Servicefirst from "../../src/assets/servicefirst.png";
import { Link } from "react-router-dom";
import { FaArrowRight, FaClock, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const Services = () => {
  return (
    <div>
      {/* service introduction */}
      <div
        className="w-full h-60 
                         bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url(${DoctorServiceOne})`,
        }}
      >
        <div className="absolute inset-0 bg-white/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-5 h-full">
            <div
              className="flex flex-col h-full items-center sm:items-start
                                mx-4 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 
                                pt-16 sm:pt-24 md:pt-32 lg:pt-16 xl:pt-16"
            >
              <div className="flex items-center justify-center sm:justify-start w-full">
                <span
                  className="text-[#1F2B6C] text-sm sm:text-base md:text-lg 
                                      font-regular"
                >
                  Home
                </span>
                <span className="text-[#1F2B6C] mx-2">/</span>
                <span
                  className="text-[#1F2B6C] text-sm sm:text-base md:text-lg 
                                      font-regular"
                >
                  Services
                </span>
              </div>
              <h1
                className="text-[#1F2B6C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                                 font-bold tracking-wide leading-tight text-center sm:text-left about-us"
              >
                Our Services
              </h1>
            </div>
          </div>
        </div>

        {/* Three color combination */}
        <div className="flex absolute left-0 bottom-0 w-full">
          <div className="bg-[#bde0fe] w-[20%] h-1.5 sm:h-2 md:h-2"></div>
          <div className="bg-[#1F2B6C] w-[66%] h-1.5 sm:h-2 md:h-2"></div>
          <div className="bg-[#159EEC] w-[14%] h-1.5 sm:h-2 md:h-2"></div>
        </div>
      </div>



      {/* second section */}
      <div className=" mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 my-20 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
          {/* Doctor 1 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden ">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top relative"
              style={{ backgroundImage: `url(${Servicefirst})` }}
            >
              <GrServices
                size={60}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#BFD2F8]"
              />
              <div className="absolute inset-0 bg-[#1F2B6C]/80 "></div>
            </div>

            <div className="p-4 md:p-6 grid grid-cols-1  text-left">
              <p className="text-[#1F2B6C] text-[26px] font-[500]">
                Free Checkup
              </p>
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <Link
                to="/services/singleservice"
                className="inline-flex items-center space-x-2 text-[#159EEC] py-4"
              >
                <span className="text-base sm:text-md font-regular tracking-wider">
                  Learn More
                </span>
                <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
              </Link>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden relative">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Servicefirst})` }}
            ></div>

            <div className="p-4 md:p-6 grid grid-cols-1  text-left">
              <p className="text-[#1F2B6C] text-[26px] font-[500]">
                Free Checkup
              </p>
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <Link
                to="/services/singleservice"
                className="inline-flex items-center space-x-2 text-[#159EEC] py-4"
              >
                <span className="text-base sm:text-md font-regular tracking-wider">
                  Learn More
                </span>
                <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
              </Link>
            </div>

            <div className="w-[80px] h-[80px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] bg-[#1F2B6C] rounded-full absolute right-6 top-76">
              <GrServices
                size={35}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#BFD2F8] sm:text-[30px] md:text-[35px]"
              />
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden relative">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Servicefirst})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-left">
              <p className="text-[#1F2B6C] text-[26px] font-[500]">
                Free Checkup
              </p>
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <Link
                to="/services/singleservice"
                className="inline-flex items-center space-x-2 text-[#159EEC] py-4"
              >
                <span className="text-base sm:text-md font-regular tracking-wider">
                  Learn More
                </span>
                <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
              </Link>
            </div>

            <div className="w-[80px] h-[80px] bg-[#1F2B6C] rounded-full right-6 top-76 absolute">
              <GrServices
                size={35}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#BFD2F8]"
              />
            </div>
          </div>

          {/* doctor4 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden relative">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Servicefirst})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-left">
              <p className="text-[#1F2B6C] text-[26px] font-[500]">
                Free Checkup
              </p>
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <Link
                to="/services/singleservice"
                className="inline-flex items-center space-x-2 text-[#159EEC] py-4"
              >
                <span className="text-base sm:text-md font-regular tracking-wider">
                  Learn More
                </span>
                <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
              </Link>
            </div>

            <div className="w-[80px] h-[80px] bg-[#1F2B6C] rounded-full right-6 top-76 absolute">
              <GrServices
                size={35}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#BFD2F8]"
              />
            </div>
          </div>

          {/* doctor5 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden relative">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Servicefirst})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-left">
              <p className="text-[#1F2B6C] text-[26px] font-[500]">
                Free Checkup
              </p>
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <Link
                to="/services/singleservice"
                className="inline-flex items-center space-x-2 text-[#159EEC] py-4"
              >
                <span className="text-base sm:text-md font-regular tracking-wider">
                  Learn More
                </span>
                <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
              </Link>
            </div>

            <div className="w-[80px] h-[80px] bg-[#1F2B6C] rounded-full right-6 top-76 absolute">
              <GrServices
                size={35}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#BFD2F8]"
              />
            </div>
          </div>

          {/* doctor6 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden relative">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Servicefirst})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-left">
              <p className="text-[#1F2B6C] text-[26px] font-[500]">
                Free Checkup
              </p>
              <p className="tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>
              <Link
                to="/services/singleservice"
                className="inline-flex items-center space-x-2 text-[#159EEC] py-4"
              >
                <span className="text-base sm:text-md font-regular tracking-wider">
                  Learn More
                </span>
                <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
              </Link>
            </div>

            <div className="w-[80px] h-[80px] bg-[#1F2B6C] rounded-full right-6 top-76 absolute">
              <GrServices
                size={35}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#BFD2F8]"
              />
            </div>
          </div>
        </div>


        {/* contact */}

        <div className="w-full ">
          <div className="flex flex-col items-center justify-center text-center mb-18 sm:mb-12 lg:mb-16 my-22">
            <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-2 uppercase">
              Get in touch
            </p>
            <h2 className="second-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide text-[#1F2B6C] font-bold">
              Contact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
            <div className="bg-[#BFD2F8] rounded-md p-4 sm:p-6 h-auto">
              <div className="flex flex-col items-left justify-center py-4 sm:py-6">
                <i className="fa-solid fa-phone-volume text-2xl sm:text-3xl text-[#1F2B6C] mb-3"></i>
                <p className="text-[#1F2B6C] text-base sm:text-lg font-bold mb-1">
                  EMERGENCY
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base ">
                  (237) 681-812-255
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base ">
                  (237) 666-331-894
                </p>
              </div>
            </div>

            <div className="bg-[#1F2B6C] rounded-md p-4 sm:p-6 h-auto">
              <div className="flex flex-col items-left justify-center py-4 sm:py-6">
                <FaClock className="text-2xl sm:text-3xl text-[#BFD2F8] mb-3" />
                <p className="text-[#BFD2F8] text-base sm:text-lg font-bold mb-1">
                  LOCATION
                </p>
                <p className="text-[#BFD2F8] text-sm sm:text-base ">
                  0123 Some place
                </p>
                <p className="text-[#BFD2F8] text-sm sm:text-base ">
                  9876 Some country
                </p>
              </div>
            </div>

            <div className="bg-[#BFD2F8] rounded-md p-4 sm:p-6 h-auto">
              <div className="flex flex-col items-left justify-center py-4 sm:py-6">
                <MdOutlineMail className="text-2xl sm:text-3xl text-[#1F2B6C] mb-3" />
                <p className="text-[#1F2B6C] text-base sm:text-lg font-bold mb-1">
                  EMAIL
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base ">
                  fildineeesoe@gmil.com
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base ">
                  myebstudios@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-[#BFD2F8] rounded-md p-4 sm:p-6 h-auto">
              <div className="flex flex-col items-left justify-center py-4 sm:py-6">
                <FaMapMarkerAlt className="text-2xl sm:text-3xl text-[#1F2B6C] mb-3" />
                <p className="text-[#1F2B6C] text-base sm:text-lg font-bold mb-1">
                  WORKING HOURS
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base ">
                  Mon-Sat 09:00-20:00
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base ">
                  Sunday Emergency only
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>


      {/* footer */}
      <div className="w-full min-h-[427px] bg-[#1F2B6C] py-8 sm:py-12 lg:py-16">
              <div className="mx-4 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 px-5">
                {/* Main Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Brand Section */}
                  <div className="lg:col-span-1 text-center sm:text-left">
                    <h1 className="text-[#BFD2F8] font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4  meddical-text-footer">
                      MEDDICAL
                    </h1>
                    <p className="text-[#FCFEFE] text-sm sm:text-base lg:text-lg tracking-wide">
                      Leading the Way in Medical Excellence, Trusted Care.
                    </p>
                  </div>
      
                  {/* Important Links */}
                  <div className="mt-4 sm:mt-0 text-center sm:text-left">
                    <h2 className="text-[#FCFEFE] text-base sm:text-lg font-medium mb-3 sm:mb-4">
                      Important Links
                    </h2>
                    <ul className="text-[#FCFEFE] space-y-2">
                      <li className="text-sm sm:text-base hover:text-[#BFD2F8] transition-colors">
                        <Link to="/appointment">Appointment</Link>
                      </li>
                      <li className="text-sm sm:text-base hover:text-[#BFD2F8] transition-colors">
                        <Link to="/doctors">Doctors</Link>
                      </li>
                      <li className="text-sm sm:text-base hover:text-[#BFD2F8] transition-colors">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="text-sm sm:text-base hover:text-[#BFD2F8] transition-colors">
                        <Link to="/about">About Us</Link>
                      </li>
                    </ul>
                  </div>
      
                  {/* Contact Us */}
                  <div className="mt-4 sm:mt-0 text-center sm:text-left">
                    <h2 className="text-[#FCFEFE] text-base sm:text-lg font-medium mb-3 sm:mb-4">
                      Contact Us
                    </h2>
                    <ul className="text-[#FCFEFE] space-y-2">
                      <li className="text-sm sm:text-base">
                        Call: (237) 681-812-255
                      </li>
                      <li className="text-sm sm:text-base">
                        Email: fildineesoe@gmail.com
                      </li>
                      <li className="text-sm sm:text-base">
                        Address: 0123 Some place
                      </li>
                      <li className="text-sm sm:text-base">Some country</li>
                    </ul>
                  </div>
      
                  {/* Newsletter */}
                  <div className="mt-6 sm:mt-0 text-center sm:text-left">
                    <h2 className="text-[#FCFEFE] text-base sm:text-lg font-medium mb-3 sm:mb-4">
                      Newsletter
                    </h2>
                    <form className="w-full max-w-[300px] mx-auto sm:max-w-none sm:mx-0">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full p-2.5 sm:p-3 pr-10 bg-[#BFD2F8] text-[#1F2B6C] rounded-md
                                         placeholder:text-[#1F2B6C]/70 focus:outline-none
                                         focus:ring-2 focus:ring-[#159EEC] transition-all
                                         text-sm sm:text-base"
                        />
                        <div
                          className="absolute right-3 top-1/2 -translate-y-1/2 
                                         text-[#1F2B6C]  transition-colors
                                         cursor-pointer"
                        >
                          <FaLocationArrow size={16} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
      
                {/* Divider */}
                <div className="w-full h-[1px] bg-[#BFD2F8] my-6 sm:my-8 lg:my-12"></div>
      
                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                  <p className="text-[#FCFEFE] text-xs sm:text-sm lg:text-base text-center w-full sm:w-auto sm:text-left">
                    © 2025 Hospital's name All Rights Reserved by PNTEC-LTD
                  </p>
      
                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#BFD2F8] flex items-center justify-center cursor-pointer  transition-colors">
                      <TiSocialLinkedin
                        color="#1F2B6C"
                        size={18}
                        className="transform scale-90"
                      />
                    </span>
                    <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#BFD2F8] flex items-center justify-center cursor-pointer transition-colors">
                      <TiSocialFacebook
                        color="#1F2B6C"
                        size={18}
                        className="transform scale-90"
                      />
                    </span>
                    <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#BFD2F8] flex items-center justify-center cursor-pointer  transition-colors">
                      <IoLogoInstagram
                        color="#1F2B6C"
                        size={16}
                        className="transform scale-90"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>



    </div>
  );
};

export default Services;
