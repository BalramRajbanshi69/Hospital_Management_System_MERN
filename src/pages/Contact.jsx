import React from "react";
import ContactUs from "../../src/assets/secondpictwo.jpg";
import News from "../../src/assets/news.jpg";
import Map from "../../src/assets/map.jpg";
import { FaClock, FaLocationArrow, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { MdOutlineMail, MdOutlineRemoveRedEye } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {

  const apiUrl = import.meta.env.VITE_APP_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

   // Add validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   // Add handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };


   // Add handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) {
      toast.error("Please login to send message");
      navigate("/login");
      return;
    }

    if (validateForm()) {
      setLoading(true);
      try {
        console.log("API url", apiUrl);
        
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify(formData)
        });
         const data = await response.json();

        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        } else {
          toast.error(data.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <div>
      {/* Heading part Contact us */}
      <div
        className="w-full h-60 
                               bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url(${ContactUs})`,
          backgroundPosition: "center 50%", // Adjusts vertical position
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
                  Contact
                </span>
              </div>
              <h1
                className="text-[#1F2B6C] text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                                       font-bold tracking-wide leading-tight text-center sm:text-left about-us"
              >
                Our Contacts
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

      
      {/* Main contact section container */}
      <div className="mx-4 px-5 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48">
        {/* Map section */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] 
          bg-cover bg-center bg-no-repeat my-8 sm:my-12 lg:my-16 rounded-lg"
          style={{ backgroundImage: `url(${Map})` }}
        ></div>
      
        {/* Contact form and info container */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 my-8 sm:my-12 lg:my-16">
          {/* Contact form section */}
          <div className="w-full lg:w-[586px] flex flex-col gap-4 sm:gap-6">
            {/* Heading */}
            <div className="text-center lg:text-left">
              <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest 
                text-[#159EEC] mb-2 uppercase">
                Get in touch
              </p>
              <h2 className="second-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                leading-tight tracking-wide text-[#1F2B6C] font-bold">
                Contact
              </h2>
            </div>
      
            {/* Form */}
            <div className="bg-[#1F2B6C] rounded-lg overflow-hidden">
              <form onSubmit={handleSubmit} className="flex flex-col">
                {/* Name and Email */}
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full p-4 text-white placeholder-white/80 bg-transparent
          focus:outline-none focus:bg-white/5 transition-colors
          border-b border-white/30 sm:border-r sm:border-white/30
          text-sm sm:text-base ${errors.name ? 'border-red-500' : ''}`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                          className={`w-full p-4 text-white placeholder-white/80 bg-transparent
          focus:outline-none focus:bg-white/5 transition-colors
          border-b border-white/30
          text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
      
                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
        focus:outline-none focus:bg-white/5 transition-colors
        border-b border-white/30
        text-sm sm:text-base ${errors.subject ? 'border-red-500' : ''}`}
                />
      
                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                      className={`w-full p-4 text-white placeholder-white/80 bg-transparent
        focus:outline-none focus:bg-white/5 transition-colors
        text-sm sm:text-base resize-none
        h-[150px] sm:h-[200px] lg:h-[235px] ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
      
                {/* Submit Button */}
                <div className="bg-[#BFD2F8] p-2 sm:p-3">
                  <button
                    type="submit"
                    className="w-full h-[40px] sm:h-[44px] text-[#1F2B6C] 
                      font-medium hover:font-semibold transition-all
                      text-sm sm:text-base cursor-pointer disabled:opacity-50"
                  >
                    {loading ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          </div>
      
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-6 
            flex-1 auto-rows-min ">
            {/* Emergency Card */}
            <div className="bg-[#BFD2F8] rounded-lg p-4 sm:p-6">
              <div className="flex flex-col items-start justify-center py-3 sm:py-9">
                <i className="fa-solid fa-phone-volume text-xl sm:text-2xl lg:text-3xl 
                  text-[#1F2B6C] mb-2 sm:mb-3"></i>
                <p className="text-[#1F2B6C] text-base sm:text-lg font-bold mb-1">
                  EMERGENCY
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base">
                  (237) 681-812-255
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base">
                  (237) 666-331-894
                </p>
              </div>
            </div>
      
            {/* Location Card */}
            <div className="bg-[#1F2B6C] rounded-lg p-4 sm:p-6">
              <div className="flex flex-col items-start justify-center py-3 sm:py-9">
                <FaClock className="text-xl sm:text-2xl lg:text-3xl text-[#BFD2F8] mb-2 sm:mb-3" />
                <p className="text-[#BFD2F8] text-base sm:text-lg font-bold mb-1">
                  LOCATION
                </p>
                <p className="text-[#BFD2F8] text-sm sm:text-base">
                  0123 Some place
                </p>
                <p className="text-[#BFD2F8] text-sm sm:text-base">
                  9876 Some country
                </p>
              </div>
            </div>
      
            {/* Email Card */}
            <div className="bg-[#BFD2F8] rounded-lg p-4 sm:p-6">
              <div className="flex flex-col items-start justify-center py-3 sm:py-9">
                <MdOutlineMail className="text-xl sm:text-2xl lg:text-3xl text-[#1F2B6C] mb-2 sm:mb-3" />
                <p className="text-[#1F2B6C] text-base sm:text-lg font-bold mb-1">
                  EMAIL
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base">
                  fildineeesoe@gmil.com
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base">
                  myebstudios@gmail.com
                </p>
              </div>
            </div>
      
            {/* Working Hours Card */}
            <div className="bg-[#BFD2F8] rounded-lg p-4 sm:p-6">
              <div className="flex flex-col items-start justify-center py-3 sm:py-9">
                <FaMapMarkerAlt className="text-xl sm:text-2xl lg:text-3xl text-[#1F2B6C] mb-2 sm:mb-3" />
                <p className="text-[#1F2B6C] text-base sm:text-lg font-bold mb-1">
                  WORKING HOURS
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base">
                  Mon-Sat 09:00-20:00
                </p>
                <p className="text-[#1F2B6C] text-sm sm:text-base">
                  Sunday Emergency only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


        {/* news */}
        <div className=" mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48  mt-30 px-5">
          <div className="flex flex-col items-center justify-center text-center mb-15">
            <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-1 uppercase">
              Better information, Better health
            </p>
            <h2 className="second-text sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide text-[#1F2B6C] font-bold ">
              News
            </h2>
          </div>
        


         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full  ">
                  {/* News Card 1 */}
                  <div className="flex flex-col sm:flex-row  shadow-sm overflow-hidden">
                    <div
                      className="w-full sm:w-[160px] h-[200px] sm:h-[154px] bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: `url(${News})` }}
                    ></div>
                    <div className="flex-1 p-4 sm:p-5">
                      <p className="text-[#159EEC] text-xs sm:text-[14px] tracking-wider font-[400] mb-2">
                        Monday 05, September 2021 | By Author
                      </p>
                      <h3 className="text-[#212124] text-base sm:text-[18px]  mb-3">
                        This Article's Title goes Here, <br /> but not too long.
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MdOutlineRemoveRedEye size={18} color="#526AE9" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegHeart size={14} color="#E2315C" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* News Card 2 */}
                  <div className="flex flex-col sm:flex-row overflow-hidden">
                    <div
                      className="w-full sm:w-[160px] h-[200px] sm:h-[154px] bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: `url(${News})` }}
                    ></div>
                    <div className="flex-1 p-4 sm:p-5">
                      <p className="text-[#159EEC] text-xs sm:text-[14px] tracking-wider font-[400] mb-2">
                        Monday 05, September 2021 | By Author
                      </p>
                      <h3 className="text-[#212124] text-base sm:text-[18px]  mb-3">
                        This Article's Title goes Here, <br /> but not too long.
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MdOutlineRemoveRedEye size={18} color="#526AE9" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegHeart size={14} color="#E2315C" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* News Card 3 */}
                  <div className="flex flex-col sm:flex-row overflow-hidden">
                    <div
                      className="w-full sm:w-[160px] h-[200px] sm:h-[154px] bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: `url(${News})` }}
                    ></div>
                    <div className="flex-1 p-4 sm:p-5">
                      <p className="text-[#159EEC] text-xs sm:text-[14px] tracking-wider font-[400] mb-2">
                        Monday 05, September 2021 | By Author
                      </p>
                      <h3 className="text-[#212124] text-base sm:text-[18px]  mb-3">
                        This Article's Title goes Here, <br /> but not too long.
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MdOutlineRemoveRedEye size={18} color="#526AE9" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegHeart size={14} color="#E2315C" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  {/* News Card 4 */}
                  <div className="flex flex-col sm:flex-row overflow-hidden">
                    <div
                      className="w-full sm:w-[160px] h-[200px] sm:h-[154px] bg-no-repeat bg-cover bg-center"
                      style={{ backgroundImage: `url(${News})` }}
                    ></div>
                    <div className="flex-1 p-4 sm:p-5">
                      <p className="text-[#159EEC] text-xs sm:text-[14px] tracking-wider font-[400] mb-2">
                        Monday 05, September 2021 | By Author
                      </p>
                      <h3 className="text-[#212124] text-base sm:text-[18px] mb-3">
                        This Article's Title goes Here,<br /> but not too long.
                      </h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MdOutlineRemoveRedEye size={18} color="#526AE9" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaRegHeart size={14} color="#E2315C" />
                          <span className="text-[#212124] text-xs sm:text-[14px]">
                            68
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                 {/* three dots pagination */}
        <div className="flex items-center justify-center text-center py-5 mt-6 gap-2">
          <div className="w-4 h-4 rounded-full bg-[#BFD2F8]"></div>
          <div className="w-4 h-4 rounded-full bg-[#1F2B6C]"></div>
          <div className="w-4 h-4 rounded-full bg-[#BFD2F8]"></div>
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

export default Contact;
