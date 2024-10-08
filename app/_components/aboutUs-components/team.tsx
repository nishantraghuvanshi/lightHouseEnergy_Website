"use client"
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { teamMembers } from "./teamMembers";



const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-green-900 text-white px-6 py-12 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
        The Team
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Team Member Info Section (Carousel) */}
        <div className="relative w-full lg:w-1/2 bg-green-800 rounded-lg p-8 mb-8 lg:mb-0">
          {/* Slider Content */}
          <div key={currentIndex}>
            <div className="h-32 w-full bg-green-600 rounded-lg mb-4"></div>{" "}
            {/* Placeholder for image */}
            <h3 className="text-xl font-semibold">
              {teamMembers[currentIndex].name}
            </h3>
            <p className="text-sm">{teamMembers[currentIndex].role}</p>
            <p className="mt-2">{teamMembers[currentIndex].description}</p>
            <a
              href={teamMembers[currentIndex].linkedIn}
              className="mt-4 inline-block bg-blue-600 p-2 rounded-full"
            >
              LinkedIn
            </a>
          </div>

          {/* Slider Controls */}
          <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
            {teamMembers.map((_, idx) => (
              <span
                key={idx}
                className={`h-3 w-3 rounded-full ${
                  currentIndex === idx ? "bg-white" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="flex items-center space-x-4 mb-6 lg:mb-0">
          <button
            onClick={prevSlide}
            className="text-3xl text-white bg-green-700 p-2 rounded-full hover:bg-green-600"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={nextSlide}
            className="text-3xl text-white bg-green-700 p-2 rounded-full hover:bg-green-600"
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* Company Logos with Background Image and Gradient Overlay */}
        {/* Company Logos with Background Image and Gradient Overlay */}
        <div className="relative w-full lg:w-1/2 h-full p-8 rounded-lg bg-cover bg-center bg-[url('/windfarmone.jpg')]">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-lg"></div>

          {/* Company Logos */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 items-center h-full">
            <img
              src="/slack.jpg"
              alt="NVIDIA"
              className="w-full h-full object-cover"
            />
            <img
              src="/slack.jpg"
              alt="OpenAI"
              className="w-full h-full object-cover"
            />
            <img
              src="/slack.jpg"
              alt="Google"
              className="w-full h-full object-cover"
            />
            <img
              src="/slack.jpg"
              alt="MIT"
              className="w-full h-full object-cover"
            />
            <img
              src="/slack.jpg"
              alt="Columbia"
              className="w-full h-full object-cover"
            />
            <img
              src="/slack.jpg"
              alt="Atomic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

