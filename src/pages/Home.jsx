import React, { useState } from "react";
import HomeDoctor from "../../src/assets/homedoctor.jpg";
import SecondPic from "../../src/assets/secondpictwo.jpg";
import ServicePicOne from "../../src/assets/servicefirst.png";
import ServicePicTwo from "../../src/assets/servicesecond.jpg";
import DoctorAppointment from "../../src/assets/DoctorsAppointment.jpg";
import Doctor1 from "../../src/assets/doctor1.jpg";
import Doctor2 from "../../src/assets/doctor2.jpg";
import Doctor3 from "../../src/assets/doctor3.jpg";
import News from "../../src/assets/news.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaHeartbeat, FaDna } from "react-icons/fa";
import { TbCheckupList } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";
import { TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { doctorAppointment } from "../store/doctorAppointmentSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    date: "",
    time: "",
    doctor: "",
    department: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const timeSlots = [
    "9:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "1:00PM",
    "2:00PM",
    "3:00PM",
    "4:00PM",
    "5:00PM",
    "6:00PM",
    "7:00PM",
  ];

  const validateForm = () => {
    const newErrors = {};
    // Name validation - at least 3 characters
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address with .com domain";
    }

    // Phone validation - must start with 98 and be 10 digits
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(98|97)\d{8}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must start with 98 or 97 and be 10 digits";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.doctor) newErrors.doctor = "Doctor selection is required";
    if (!formData.department)
      newErrors.department = "Department selection is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update the date input to show day of week
  const formatDateWithDay = (dateString) => {
    if (!dateString) return "";
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    const dayName = days[date.getDay()];
    return `${dateString} (${dayName})`;
  };

  // Add this function to check if selected date is Sunday
  const isSunday = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() === 0; // 0 represents Sunday
  };

  // Modify the handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [name]: value,
      };

      // If date is changed and it's Sunday, clear the time field
      if (name === "date" && isSunday(value)) {
        newFormData.time = "Closed";
      } else if (name === "date" && prev.time === "Closed") {
        // If changing from Sunday to another day, reset time
        newFormData.time = "";
      }

      return newFormData;
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!localStorage.getItem("token")) {
  //     toast.error("Please login to book an appointment");
  //     navigate("/login");
  //     return;
  //   }

  //   // Check if selected date is Sunday
  //   if (isSunday(formData.date)) {
  //     toast.error("Booking Closed on Sunday");
  //     return;
  //   }

  //   // Continue with form validation and submission if not Sunday
  //   if (validateForm()) {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(
  //         `${apiUrl}/api/appointment/book-appointments`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "auth-token": localStorage.getItem("token"),
  //           },
  //           body: JSON.stringify(formData),
  //         }
  //       );

  //       const data = await response.json();

  //       if (data.success) {
  //         toast.success("Appointment booked successfully!");
  //         setFormData({
  //           name: "",
  //           email: "",
  //           phone: "",
  //           gender: "",
  //           date: "",
  //           time: "",
  //           doctor: "",
  //           department: "",
  //           message: "",
  //         });
  //       } else {
  //         toast.error(data.message || "Failed to book appointment");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       toast.error("An unexpected error occurred");
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     toast.error("Please fix the errors in the form");
  //   }
  // };


  const handleSubmit = async (e) => {
        e.preventDefault();
  
        if (!localStorage.getItem("token")) {
          toast.error("Please login to book an appointment");
          navigate("/login");
          return;
        }
  
        // Check if selected date is Sunday
        if (isSunday(formData.date)) {
          toast.error("Booking Closed on Sunday");
          return;
        }
  
        // Continue with form validation and submission if not Sunday
        if (validateForm()) {
            setLoading(true);
            try {
                await dispatch(doctorAppointment(formData)) 
                toast.success("Appointment successful");
                navigate("/");
                 setFormData({
            name: "",
            email: "",
            phone: "",
            gender: "",
            date: "",
            time: "",
            doctor: "",
            department: "",
            message: "",
          });
            } catch (error) {
                console.error("Error:", error);
                toast.error(error.message || "Failed to appointment");
            } finally {
                setLoading(false);
            }
        } else {
            toast.error("Please fix the errors in the form");
        }
      };
  return (
    <div>
      {/* first part */}
       <div
        className=" bg-cover  bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${HomeDoctor})` }}
      >
        <div className=" bg-opacity-20 min-h-screen flex items-center justify-center ">
          <div className="container mx-35 ">
            <div className=" px-4 sm:px-6 lg:px-8 py-8 md:py-16 ">
              <div className="flex flex-col md:flex-row items-center p-6 md:p-10 ">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
                  <p className=" font-bold text-sm md:text-base uppercase tracking-widest mb-2 text-[#159EEC]">
                    CARING FOR LIFE
                  </p>
                  <h1 className=" mb-6 leading-tight tracking-wide  text-[#1F2B6C] leading-text ">
                    Leading the Way <br className="hidden md:block " />
                    in Medical Excellence
                  </h1>

                  <Link
                    to="/services"
                    className="bg-[#BFD2F8] rounded-full px-4 sm:px-6 md:px-8 py-2.5 
                          transition-colors  items-center justify-center 
                          text-sm sm:text-base md:text-[16px] whitespace-nowrap cursor-pointer text-[#1F2B6C] inline-flex "
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

            
      

      {/* book appointment */}
      {/* <div className="absolute top-195  w-full h-full  mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 px-5">
        <div className="flex  justify-start gap-4 sm:gap-6 md:gap-8 flex-wrap ">
          <div className="flex justify-between gap-6 mt-10">
            <div className="bg-[#1F2B6C] text-white rounded-md p-5  flex  items-center justify-between  shadow-lg  w-[350px]   gap-6">
              <h2 className=" font-regular text-[#FCFEFE]">
                Book an Appointment
              </h2>
              <FaCalendarAlt className="text-4xl text-[#BFD2F8]" size={55} />
            </div>
            <div className=" text-center  bg-[#BFD2F8] text-blue-900 rounded-md p-5 flex  items-center justify-between  shadow-lg  w-[350px] gap-6">
              <h2 className="font-regular text-[#1F2B6C]">
                Book an Appointment
              </h2>
              <FaUsers className="text-4xl text-[#1F2B6C]" size={55} />
            </div>
            <div className="   text-center gap-6 bg-[#159EEC] text-white rounded-md p-5  flex  items-center  justify-between shadow-lg  w-[350px] ">
              <h2 className="font-regular text-[#FCFEFE]">
                Book an Appointment
              </h2>
              <GiBanknote className="text-4xl text-[#FCFEFE]" size={55} />
            </div>
          </div>
        </div>
      </div>   */}

      {/* second part welcome to meddical */}
      <div className=" mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 px-5">
        <div className="flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20">
          <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-2 ">
            WELCOME TO MEDDICAL
          </p>
          <h2 className="second-text sm:text-3xl md:text-4xl lg:text-5xl  text-[#1F2B6C]  mb-4">
            A Great Place to Receive Care
          </h2>
          <div className="max-w-xl mx-auto mb-7">
            <p className="text-base sm:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
          </div>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 text-[#159EEC] mb-12 "
          >
            <span className="text-base sm:text-md font-regular tracking-wider">
              Learn More
            </span>
            <FaArrowRight className="w-4 h-4 text-[#1F2B6C] mt-0.5" />
          </Link>

          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat relative overflow-hidden "
            style={{
              backgroundImage: `url(${SecondPic})`,
            }}
          >
            <div className="flex absolute left-0 bottom-0 w-full">
              <div className="bg-[#bde0fe] w-[20%] h-2"></div>
              <div className="bg-[#1F2B6C] w-[66%] h-2"></div>
              <div className="bg-[#159EEC] w-[14%] h-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping boxes - positioned absolutely between sections */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 sm:px-6 z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-[#1F2B6C] text-white rounded-md p-4 sm:p-8 flex items-center justify-between shadow-lg h-full">
          <h2 className="font-regular text-[#FCFEFE] text-sm sm:text-base">Book an Appointment</h2>
          <FaCalendarAlt className="text-3xl sm:text-4xl text-[#BFD2F8] flex-shrink-0" />
        </div>
        <div className="bg-[#BFD2F8] text-blue-900 rounded-md p-4 sm:p-5 flex items-center justify-between shadow-lg h-full">
          <h2 className="font-regular text-[#1F2B6C] text-sm sm:text-base">Find a Doctor</h2>
          <FaUsers className="text-3xl sm:text-4xl text-[#1F2B6C] flex-shrink-0" />
        </div>
        <div className="bg-[#159EEC] text-white rounded-md p-4 sm:p-5 flex items-center justify-between shadow-lg h-full">
          <h2 className="font-regular text-[#FCFEFE] text-sm sm:text-base">Payment Options</h2>
          <GiBanknote className="text-3xl sm:text-4xl text-[#FCFEFE] flex-shrink-0" />
        </div>
      </div>
    </div>
  </div> */}

      {/* third part  service page*/}
      <div className=" mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 px-5">
        <div className="flex flex-col items-center justify-center text-center ">
          <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-1">
            CARE YOU CAN BELEIVE IN
          </p>
          <h2 className="second-text sm:text-3xl md:text-4xl lg:text-5xl  text-[#1F2B6C] font-bold mb-4">
            Our Services
          </h2>
        </div>

        {/* third part services */}

        <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-0 my-12">
          <div className="w-full lg:w-[157px] h-[484px] border border-gray-300 rounded-md shadow-md">
            <div className="flex flex-col justify-start items-center text-center py-6">
              <div className="flex justify-center mb-2">
                <TbCheckupList size={35} color="#159EEC" />
              </div>
              <div>
                <p className="leading-tight text-sm md:text-base text-[#212124] text-[16px]">
                  Free Checkup
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start text-center py-6 bg-[#1F2B6C]">
              <div className="flex justify-center items-center gap-4 mb-2">
                <FaHeartbeat size={35} color="#BFD2F8" />
              </div>
              <div className="text-[#BFD2F8]">
                <p className="leading-tight text-sm md:text-base">Cardiogram</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start text-center py-6">
              <div className="flex justify-center items-center gap-4 mb-2">
                <FaDna size={35} color="#159EEC" />
              </div>
              <div>
                <p className="leading-tight text-sm md:text-base text-[#212124]">
                  Dna Testing
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-start text-center py-6">
              <div className="flex justify-center items-center gap-4 mb-2">
                <MdOutlineBloodtype size={40} color="#159EEC" />
              </div>
              <div>
                <p className="leading-tight text-sm md:text-base text-[#212124]">
                  Blood Bank
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center text-center bg-[#0d1258] py-5 rounded-bl-md rounded-br-md">
              <div>
                <Link
                  to="/about"
                  className="tracking-wider text-white text-sm md:text-base"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[60%] p-4 md:p-8">
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold ">
              <p>A passion for putting patient first.</p>
            </div>

            <div className="mb-6 ">
              <div className="flex flex-col sm:flex-row w-full gap-y-4 sm:gap-y-0 ">
                <div className="flex gap-4 mt-2 sm:mt-6 w-full sm:w-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#159EEC] mt-1.5"></div>
                  <div className="text-[18px] tracking-wider">
                    A Passion for Healing
                  </div>
                </div>
                <div className="flex gap-3 mt-2 sm:mt-6 w-full sm:w-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#159EEC] mt-1.5"></div>
                  <div className="text-[18px] tracking-wider">5-Star Care</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full gap-y-4 sm:gap-y-0 ">
                <div className="flex gap-4 mt-2 sm:mt-6 w-full sm:w-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#159EEC] mt-1.5"></div>
                  <div className="text-[18px] tracking-wider">All our best</div>
                </div>
                <div className="flex gap-3 mt-2 sm:mt-6 w-full sm:w-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#159EEC] mt-1.5"></div>
                  <div className="text-[18px] tracking-wider">
                    Believe in Us
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row w-full gap-y-4 sm:gap-y-0">
                <div className="flex gap-4 mt-2 sm:mt-6 w-full sm:w-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#159EEC] mt-1.5"></div>
                  <div className="text-[18px] tracking-wider">
                    A Legacy of Excellence
                  </div>
                </div>
                <div className="flex gap-3 mt-2 sm:mt-6 w-full sm:w-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#159EEC] mt-1.5"></div>
                  <div className="text-[18px] tracking-wider">
                    Always Caring
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className=" text-md md:text-base tracking-wide text-[#212124] text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
            </div>

            <div>
              <p className="text-md md:text-base tracking-wide  text-[#212124] text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque. Convallis felis vitae tortor augue. Velit
                nascetur proin massa in. Throught the different stages of life.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[26%] space-y-4">
            <div
              className="w-full h-48 md:h-63 bg-cover bg-center bg-no-repeat relative overflow-hidden "
              style={{ backgroundImage: `url(${ServicePicOne})` }}
            >
              <div className="flex absolute left-0 bottom-0 w-full">
                <div className="bg-[#BFD2F8] w-[20%] h-2"></div>
                <div className="bg-[#1F2B6C] w-[66%] h-2"></div>
                <div className="bg-[#159EEC] w-[14%] h-2"></div>
              </div>
            </div>

            <div
              className="w-full h-48 md:h-63 bg-cover bg-center bg-no-repeat relative overflow-hidden "
              style={{ backgroundImage: `url(${ServicePicTwo})` }}
            >
              <div className="flex absolute left-0 bottom-0 w-full">
                <div className="bg-[#BFD2F8] w-[20%] h-2"></div>
                <div className="bg-[#1F2B6C] w-[66%] h-2"></div>
                <div className="bg-[#159EEC] w-[14%] h-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth part specialities page */}
      <div className=" mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 my-20 px-5">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-1">
            ALWAYS CARING
          </p>
          <h2 className="second-text sm:text-3xl md:text-4xl lg:text-5xl leading-tight  text-[#1F2B6C] font-bold mb-4">
            Our Specialities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
          {/* Neurology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Neurology
            </p>
          </div>

          {/* Bones */}
          <div className="flex flex-col items-center justify-center  bg-indigo-900 rounded-md p-8 md:p-16  md:border-b-0 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#BFD2F8" />
            <p className="text-center text-sm md:text-base font-regular text-[#BFD2F8] mt-1">
              Bones
            </p>
          </div>

          {/* Oncology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200 ">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Oncology
            </p>
          </div>

          {/* Otorhinolaryngology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200 ">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Otorhinolaryngology
            </p>
          </div>

          {/* Ophthalmology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Ophthalmology
            </p>
          </div>

          {/* Cardiovascular */}
          <div className="flex flex-col items-center justify-center  p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Cardiovascular
            </p>
          </div>

          {/* Pulmonology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Pulmonology
            </p>
          </div>

          {/* Renal Medicine */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-0 border-r lg:border-r border-gray-200 ">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Renal Medicine
            </p>
          </div>

          {/* Gastroenterology */}
          <div className="flex flex-col items-center justify-center  p-8 md:p-16 border md:border-b-1 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Gastroenterology
            </p>
          </div>

          {/* Urology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-1 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Urology
            </p>
          </div>

          {/* Dermatology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-1 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Dermatology
            </p>
          </div>

          {/* Gynaecology */}
          <div className="flex flex-col items-center justify-center p-8 md:p-16 border md:border-b-1 border-r lg:border-r border-gray-200">
            <FaHeartbeat size={50} color="#159EEC" />
            <p className="text-center text-sm md:text-base font-regular text-[#212124] mt-1">
              Gynaecology
            </p>
          </div>
        </div>
      </div>

      {/* fifth part Doctors Appointment */}
      <div className="md:mt-20 ">
        <div
          className="relative bg-cover bg-center bg-no-repeat md:h-[70vh] lg:h-[80vh] xl:h-[90vh] "
          style={{
            backgroundImage: `url(${DoctorAppointment})`,
          }}
        >
          <div className="absolute inset-0 bg-white/40 -backdrop-blur-sm"></div>
          <div className="relative z-10 mx-4 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 h-full flex items-center px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center h-full text-center md:text-left ">
                <div className="max-w-md mx-auto md:mx-0 mt-10">
                  <p className="font-bold text-sm sm:text-base md:text-lg tracking-wider text-[#159EEC] mb-2 appointment-text ">
                    Book an Appointment
                  </p>
                  <p className="mb-6 text-[16px] text-[#212124] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque tortor ornare ornare. Convallis
                    felis vitae tortor augue. Velit nascetur proin massa in.
                    Consequat faucibus porttitor enim et.
                  </p>
                </div>
              </div>

              {/* Right Column - Appointment Form */}
              <div className="bg-[#1F2B6C] rounded-lg overflow-hidden">
                <form onSubmit={handleSubmit} className="flex flex-col">
                  {/* name and gender  */}
                  <div className="flex flex-col sm:flex-row ">
                    <div className="w-full sm:w-1/2 ">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                                focus:outline-none focus:bg-white/5 transition-colors
                                border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                                text-sm sm:text-base ${
                                  errors.name ? "border-red-500" : ""
                                }`}
                      />
                      {errors.name && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="relative w-full sm:w-1/2">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                      focus:outline-none focus:bg-white/5 transition-colors
                      border-b-[1px] border-white/60 appearance-none cursor-pointer
                      text-sm sm:text-base ${
                        errors.gender ? "border-red-500" : ""
                      }`}
                      >
                        <option value="" disabled className="text-[#1F2B6C]">
                          Gender
                        </option>
                        <option value="male" className="text-[#1F2B6C]">
                          Male
                        </option>
                        <option value="female" className="text-[#1F2B6C]">
                          Female
                        </option>
                        <option value="others" className="text-[#1F2B6C]">
                          Others
                        </option>
                      </select>
                      {errors.gender && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.gender}
                        </div>
                      )}
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-4 text-white placeholder-white/80 bg-transparent
                                        focus:outline-none focus:bg-white/5 transition-colors
                                        border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                                        text-sm sm:text-base"
                      />
                      {errors.email && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input
                        type="number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full p-4 text-white placeholder-white/80 bg-transparent
                                        focus:outline-none focus:bg-white/5 transition-colors
                                        border-b-[1px] border-white/60
                                        text-sm sm:text-base"
                      />
                      {errors.phone && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full sm:w-1/2">
                      <input
                        type="text"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="Date"
                        min={new Date().toISOString().split("T")[0]}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "date")}
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                                     focus:outline-none focus:bg-white/5 transition-colors
                                      border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                                      text-sm sm:text-base appearance-none cursor-pointer
                                      ${errors.date ? "border-red-500" : ""}`}
                      />
                      {formData.date && (
                        <div className="text-white text-xs px-4 mt-1">
                          {formatDateWithDay(formData.date)}
                        </div>
                      )}
                      {errors.date && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.date}
                        </div>
                      )}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                        <IoIosArrowDown size={20} />
                      </div>
                    </div>
                    <div className="relative w-full sm:w-1/2">
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        disabled={isSunday(formData.date)}
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                                                  focus:outline-none focus:bg-white/5 transition-colors
                                                  border-b-[1px] border-white/60 appearance-none cursor-pointer
                                                  text-sm sm:text-base ${
                                                    errors.time
                                                      ? "border-red-500"
                                                      : ""
                                                  }`}
                      >
                        <option value="" disabled className="text-[#1F2B6C]">
                          Time
                        </option>
                        {isSunday(formData.date) ? (
                          <option value="Closed" className="text-[#1F2B6C]">
                            Closed (Sunday)
                          </option>
                        ) : (
                          timeSlots.map((slot) => (
                            <option
                              key={slot}
                              value={slot}
                              className="text-[#1F2B6C]"
                            >
                              {slot}
                            </option>
                          ))
                        )}
                      </select>

                      {errors.time && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.time}
                        </div>
                      )}
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
                        value={formData.doctor}
                        onChange={handleChange}
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                                  focus:outline-none focus:bg-white/5 transition-colors
                                  border-b-[1px] border-white/60 sm:border-r-[1px] sm:border-white/60
                                  text-sm sm:text-base appearance-none cursor-pointer
                                  ${errors.doctor ? "border-red-500" : ""}`}
                      >
                        <option value="" disabled className="text-[#1F2B6C]">
                          Doctor
                        </option>
                        {[
                          "Dr. Sarah Johnson",
                          "Dr. James Wilson",
                          "Dr. Emily Williams",
                          "Dr. Michael Chen",
                          "Dr. Lisa Anderson",
                          "Dr. Robert Taylor",
                          "Dr. Maria Garcia",
                          "Dr. David Kim",
                          "Dr. Jennifer Lee",
                          "Dr. Thomas Brown",
                        ].map((doctor) => (
                          <option
                            key={doctor}
                            value={doctor}
                            className="text-[#1F2B6C]"
                          >
                            {doctor}
                          </option>
                        ))}
                      </select>
                      {errors.doctor && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.doctor}
                        </div>
                      )}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                        <IoIosArrowDown size={20} />
                      </div>
                    </div>
                    <div className="relative w-full sm:w-1/2">
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                                                 focus:outline-none focus:bg-white/5 transition-colors
                                                 border-b-[1px] border-white/60
                                                 text-sm sm:text-base appearance-none cursor-pointer
                                                 ${
                                                   errors.department
                                                     ? "border-red-500"
                                                     : ""
                                                 }`}
                      >
                        <option value="" disabled className="text-[#1F2B6C]">
                          Department
                        </option>

                        {[
                          { label: "Neurology", value: "Neurology" },
                          { label: "Bones", value: "Bones" },
                          { label: "Oncology", value: "Oncology" },
                          {
                            label: "Otorhinolaryngology",
                            value: "Otorhinolaryngology",
                          },
                          { label: "Dermatology", value: "Dermatology" },
                          { label: "Ophthalmology", value: "Ophthalmology" },
                          { label: "Cardiovascular", value: "Cardiovascular" },
                          { label: "Pulmonology", value: "Pulmonology" },
                          { label: "Renal Medicine", value: "Renal Medicine" },
                          {
                            label: "Gastroenterology",
                            value: "Gastroenterology",
                          },
                          { label: "Urology", value: "Urology" },
                          { label: "Gynaelogy", value: "Gynaelogy" },
                        ].map((dept) => (
                          <option
                            key={dept.value}
                            value={dept.value}
                            className="text-[#1F2B6C]"
                          >
                            {dept.label}
                          </option>
                        ))}
                      </select>
                      {errors.department && (
                        <div className="text-red-500 text-xs px-4">
                          {errors.department}
                        </div>
                      )}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                        <IoIosArrowDown size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className={`w-full p-4 text-white placeholder-white/80 bg-transparent
                                               focus:outline-none focus:bg-white/5 transition-colors
                                               text-sm sm:text-base resize-none
                                               h-[150px] sm:h-[200px] lg:h-[170px]
                                               ${
                                                 errors.message
                                                   ? "border-red-500"
                                                   : "border-white/60"
                                               }`}
                  ></textarea>
                  {errors.message && (
                    <div className="text-red-500 text-xs px-4">
                      {errors.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="bg-[#BFD2F8] p-2 sm:p-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full text-[#1F2B6C] 
                                                 font-semibold transition-all
                                                 text-sm sm:text-base cursor-pointer uppercase tracking-wide
                                                 disabled:opacity-50 "
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1F2B6C] border-t-transparent"></div>
                          <span className="ml-2">Booking...</span>
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sixth part Trusted care */}
      <div className=" mx-4 px-5 sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 my-20 ">
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-1">
            TRUSTED CARE
          </p>
          <h2 className="second-text sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide text-[#1F2B6C] font-bold mb-4">
            Our Doctors
          </h2>
        </div>

        {/* three doctors list card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full ">
          {/* Doctor 1 */}
          <div className="w-full rounded-md  bg-white overflow-hidden">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Doctor1})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-center bg-[#BFD2F8] ">
              <h3 className="text-lg md:text-xl font-regular text-[#1F2B6C] mb-2">
                Dr. John Doe
              </h3>
              <p className="text-lg md:text-md text-[#1F2B6C] mb-2 font-[700] tracking-widest">
                NEUROLOGY
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer  transition-colors">
                  <TiSocialLinkedin
                    color="white"
                    size={18}
                    className="transform scale-90"
                  />
                </span>
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer transition-colors">
                  <TiSocialFacebook
                    color="white"
                    size={18}
                    className="transform scale-90"
                  />
                </span>
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer  transition-colors">
                  <IoLogoInstagram
                    color="white"
                    size={16}
                    className="transform scale-90"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center text-center bg-[#1F2B6C] py-5 rounded-bl-md rounded-br-md ">
              <div className="flex items-center justify-center text-center">
                <Link
                  to="/doctors"
                  className="tracking-wider text-[#BFD2F8] text-sm md:text-base"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Doctor 2 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Doctor2})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-center bg-[#BFD2F8]">
              <h3 className="text-lg md:text-xl font-regular text-[#1F2B6C] mb-2">
                Dr. John Doe
              </h3>
              <p className="text-lg md:text-md text-[#1F2B6C] mb-2 font-[700] tracking-widest">
                NEUROLOGY
              </p>
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer  transition-colors">
                  <TiSocialLinkedin
                    color="white"
                    size={18}
                    className="transform scale-90"
                  />
                </span>
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer transition-colors">
                  <TiSocialFacebook
                    color="white"
                    size={18}
                    className="transform scale-90"
                  />
                </span>
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer  transition-colors">
                  <IoLogoInstagram
                    color="white"
                    size={16}
                    className="transform scale-90"
                  />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center text-center bg-[#1F2B6C] py-5 rounded-bl-md rounded-br-md">
              <div>
                <Link
                  to="/doctors"
                  className="tracking-wider text-[#BFD2F8] text-sm md:text-base"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Doctor 3 */}
          <div className="w-full rounded-lg shadow-md bg-white overflow-hidden">
            <div
              className="h-[250px] sm:h-[300px] md:h-[350px] w-full bg-no-repeat bg-cover bg-top"
              style={{ backgroundImage: `url(${Doctor3})` }}
            ></div>
            <div className="p-4 md:p-6 grid grid-cols-1  text-center bg-[#BFD2F8]">
              <h3 className="text-lg md:text-xl font-regular text-[#1F2B6C] mb-2">
                Dr. John Doe
              </h3>
              <p className="text-lg md:text-md text-[#1F2B6C] mb-2 font-[700] tracking-widest">
                NEUROLOGY
              </p>

              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer  transition-colors">
                  <TiSocialLinkedin
                    color="white"
                    size={18}
                    className="transform scale-90"
                  />
                </span>
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer transition-colors">
                  <TiSocialFacebook
                    color="white"
                    size={18}
                    className="transform scale-90"
                  />
                </span>
                <span className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-[#1F2B6C] flex items-center justify-center cursor-pointer  transition-colors">
                  <IoLogoInstagram
                    color="white"
                    size={16}
                    className="transform scale-90"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center text-center bg-[#1F2B6C] py-5 rounded-bl-md rounded-br-md">
              <div>
                <Link
                  to="/doctors"
                  className="tracking-wider text-[#BFD2F8] text-sm md:text-base"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* three dots pagination comnbination*/}
        <div className="flex items-center justify-center text-center py-5 mt-6 gap-2">
          <div className="w-4 h-4 rounded-full bg-[#BFD2F8]"></div>
          <div className="w-4 h-4 rounded-full bg-[#1F2B6C]"></div>
          <div className="w-4 h-4 rounded-full bg-[#BFD2F8]"></div>
        </div>

        {/* seventh part news */}

        <div className=" mx-4  sm:mx-6 lg:mx-24 md:mx-12 xl:mx-48 my-20">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <p className="font-bold text-sm sm:text-base md:text-lg tracking-widest text-[#159EEC] mb-1 uppercase">
              Better information, Better health
            </p>
            <h2 className="second-text sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide text-[#1F2B6C] font-bold ">
              News
            </h2>
          </div>
        </div>

        {/* news card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full ">
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
                This Article's Title goes Here, but not too long.
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
                This Article's Title goes Here, but not too long.
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
                This Article's Title goes Here, but not too long.
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
                This Article's Title goes Here, but not too long.
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

        {/* eighth part contact */}
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

      {/* nineth part footer */}
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

export default Home;
