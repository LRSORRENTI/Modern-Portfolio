import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { useState } from "react";
import React from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    window.location.href = "mailto:luke-sorrenti@outlook.com";
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out today and let&apos;s discuss how to build your dream project
        </p>
        <div onClick={handleEmailClick}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        {/* <p className="md:text-base text-sm md:font-normal font-light">© 2025</p> */}

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-slate-800"
            >
              {" "}
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleCancel}
          ></div>
          <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg saturate-180 rounded-lg p-8 max-w-md mx-4 border border-white border-opacity-20 shadow-xl">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-4">Open Email Client?</h3>
              <p className="mb-6">
                Are you sure you want to open your email client to contact Luke
                Sorrenti?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-lg bg-black-200 hover:bg-black-300 transition-colors text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleContinue}
                  className="px-4 py-2 rounded-lg bg-violet-700 hover:bg-violet-600 transition-colors text-white"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
