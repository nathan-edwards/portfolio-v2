"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faDribbble,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import React, { useState } from "react";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="flex h-12 w-full flex-wrap items-center justify-between tracking-tight backdrop-blur ">
      <div>
        <Image
          className="relative dark:invert"
          src="/logo.svg"
          alt="N Edwards"
          width={90}
          height={45}
          priority
        />
      </div>
      <div>
        <ul className="sticky hidden font-semibold tracking-tight md:flex md:flex-row md:border-none">
          <li className="md:mr-4">
            <Link
              className="relative px-4 py-2 text-xl hover:text-[#E3A018] md:inline-block md:px-2 md:py-0 "
              href="/"
            >
              Home
            </Link>
          </li>
          {/* <li className="md:mr-4">
            <Link
              className="relative px-4 py-2 text-xl hover:text-[#3b8d53] md:inline-block md:px-2 md:py-0 "
              href="#about"
              onClick={handleClick}            >
              About
            </Link>
          </li> */}
          <li className="md:mr-4">
            <Link
              className="relative px-4 py-2 text-xl  hover:text-[#E3A018] md:inline-block md:px-2 md:py-0"
              href="#projects"
              onClick={handleScroll}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="relative px-4 py-2 text-xl hover:text-[#E3A018] md:inline-block md:px-2 md:py-0"
              href="#contact"
              onClick={handleScroll}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={handleTheme}
          className="mr-1 hidden rounded-full border border-black bg-white text-center shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none dark:border-white dark:bg-black dark:shadow-[3px_4px_rgb(256,256,256)] dark:hover:shadow-[6px_7px_rgb(256,256,256)] dark:active:shadow-none md:mr-1 md:block lg:mr-1"
        >
          {resolvedTheme === "light" ? (
            <FontAwesomeIcon icon={faMoon} size="xl" className="mx-2 my-1" />
          ) : (
            <FontAwesomeIcon icon={faSun} size="lg" className="mx-2 my-2" />
          )}
        </button>
        <div />
      </div>
      <div onClick={handleOpen} className="relative mr-1 flex md:hidden">
        {!open ? (
          <FontAwesomeIcon icon={faBars} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faClose} size="2x" />
        )}
      </div>
      <div
        className={
          open
            ? "relative top-3 z-30 h-24 w-full border-b border-black"
            : "hidden"
        }
      >
        <ul className="gap-2px flex flex-col items-center">
          {/* <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-[#3b8d53] md:inline-block md:px-2 md:py-0"
              href="#about"
              onClick={handleScroll}
            >
              <b>About</b>
            </Link>
          </li> */}
          <li className="md:mr-4">
            <Link
              className="block px-4 py-2 hover:text-[#3b8d53] md:inline-block md:px-2 md:py-0"
              href="#projects"
              onClick={handleScroll}
            >
              <b>Projects</b>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:text-[#3b8d53] md:inline-block md:px-2 md:py-0"
              href="#contact"
              onClick={handleScroll}
            >
              <b>Contact</b>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
