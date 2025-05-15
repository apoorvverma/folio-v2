"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a graduate student completing my Master’s in {" "}
      <span className="font-medium">Computer Information Systems</span> at Boston University. My expertise spans designing and building high-performance, 
      scalable web applications, automating infrastructure and pipelines, and ensuring reliable, secure deployments.
      I’m now seeking opportunities as a Software Engineer or in a DevOps-focused role, so I can help deliver robust, end-to-end solutions in the tech industry.
      </p>

      <p>
        <span className="italic">When I'm not coding</span> & building amazing things for the web, I enjoy hanging out with friends, playing chess, video games & exploring the outdoors. I love {" "}
        <span className="font-medium">learning new things</span> & I really enjoy playing sports(football, cricket & badminton the most). Based in Boston, I am constantly inspired by the vibrant tech and creative communities around me.
      </p>
    </motion.section>
  );
}
