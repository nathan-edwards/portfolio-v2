import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen snap-start justify-center p-6"
    >
      {/* Section Heading */}
      <div className="my-6">
        <div className="m-auto w-[90%] text-center md:w-[60%]">
          <h1 className="mb-4 text-5xl">
            <b>Projects</b>
          </h1>
          <h2 className="text-lg">
            Check out some of my projects below. This website is constantly
            being updated with newer projects.
          </h2>
        </div>
      </div>
      {/* Project Grid */}
      <div className="ml-3 mr-6 mt-12 grid grid-cols-1 justify-evenly gap-16 text-black md:ml-16 md:mr-20 xl:grid-cols-2">
        {/* Project 1 */}
        <div className="h-min justify-between overflow-auto rounded-xl bg-black shadow-[12px_16px_rgb(0,0,0)] dark:bg-white dark:shadow-[12px_16px_rgb(256,256,256)] md:flex">
          {/* Small Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/grimoire.png"
            alt="Project Image"
            width="1024"
            height="576"
            className="block w-full rounded-t-xl border-x border-t  border-black bg-black dark:border-white dark:bg-white md:hidden md:rounded-r-xl"
          />
          {/* Project Details */}
          <div className="flex flex-col place-content-between border border-black bg-[#7FBC8C] px-4 py-5 dark:border-white max-sm:rounded-b-xl md:rounded-l-xl md:p-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Grimoire Theme</h3>
              <div className="disable-text-selection my-2 flex">
                <p className="tech-tag">VS Code</p>
                <p className="tech-tag">JSON</p>
              </div>
              <p className="text-md my-1">
                A take on popular themes with vibrant colors without sacrificing
                readability theme for VS Code, available on the Visual Studio
                Marketplace.
              </p>
            </div>
            <div className="bottom-0 my-2 flex flex-row">
              <a
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=NathanEdwards.grimoire"
                rel="noopener noreferrer"
                className="mr-4 inline-block basis-1/2 rounded-md border border-white bg-black py-2 text-center align-middle font-semibold text-white shadow-[3px_4px_rgb(256,256,256)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(256,256,256)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faEye} size="1x" /> View
              </a>
              <a
                target="_blank"
                href="https://github.com/nathan-edwards/grimoire"
                rel="noopener noreferrer"
                className="inline-block basis-1/2 rounded-md border border-black bg-white py-2 text-center align-middle font-semibold text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" /> Repo
              </a>
            </div>
          </div>
          {/* Large Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/grimoire.png"
            alt="Grimoire Theme Preview"
            width="1024"
            height="576"
            className="min-h hidden overflow-auto rounded-r-xl border-y border-r border-black bg-black object-cover dark:border-white dark:bg-white md:block"
          />
        </div>
        {/* Project 2 */}
        <div className="h-min justify-between overflow-auto rounded-xl bg-black shadow-[12px_16px_rgb(0,0,0)] dark:bg-white dark:shadow-[12px_16px_rgb(256,256,256)] md:flex">
          {/* Small Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/inbetween.png"
            alt="Game Preview"
            width="1024"
            height="576"
            className="block w-full rounded-t-xl border-x border-t  border-black bg-black dark:border-white dark:bg-white md:hidden md:rounded-r-xl"
          />
          {/* Project Details */}
          <div className="flex flex-col place-content-between border border-black bg-[#7FBC8C] px-4 py-5 dark:border-white max-sm:rounded-b-xl md:rounded-l-xl md:p-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">The Inbetween</h3>
              <div className="disable-text-selection my-2 flex">
                <p className="tech-tag">Unity</p>
                <p className="tech-tag">C#</p>
                <p className="tech-tag">Blender</p>
              </div>
              <p className="text-md my-1">
                A 2.5D Survival Crafting Game. Explore the realm between life
                and death and find your way back to the living.
              </p>
            </div>
            <div className="my-2 flex flex-row">
              <a
                target="_blank"
                href="https://nathan-edwards.github.io/Inbetween/Build/index.html"
                rel="noopener noreferrer"
                className="mr-4 inline-block basis-1/2 rounded-md border border-white bg-black py-2 text-center align-middle font-semibold text-white shadow-[3px_4px_rgb(256,256,256)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(256,256,256)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faEye} size="1x" /> View
              </a>
              <a
                target="_blank"
                href="https://github.com/nathan-edwards/Inbetween"
                rel="noopener noreferrer"
                className="inline-block basis-1/2 rounded-md border border-black bg-white py-2 text-center align-middle font-semibold text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" /> Repo
              </a>
            </div>
          </div>
          {/* Large Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/inbetween.png"
            alt="Game Preview"
            width="1024"
            height="576"
            className="min-h hidden overflow-auto rounded-r-xl border-y border-r border-black bg-black object-cover dark:border-white dark:bg-white md:block"
          />
        </div>
        {/* Project 3 */}
        <div className="h-min justify-between overflow-auto rounded-xl bg-black shadow-[12px_16px_rgb(0,0,0)] dark:bg-white dark:shadow-[12px_16px_rgb(256,256,256)] md:flex">
          {/* Small Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/janet.png"
            alt="Janet Preview"
            width="1024"
            height="576"
            className="block w-full rounded-t-xl border-x border-t  border-black bg-black dark:border-white dark:bg-white md:hidden md:rounded-r-xl"
          />
          {/* Project Details */}
          <div className="flex flex-col place-content-between border border-black bg-[#7FBC8C] px-4 py-5 dark:border-white max-sm:rounded-b-xl md:rounded-l-xl md:p-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Janet Bot</h3>
              <div className="disable-text-selection my-2 flex">
                <p className="tech-tag">NodeJS</p>
                <p className="tech-tag">TS</p>
                <p className="tech-tag">Discord API</p>
              </div>
              <p className="text-md my-1">
                Janet is a versatile discord bot developed with discord.js that
                can handle various tasks and commands.
              </p>
            </div>
            <div className="bottom-0 my-2 flex flex-row">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/nathan-edwards/Janet"
                className="inline-block basis-full rounded-md border border-black bg-white py-2 text-center align-middle font-semibold text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" /> Repo
              </a>
            </div>
          </div>
          {/* Large Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/janet.png"
            alt="Janet Preview"
            width="1024"
            height="576"
            className="min-h hidden overflow-auto rounded-r-xl border-y border-r border-black bg-black object-cover dark:border-white dark:bg-white md:block"
          />
        </div>
        {/* Project 4 */}
        <div className="h-min justify-between overflow-auto rounded-xl bg-black shadow-[12px_16px_rgb(0,0,0)] dark:bg-white dark:shadow-[12px_16px_rgb(256,256,256)] md:flex">
          {/* Small Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/portfolio.jpeg"
            alt="Portfolio Preview"
            width="1024"
            height="576"
            className="block w-full rounded-t-xl border-x border-t  border-black bg-black dark:border-white dark:bg-white md:hidden md:rounded-r-xl"
          />
          {/* Project Details */}
          <div className="flex flex-col place-content-between border border-black bg-[#7FBC8C] px-4 py-5 dark:border-white max-sm:rounded-b-xl md:rounded-l-xl md:p-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Portfolio</h3>
              <div className="disable-text-selection my-2 flex">
                <p className="tech-tag">NextJS</p>
                <p className="tech-tag">TS</p>
                <p className="tech-tag">Tailwind</p>
                <p className="tech-tag">Vercel</p>
              </div>
              <p className="text-md my-1">
                You are here! This website showcases my skills and experience as
                a developer. I designed the website using Figma and developed
                the website using Next.js.
              </p>
            </div>
            <div className="my-2 flex flex-row">
              <a
                target="_blank"
                href="https://www.figma.com/file/NZTCYLsm9q2xPNEHHfrsu6/Web-Portfolio?type=design&node-id=440%3A136&mode=design&t=eAGQ4ZyiykZHVGI3-1"
                rel="noopener noreferrer"
                className="mr-4 inline-block basis-1/2 rounded-md border border-white bg-black py-2 text-center align-middle font-semibold text-white shadow-[3px_4px_rgb(256,256,256)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(256,256,256)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faFigma} size="1x" /> View Design
              </a>
              <a
                target="_blank"
                href="https://github.com/nathan-edwards/portfolio-v2"
                rel="noopener noreferrer"
                className="inline-block basis-1/2 rounded-md border border-black bg-white py-2 text-center align-middle font-semibold text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" /> Repo
              </a>
            </div>
          </div>
          {/* Large Screen Image */}
          <Image
            rel="preload"
            fetchPriority="high"
            src="/portfolio.jpeg"
            alt="Portfolio Preview"
            width="1024"
            height="576"
            className="min-h hidden overflow-auto rounded-r-xl border-y border-r border-black bg-black object-cover dark:border-white dark:bg-white md:block"
          />
        </div>
      </div>
    </section>
  );
}
