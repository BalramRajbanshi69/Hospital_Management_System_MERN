

import React from 'react'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import '../App.css'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm w-full">
      <div className="p-2">
        <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48">
          <div className="container py-3 px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-white">
            <div className="font-bold text-4xl mb-2 sm:mb-0 meddical-text">
              <span className="text-[#1F2B6C]">MED</span>
              <span className="text-[#159EEC]">DICAL</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-blue-800 header-text">
              <div className="flex items-center space-x-2.5">
                <i className="fa-solid fa-phone-volume text-3xl"></i>
                <div className='flex flex-col text-[16px]'>
                  <span className="text-[#16425b] sm:text-sm font-semibold header-text">EMERGENCY</span>
                  <span className='text-[#159EEC] font-medium'>(237) 681 312-255</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <FaClock className="w-8 h-8" />
                <div className='flex flex-col text-[16px]'>
                  <span className="text-[#16425b] sm:text-sm font-semibold header-text">WORK HOUR</span>
                  <span className='text-[#159EEC] font-medium'>09:00 - 20:00 Everyday</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <FaMapMarkerAlt className="w-8 h-8" />
                <div className='flex flex-col text-[16px]'>
                  <span className="text-[#16425b] sm:text-sm font-semibold header-text">LOCATION</span>
                  <span className='text-[#159EEC] font-medium'>0123 Some Place</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

