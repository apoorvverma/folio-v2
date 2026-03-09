"use client";
// @ts-ignore

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaSteam } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Typewriter } from 'react-simple-typewriter'

// const expYears = new Date().getFullYear() - 2022;
const startDate = new Date('2021-06-01');
const currentDate = new Date();
let years = currentDate.getFullYear() - startDate.getFullYear();
const m = currentDate.getMonth() - startDate.getMonth();
if (m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate())) {
    years--;
}
const expYears = years;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const texts = [
    "Hello, friend!",
    "Bonjour, ami!",
    "Hallo, Freund!",
    "Ciao, amico!",
    "Hola, amigo! (Kaise ho Thik ho?)",
    "こんにちは、友達 (Konnichiwa, tomodachi)!",
    "你好，朋友 (Nǐ hǎo, péngyǒu)!",
    "안녕하세요, 친구 (Annyeonghaseyo, chingu)!",
    "नमस्ते दोस्त (Namaste dost)!"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.h3
        className="mb-2 text-3xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="w-fit mx-auto cursor-grab" onClick={handleClick}>
          {texts[currentIndex]}
        </div>
      </motion.h3>

      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://raw.githubusercontent.com/apoorvverma/folio-v2/main/public/pfp.jpeg"
              alt="Apoorv portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          {/* <motion.span
            className="animate-wave absolute bottom-0 right-0 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-3xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I'm <span className="font-bold">Apoorv Verma.<br/></span> 
        I am {" "}
        <Typewriter
            words={['an Engineer!', 'a Developer!', 'a DevOps Engineer!', 'a Designer!', 'a Programmer!', 'just a chill guy!', 'an Innovator!', 'a <coder/>']}
            loop={0}
            cursor
            cursorStyle='|'
            cursorBlinking
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          /> <br/>
        I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">{expYears}+ years</span> of experience.
        
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Apoorv Resume.pdf"
          target="_blank"
        >
          Resume{" "}
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/apoorvv"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/apoorvverma"
          target="_blank"
        >
          <FaGithub />
        </a>
        {/* <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/apoorv.vrma/"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/apoorv.verma.33633/"
          target="_blank"
        >
          <FaFacebook />
        </a> */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://x.com/aprvrma"
          target="_blank"
        >
          <FaXTwitter />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://steamcommunity.com/id/apoorverma/"
          target="_blank"
        >
          <FaSteam />
        </a>
      </motion.div>
    </section>
  );
}
