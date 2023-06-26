'use client'

import Landing from "./landing/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function App() {
  return (
    <div className="h-screen w-screen snap-y snap-proximity overflow-y-scroll">
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
