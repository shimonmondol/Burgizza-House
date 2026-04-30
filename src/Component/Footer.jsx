import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-black text-white">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30 mr-16">
          <div className="max-w-96">
            <h1 className="font-semibold text-2xl">Burgizza House</h1>
            <p className="mt-6 text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <p>Social Media</p>
          </div>
          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold text-white mb-5">RESOURCES</h2>
              <ul className="text-sm text-gray-400 space-y-2 list-none">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-5">COMPANY</h2>
              <div className="text-sm text-gray-400 space-y-2 list-none">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-5">COMPANY</h2>
              <div className="text-sm text-gray-400 space-y-2 list-none">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-400 pb-6">
          Copyright 2026 © Burgizza House. All
          Right Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
