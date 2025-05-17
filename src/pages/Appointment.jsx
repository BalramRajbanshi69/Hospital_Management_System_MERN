import React from "react";
import AppointmentPic from "../../src/assets/DoctorsAppointment.jpg";
import { IoIosArrowDown, IoLogoInstagram } from "react-icons/io";
import Map from "../../src/assets/map.jpg";
import { FaClock, FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div>
      <div
        className="w-full h-60 
                                     bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url(${AppointmentPic})`,
          backgroundPosition: "center 36%", // Adjusts vertical position
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
                  Appointment
                </span>
              </div>
              <h1
                className="text-[#1F2B6C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                                             font-bold tracking-wide leading-tight text-center sm:text-left about-us"
              >
                Book an Appointment
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

      {/* book an appointment */}

      <div className="mx-4 px-5 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 my-8 sm:my-12 lg:my-16">
        {/* dividing into two columns */}
        <div className="flex  flex-col lg:flex-row gap-6 lg:gap-8 ">
          {/* dividing first column into two rows */}
          <div className=" w-full lg:w-1/2">
            {/* first column first row */}
            <div className="flex flex-col gap-4 mb-6 lg:mb-8">
              <h2
                className="second-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                leading-tight  text-[#1F2B6C] font-bold"
              >
                Book an Appointment
              </h2>
              <p className="text-[#212124] text-sm sm:text-base tracking-wider text-center lg:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
            </div>
            {/* first column second row */}
            <div className="bg-[#1F2B6C] rounded-lg overflow-hidden mt-8">
              <form className="flex flex-col">
                {/* name and gender  */}
                <div className="flex flex-col sm:flex-row ">
                  <div className="w-full sm:w-1/2 ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                        text-sm sm:text-base"
                    />
                  </div>
                  <div className="relative w-full sm:w-1/2">
                    <select
                      name="gender"
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60 appearance-none cursor-pointer
                        text-sm sm:text-base"
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#1F2B6C]"
                      >
                        Gender
                      </option>
                      <option value="male" className="text-[#1F2B6C]">
                        Male
                      </option>
                      <option value="female" className="text-[#1F2B6C]">
                        Female
                      </option>
                      <option value="other" className="text-[#1F2B6C]">
                        Other
                      </option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <IoIosArrowDown size={20} />
                    </div>
                  </div>
                </div>

                {/* Email and Phone row */}
                <div className="flex flex-col sm:flex-row ">
                  <div className="w-full sm:w-1/2 ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                        text-sm sm:text-base"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <input
                      type="number"
                      name="Phone"
                      placeholder="Phone"
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60
                        text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Date and Time */}
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/2">
                    <input
                      type="text"
                      name="date"
                      placeholder="Date"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                        text-sm sm:text-base appearance-none cursor-pointer"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <IoIosArrowDown size={20} />
                    </div>
                  </div>
                  <div className="relative w-full sm:w-1/2">
                    <input
                      type="text"
                      name="time"
                      placeholder="Time"
                      onFocus={(e) => (e.target.type = "time")}
                      onBlur={(e) => (e.target.type = "text")}
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60
                        text-sm sm:text-base appearance-none cursor-pointer"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <IoIosArrowDown size={20} />
                    </div>
                  </div>
                </div>

                {/* Doctor and Department */}
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-1/2">
                    <select
                      name="doctor"
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                        text-sm sm:text-base appearance-none cursor-pointer"
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#1F2B6C]"
                      >
                        {" "}
                        Doctor
                      </option>
                      {[...Array(10)].map((_, i) => (
                        <option
                          key={i}
                          value={`doctor${i + 1}`}
                          className="text-[#1F2B6C]"
                        >
                          Doctor {i + 1}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <IoIosArrowDown size={20} />
                    </div>
                  </div>
                  <div className="relative w-full sm:w-1/2">
                    <select
                      name="department"
                      className="w-full p-4 text-white placeholder-white/80 bg-transparent
                        focus:outline-none focus:bg-white/5 transition-colors
                        border-b-[1px] border-white/60
                        text-sm sm:text-base appearance-none cursor-pointer"
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-[#1F2B6C]"
                      >
                        {" "}
                        Department
                      </option>
                      {[
                        "Neurology",
                        "Bones",
                        "Oncology",
                        "Otorhinolaryngology",
                        "Dermatology",
                        "Ophthalmology",
                        "Cardiovascular",
                        "Pulmonology",
                        "Renal Medicine",
                        "Gastroenterology",
                        "Urology",
                        "Gynaelogy",
                      ].map((dept) => (
                        <option
                          key={dept}
                          value={dept.toLowerCase()}
                          className="text-[#1F2B6C]"
                        >
                          {dept}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                      <IoIosArrowDown size={20} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-4  text-white placeholder-white/80 bg-transparent
                    focus:outline-none focus:bg-white/5 transition-colors
                    text-sm sm:text-base resize-none
                    h-[150px] sm:h-[200px] lg:h-[170px]"
                ></textarea>

                {/* Submit Button */}
                <div className="bg-[#BFD2F8] p-2 sm:p-3 ">
                  <button
                    type="submit"
                    className="w-full text-[#1F2B6C] 
      font-semibold  transition-all
      text-sm sm:text-base cursor-pointer uppercase tracking-wide "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* second column */}

          <div className="bg-[#1F2B6C] w-full rounded-lg overflow-hidden text-[#BFD2F8] lg:w-1/2 lg:mt-0 mt-6">
            <div className="flex flex-col h-full items-center">
              {" "}
              {/* Added items-center here */}
              <div className="py-8 sm:py-10 text-2xl sm:text-3xl lg:text-4xl text-center font-bold about-us w-full">
                Schedule hours
              </div>
              <div className="px-4 sm:px-8 lg:px-16 w-full">
                {" "}
                {/* Added w-full here */}
                <div className="grid grid-cols-3 gap-y-4 sm:gap-y-6 text-sm sm:text-base w-full">
                  {" "}
                  {/* Added w-full here */}
                  <div className="whitespace-wrap days-schedule text-left">
                    Monday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    09:00 AM - 07:00 PM
                  </div>
                  <div className="whitespace-nowrap days-schedule text-left">
                    Tuesday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    09:00 AM - 07:00 PM
                  </div>
                  <div className="whitespace-nowrap days-schedule text-left">
                    Wednesday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    09:00 AM - 07:00 PM
                  </div>
                  <div className="whitespace-nowrap days-schedule text-left">
                    Thursday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    09:00 AM - 07:00 PM
                  </div>
                  <div className="whitespace-nowrap days-schedule text-left">
                    Friday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    09:00 AM - 07:00 PM
                  </div>
                  <div className="whitespace-nowrap days-schedule text-left">
                    Saturday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    09:00 AM - 07:00 PM
                  </div>
                  <div className="whitespace-nowrap days-schedule text-left">
                    Sunday
                  </div>{" "}
                  {/* Added text-left */}
                  <div className="text-center text-[#BFD2F8] font-extrabold">
                    —
                  </div>
                  <div className="whitespace-nowrap text-[#FCFEFE] text-right">
                    Closed
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-auto pb-8 sm:pb-10 w-full px-4 sm:px-8 lg:px-16">
                {" "}
                {/* Added w-full and padding */}
                <div className="w-[350px] border-t-2 border-[#BFD2F8] mt-6"></div>
                <div className="w-fit pt-6">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-phone-volume text-4xl text-[#BFD2F8] mt-4"></i>
                    <div className="flex flex-col items-start leading-tight sm:mb-0 mb-8">
                      <div className="emergency tracking-wider">Emergency</div>
                      <div className="number-schedule tracking-wider">
                        (237) 681-812-255
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div
          className="w-full h-[300px] sm:h-[400px] lg:h-[450px] 
                  bg-cover bg-center bg-no-repeat my-8 sm:my-12 lg:my-16 rounded-lg"
          style={{ backgroundImage: `url(${Map})` }}
        ></div>

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
      <div className="w-full min-h-[427px] bg-[#1F2B6C] py-8 sm:py-12 lg:py-16 mt-10">
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

export default Appointment;
