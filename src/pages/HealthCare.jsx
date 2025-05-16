import React from "react";
import Blog1 from "../../src/assets/about-us-intro-2.jpg";
import HealthCarePic from "../../src/assets/servicepicone.jpg";
import Post1 from "../../src/assets/post1.jpg";
import Post2 from "../../src/assets/post2.jpg";
import Post3 from "../../src/assets/post3.jpg";
import Post4 from "../../src/assets/post4.jpg";
import Post5 from "../../src/assets/post5.jpg";
import Post6 from "../../src/assets/post6.jpg";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineDateRange,
  MdOutlineMail,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import {
  FaArrowRight,
  FaRegHeart,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaClock,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";

const HealthCare = () => {
  return (
    <div>
      {/* first part image news */}
      <div
        className="w-full h-60 
                         bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url(${HealthCarePic})`,
           backgroundPosition: "center 38%", // Adjusts vertical position
          backgroundSize: "100%", // Makes image fit width while maintaining aspect ratio
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
                  News
                </span>
                <span className="text-[#1F2B6C] mx-2">/</span>
                <span
                  className="text-[#1F2B6C] text-sm sm:text-base md:text-lg 
                                      font-regular"
                >
                  Health Care
                </span>
              </div>
              <h1
                className="text-[#1F2B6C]  
                                  leading-tight text-center sm:text-left about-us "
              >
                A passion for putting patients first
              </h1>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-1">
                <div className="flex gap-1 items-center">
                  <span>
                    <MdOutlineDateRange size={20} className="text-[#1F2B6C]" />{" "}
                  </span>
                  <span className="text-xs sm:text-sm ">
                    Monday 05, September 2021
                  </span>
                </div>

                <div className="flex gap-1 items-center">
                  <span>
                    <RxPerson size={18} className="text-[#159EEC] " />{" "}
                  </span>
                  <span className="text-xs sm:text-sm">By Author</span>
                </div>

                <div className="flex items-center gap-1">
                  <MdOutlineRemoveRedEye
                    size={18}
                    className="text-[#526AE9] mt-[0.5px]"
                  />
                  <span className="text-xs sm:text-sm">68</span>
                </div>

                <div className="flex items-center gap-1">
                  <FaRegHeart size={14} className="text-[#E2315C] mt-[2px]" />
                  <span className="text-xs sm:text-sm">86</span>
                </div>
              </div>
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

      {/* second part news */}
      <div className="mx-4 px-5 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48">
        <div className="flex flex-col lg:flex-row my-8 sm:my-12 lg:my-16 gap-5">
          {/* first column  first page- main image */}
          <div className="flex flex-col  gap-8">
            {/* first column first page blog1 */}
            <div className=" flex flex-col gap-4">
              <div
                className="w-full h-[400px] bg-cover bg-top bg-no-repeat"
                style={{
                  backgroundImage: `url(${Blog1})`,
                }}
              ></div>

              <div className="max-w-[658px] mt-6">
                <p className="text-[#212124] text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque placerat scelerisque
                  tortor ornare ornare. Quisque placerat scelerisque tortor
                  ornare ornare Convallis felis vitae tortor augue. Velit
                  nascetur proin massa in. Consequat faucibus porttitor enim
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque placerat scelerisque
                  tortor ornare ornare. Quisque placerat scelerisque tortor
                  ornare ornare Convallis felis vitae tortor augue. Velit
                  nascetur proin massa in. Consequat faucibus porttitor enim
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque placerat scelerisque tortor ornare ornare. Quisque
                  placerat scelerisque tortor ornare ornare Convallis felis
                  vitae tortor augue. Velit nascetur proin massa in. Consequat
                  faucibus porttitor enim Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque placerat scelerisque
                  tortor ornare ornare. Quisque placerat scelerisque tortor
                  ornare ornare Convallis felis vitae tortor augue. Velit
                  nascetur proin massa in. Consequat faucibus porttitor enim et.
                </p>
              </div>
            </div>

            {/* pagination */}
            <div className="flex justify-between">
              <div>
                <Link
                  to="/news"
                  className="bg-[#BFD2F8] rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 
                                          transition-colors flex items-center justify-center 
                                          text-sm sm:text-base md:text-[16px] text-[#1F2B6C]
                                           whitespace-nowrap"
                >
                  <span className="mr-2">
                    <FaArrowLeft />
                  </span>
                  <span className="text-[#1F2B6C] font-[500]">
                    {" "}
                    Previous Article
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  to="/news"
                  className="bg-[#BFD2F8] rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 
                                          transition-colors flex items-center justify-center 
                                          text-sm sm:text-base md:text-[16px] text-[#1F2B6C]
                                           whitespace-nowrap"
                >
                  <span className="text-[#1F2B6C] font-[500]">
                    {" "}
                    Next Article
                  </span>
                  <span className="ml-2">
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* second column - sidebar */}
          <div className="w-full lg:flex-1  ">
            {/* Search form */}
            <div className="w-full relative">
              <form action="">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="w-full py-3 sm:py-[14px] px-4 sm:px-[20px] bg-[#1F2B6C] rounded-md text-[#FCFEFE] placeholder:text-[#FCFEFE]/70 pr-12 outline-none text-sm sm:text-base"
                />
                <CiSearch
                  size={24}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FCFEFE]"
                />
              </form>
            </div>

            {/* Recent Posts */}
            <div className="mt-6 border-gray-200 border-2 rounded-md p-4 shadow-gray-900">
              <p className="second-text text-[#1F2B6C] text-lg sm:text-xl font-semibold">
                Recent Posts
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col gap-1">
                {/* Post items */}
                {[Post1, Post2, Post3, Post4, Post5, Post6].map(
                  (post, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-cover bg-center bg-no-repeat rounded flex-shrink-0"
                        style={{
                          backgroundImage: `url(${post})`,
                        }}
                      ></div>
                      <div>
                        <p className="text-[#159EEC] text-xs sm:text-sm tracking-wide">
                          Monday 05, September 2021
                        </p>
                        <p className="text-[#212124] text-sm sm:text-base font-medium leading-tight mt-1">
                          This Article's Title goes Here, <br /> but not too
                          long.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Categories */}
            <div className="mt-8 border-gray-200 shadow-gray-900 border-2 rounded-md p-4">
              <p className="second-text text-[#1F2B6C] text-lg sm:text-xl font-semibold">
                Categories
              </p>
              <div className="mt-4 sm:mt-6 flex flex-col gap-3 px-6">
                {[
                  { name: "Surgery", count: 3 },
                  { name: "Health Care", count: 5 },
                  { name: "Medical", count: 8 },
                  { name: "Professional", count: 10 },
                ].map((category, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center py-2 px-4 rounded-lg
          ${
            category.name === "Health Care"
              ? "border-2 border-gray-200 shadow-gray-900"
              : ""
          }`}
                  >
                    <div className="text-[#212124] text-base sm:text-lg tracking-wide">
                      {category.name}
                    </div>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#159EEC] rounded-full flex items-center justify-center text-white text-sm">
                      {category.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact */}
      <div className="mx-4 px-5 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48">
        <div className="w-full my-14">
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

      <div className="w-full min-h-[427px] bg-[#1F2B6C] py-8 sm:py-12 lg:py-16 ">
        <div className="mx-4 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 px-5">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <h1 className="text-[#BFD2F8] font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 meddical-text-footer">
                MEDDICAL
              </h1>
              <p className="text-[#FCFEFE] text-sm sm:text-base lg:text-lg tracking-wide ">
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

export default HealthCare;
