import React from "react";
import linkedin from "../assets/social/linkedin.svg";
import instagram from "../assets/social/instagram.svg";
import github from "../assets/social/github.svg";
import facebook from "../assets/social/facebook.svg";
import twitterx from "../assets/social/twitterx.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto p-5 flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">
          &copy; COPYRIGHT 2024.{" "}
          <a href="https://veenaurkude.netlify.app/" className="hover:text-white">
            Veena Urkude
          </a>{" "}
          - ALL RIGHTS RESERVED.
        </p>
        <nav className="flex flex-wrap items-center text-base justify-center">
          <a
            href="https://www.linkedin.com/in/veena-urkude-80b0a7210/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/veenaurkude"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/miss.veena_10/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/veena.urkude.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://x.com/veena101098"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-white"
          >
            <img src={twitterx} alt="Twitter" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
