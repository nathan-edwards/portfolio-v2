import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="max-w flex h-12 items-center justify-between backdrop-blur tracking-tight">
      <div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="N Edwards"
          width={90}
          height={45}
          priority
        />
      </div>
      <div>
        <ul className="hidden items-center md:flex md:flex-row md:border-none font-bold">
          <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0 "
              href="/"
              // onClick={handleSroll}
            >
              Home
            </Link>
          </li>
          <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0 "
              href="#about"
              // onClick={handleSroll}
            >
              About
            </Link>
          </li>
          <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0"
              href="#projects"
              // onClick={handleScroll}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0"
              href="#contact"
              // onClick={handleScroll}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleOpen} className="block md:hidden pl-3 pr-1 md:pr-0">
        {!open ? (
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
          />
        ) : (
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
          />
        )}
      </div>
      <div className={open ? "sticky h-full w-[60%]" : "hidden"}>
        <ul className="flex flex-col items-center">
          <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0 "
              href="#about"
              // onClick={handleSroll}
            >
              <b>About</b>
            </Link>
          </li>
          <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0"
              href="#projects"
              // onClick={handleScroll}
            >
              <b>Projects</b>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:text-green-800 md:inline-block md:px-2 md:py-0"
              href="#contact"
              // onClick={handleScroll}
            >
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block pl-3 pr-1 md:pr-0">
        {!darkMode ? (
          <FontAwesomeIcon
            onClick={handleDarkMode}
            icon={faMoon}
            size="2x"
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleDarkMode}
            icon={faSun}
            size="2x"
          />
        )}
      </div>
    </div>
  );
}
