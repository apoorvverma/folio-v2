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
      I am a graduate student pursuing my Master’s in {" "}
      <span className="font-medium">Computer Information Systems</span> at Boston University, blending my academic journey with my professional experience as a full-stack developer. My {" "}<span className="italic">technical background</span> has honed my skills in designing and building high-performance scalable webapps. I am currently looking for{" "}
        <span className="font-medium">SDE</span> roles in the tech industry.
      </p>

      <p>
        <span className="italic">When I'm not coding</span> & building amazing things for the web, I enjoy hanging out with friends, playing chess, video games & exploring the outdoors. I love {" "}
        <span className="font-medium">learning new things</span> & I really enjoy playing sports(football, cricket & badminton the most). Based in Boston, I am constantly inspired by the vibrant tech and creative communities around me.
      </p>
    </motion.section>
  );
}
