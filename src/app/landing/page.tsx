"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./navbar";
import confetti from "canvas-confetti";
import Link from "next/link";

export default function Landing() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="flex min-h-screen snap-start flex-col justify-center p-6"
    >
      <Navbar />
      <div className="my-auto flex justify-center">
        {/* Heading and Buttons */}
        <div className="my-auto lg:mr-24">
          <h1 className="block text-center text-4xl font-light leading-tight tracking-tight md:text-left md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
            <b className="font-extrabold">Computer Science Graduate</b>
            <br /> and Aspiring <b className="font-extrabold">Programmer</b>
            {/* Shhh Secret Confetti Button */}
            <a
              className="confetti-dot disable-text-selection text-2xl font-black text-[#FF6B6B] md:text-6xl"
              onClick={() => {
                confetti({
                  particleCount: 150,
                  spread: 60,
                  origin: { y: 0.51, x: 0.51 },
                });
              }}
            >
              .
            </a>
            <br />
            Hello, I&apos;m{" "}
            <b className="gradient-text font-extrabold">Nathan</b>
            {/* Animated Smiling Emoji */}
            <Image
              src="/smile-face.png"
              alt="Smiling Face with Smiling Eyes"
              width="35"
              height="35"
              className="ml-2 inline-block md:mb-2 md:ml-3 md:h-12 md:w-12 lg:h-14 lg:w-14"
            />
          </h1>
          {/* Buttons */}
          <div className="mt-4 md:mt-7 md:flex lg:mt-14">
            <div className="rounded-lg border border-black bg-[#FF6B6B] py-4 text-center text-black shadow-[4px_5px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none dark:border-white  dark:shadow-[4px_5px_rgb(256,256,256)] dark:hover:shadow-[6px_7px_rgb(256,256,256)] dark:active:shadow-none md:mr-8 lg:mr-8">
              <Link
                href="#contact"
                onClick={handleScroll}
                className="px-12 py-3 text-center text-3xl font-normal tracking-tight"
              >
                Get In Contact
              </Link>
            </div>
            <div className="hidden items-center md:flex">
              <a
                target="_blank"
                href="https://github.com/nathan-edwards"
                rel="noopener noreferrer"
                className="mr-6 mt-1 inline-block h-3/4 cursor-pointer rounded-full border border-black  bg-white px-[14px] text-center font-bold shadow-none transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_4px_rgb(0,0,0)] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-white dark:bg-black dark:shadow-none dark:hover:shadow-[3px_4px_rgb(256,256,256)] dark:active:shadow-none"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" className="pt-3" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nathanedwards256/"
                rel="noopener noreferrer"
                className="mr-6 mt-1 inline-block h-3/4 cursor-pointer rounded-full border border-black  bg-white px-[15px] text-center font-bold shadow-none transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_4px_rgb(0,0,0)] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-white dark:bg-black dark:shadow-none dark:hover:shadow-[3px_4px_rgb(256,256,256)] dark:active:shadow-none"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="xl"
                  className="py-3"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Photo */}
        <div className="mr-2 hidden lg:block">
          <Image
            rel="preload"
            fetchPriority="high"
            src="/me.jpg"
            alt="Picture of the Developer"
            quality={100}
            priority
            height={960}
            width={540}
            className="rounded-lg border border-double border-black bg-black shadow-[12px_16px_rgb(0,0,0)] dark:border-white dark:bg-white dark:shadow-[12px_16px_rgb(256,256,256)]"
          />
        </div>
      </div>
    </section>
  );
}
