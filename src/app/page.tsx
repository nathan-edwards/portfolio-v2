"use client";
import { ThemeProvider } from "next-themes";
import Landing from "./landing/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function App() {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={true}>
        <div className="h-screen w-screen snap-y overflow-y-scroll">
          <Landing />
          <Projects />
          <Contact />
        </div>
      </ThemeProvider>
    </>
  );
}
