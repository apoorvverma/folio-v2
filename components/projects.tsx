"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Some Things I’ve Built</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <p className="text-gray-700 dark:text-white/80 text-center mt-10">
        For more projects, check out my{"  "}
        <a href="https://github.com/apoorvverma" target="_blank" > <BsGithub className="inline" />{" "}GitHub profile.</a> 
      </p>
    </section>
  );
}
