import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="mb-2 text-xs opacity-0 hover:opacity-100 italic w-fit mx-auto">
        Looking for an easter egg 🥚? Try clicking Hello!
      </p>
      <small className="mb-2 block text-xs">
        &copy;{new Date().getFullYear()} Apoorv. Code is open source on <a href="https://github.com/apoorvverma/folio-v2" target="_blank" className="underline" >GitHub</a>. Feel free to fork and make your own version.
      </small>
      <p className="mb-2 text-xs block">
        Built with Next.js & Tailwind CSS.
      </p>
        {/* <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting. */}
    </footer>
  );
}
