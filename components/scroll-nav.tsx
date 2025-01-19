"use client";

import React from "react";
import Image from "next/image";

export default function ScrollNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight,
      behavior: "smooth" 
    });
  };

  return (
    <div className="fixed bottom-6 left-6 flex items-center">
      <div className="relative group">
        <Image
          src="/v.svg"
          alt="Scroll to bottom"
          width={35}
          height={35}
          className="absolute top-0 left-0 cursor-pointer transition-all duration-500 rotate-180 filter [filter:drop-shadow(0_0_3px_rgba(135,206,235,0.5))] group-hover:rotate-0 group-hover:translate-x-8 opacity-0 group-hover:opacity-100"
          onClick={scrollToBottom}
        />
        <Image
          src="/a.svg"
          alt="Scroll to top"
          width={35}
          height={35}
          className="cursor-pointer transition-all duration-300 filter [filter:drop-shadow(0_0_3px_rgba(135,206,235,0.5))]"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
}