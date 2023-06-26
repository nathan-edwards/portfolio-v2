import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDribbble,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

export default function Landing() {
  return (
    <section className="z-0 flex min-h-screen snap-start flex-col justify-between p-6 ">
      <Navbar />
      <div className="m-auto flex py-11">
        <div className="flex justify-between">
          <Image
            src="/photo.jpg"
            width={500}
            height={500}
            alt="photo"
            quality={100}
            priority
            className="relative mr-24 rounded-full"
          />
          <div className="flex-col justify-between">
            <h1 className="text-left text-6xl font-light tracking-tight">
              Recent <b className="font-extrabold">Computer Science Graduate</b>
              <br /> and Aspiring <b className="font-extrabold">Programmer</b>
              <b className="text-green-700 font-black">.</b>
              <br /> Hello, I’m <b className="text-green-700 font-extrabold">Nathan</b>😊
            </h1>
            <div className="md:flex md:flex-row md:border-none">
              <div className="mt-8 flex">
                <a
                  className="md:mr-8"
                  href="#contact"
                  // onClick={handleScroll}
                >
                  👋 Get in contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="mt-8 flex">
        <li className="col-auto flex md:mr-14">
          <FontAwesomeIcon icon={faGithub} size="xl" className="pr-3" />
          <p className="m-auto text-xl">Github</p>
          <FontAwesomeIcon
            icon={faExternalLink}
            size="1x"
            className="m-auto pl-2"
          />
        </li>
        <li className="col-auto flex md:mr-14">
          <FontAwesomeIcon icon={faLinkedin} size="xl" className="pr-3" />
          <p className="m-auto text-xl">LinkedIn</p>
          <FontAwesomeIcon
            icon={faExternalLink}
            size="sm"
            className="m-auto pl-2"
          />
        </li>
        <li className="col-auto flex md:mr-14">
          <FontAwesomeIcon icon={faDribbble} size="xl" className="pr-3" />
          <p className="m-auto text-xl">Dribbble</p>
          <FontAwesomeIcon
            icon={faExternalLink}
            size="sm"
            className="m-auto pl-2"
          />
        </li>
      </ul>
    </section>
  );
}
