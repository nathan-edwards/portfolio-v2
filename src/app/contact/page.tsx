"use client";

import confetti from "canvas-confetti";
import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const onContactFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: { [key: string]: string } = {};
    const elements = e.currentTarget.elements as unknown as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
    >;

    Array.from(elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setStatus(res.status);
        setDisabled(res.message.length > 0);
      });
  };
  return (
    <section
      id="contact"
      className="min-h-screen snap-start justify-center p-6"
    >
      <div className="mt-32 flex flex-col justify-center md:my-64 md:flex-row">
        <div className="basis-1/2 pb-12 md:p-0 lg:mr-24 lg:basis-1/4">
          <h1 className="mb-4 text-5xl">
            <b>Get In Contact</b>
          </h1>
          <h2 className="text-lg">
            Feel free to contact me using the form below. I will get back to you
            as soon as possible. You can also connect with me on LinkedIn or by
            Email.
          </h2>
          <div className="mt-6 flex">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nathanedwards256/"
              rel="noopener noreferrer"
              className="mr-5 mt-1 inline-block h-3/4 cursor-pointer rounded-full border border-black bg-[#E3A018]  px-[15px] py-3 text-center font-bold shadow-none transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_4px_rgb(0,0,0)] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-white dark:bg-black dark:shadow-none dark:hover:shadow-[3px_4px_rgb(256,256,256)] dark:active:shadow-none"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" className="" />
            </a>
            <a
              target="_blank"
              href="
                mailto:nathan.edwards256@gmail.com"
              rel="noopener noreferrer"
              className="mr-6 mt-1 inline-block h-3/4 cursor-pointer rounded-md border border-black bg-[#E3A018]  px-6 py-3 text-center font-bold shadow-none transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_4px_rgb(0,0,0)] active:translate-x-0 active:translate-y-0 active:shadow-none dark:border-white dark:bg-black dark:shadow-none dark:hover:shadow-[3px_4px_rgb(256,256,256)] dark:active:shadow-none"
            >
              nathan.edwards256@gmail.com
            </a>
          </div>
        </div>
        <div className="my-auto basis-1/2 justify-center lg:mr-24 lg:basis-1/4">
          <form
            className="space-y-5 caret-[#E3A018]"
            onSubmit={onContactFormSubmit}
          >
            <div className="w-full">
              <input
                type="text"
                className="w-full rounded-md border border-black bg-[#ffffff] p-2 text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[6px_7px_rgb(0,0,0)] focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none dark:border-white dark:shadow-[3px_4px_rgb(256,256,256)] dark:hover:shadow-[6px_7px_rgb(256,256,256)] dark:focus:border-white dark:focus:shadow-[6px_7px_rgb(256,256,256)] dark:active:shadow-none"
                name="name"
                placeholder="Name"
                id="name"
                required
                disabled={disabled}
              />
            </div>

            <div className="form-control w-full">
              <input
                type="email"
                className="w-full rounded-md border border-black bg-[#ffffff] p-2 text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[6px_7px_rgb(0,0,0)] focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none dark:border-white dark:shadow-[3px_4px_rgb(256,256,256)] dark:hover:shadow-[6px_7px_rgb(256,256,256)] dark:focus:border-white dark:focus:shadow-[6px_7px_rgb(256,256,256)] dark:active:shadow-none"
                name="email"
                id="email"
                placeholder="Email"
                required
                disabled={disabled}
              />
            </div>

            <div className="form-control w-full">
              <textarea
                rows={3}
                className="w-full rounded-md border border-black bg-[#ffffff] p-2 text-black shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[6px_7px_rgb(0,0,0)] focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none dark:border-white dark:shadow-[3px_4px_rgb(256,256,256)] dark:hover:shadow-[6px_7px_rgb(256,256,256)] dark:focus:border-white dark:focus:shadow-[6px_7px_rgb(256,256,256)] dark:active:shadow-none"
                name="message"
                id="message"
                placeholder="Message"
                required
                disabled={disabled}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`rounded-md border border-black bg-[#E3A018] p-2 font-bold text-black dark:border-white ${
                disabled
                  ? "translate-x-1 translate-y-1 bg-opacity-50 shadow-none transition-all duration-300 dark:border-white dark:shadow-none"
                  : "shadow-[3px_4px_rgb(0,0,0)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[6px_7px_rgb(0,0,0)] focus:-translate-x-1 focus:-translate-y-1 focus:shadow-[6px_7px_rgb(0,0,0)] active:translate-x-2 active:translate-y-2 active:shadow-none dark:border-white dark:shadow-[3px_4px_rgb(256,256,256)] dark:hover:shadow-[6px_7px_rgb(256,256,256)] dark:focus:border-white dark:focus:shadow-[6px_7px_rgb(256,256,256)] dark:active:shadow-none"
              }`}
              disabled={disabled}
            >
              Send Message
            </button>
          </form>
          {message.length > 0 ? (
            <div
              className={`mt-6 border border-black bg-white p-2 text-black shadow-[3px_4px_rgb(0,0,0)] dark:border-white dark:bg-black dark:text-white dark:shadow-[3px_4px_rgb(256,256,256)] ${
                status === "success"
                  ? confetti({
                      particleCount: 150,
                      spread: 90,
                      origin: { y: 0.5, x: 0.5 },
                    })
                  : "bg-red-700"
              }`}
            >
              <span>{message}</span>
            </div>
          ) : null}
        </div>
      </div>

      <footer className="mt-16 flex h-10 w-full flex-col items-center">
        <p className="flex items-center justify-between font-medium">
          Designed & Developed by{" "}
          <b className="gradient-text pl-1"> Nathan Edwards</b>
        </p>
      </footer>
    </section>
  );
}
