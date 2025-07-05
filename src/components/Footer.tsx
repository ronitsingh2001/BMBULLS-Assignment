"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);

  // Listen to scrollYProgress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move the text from left to right (or vice versa)
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-24 gap-10 overflow-hidden relative"
    >
      <div className="relative flex items-center h-50 w-full overflow-hidden">
        <motion.h1
          style={{ x }}
          className="text-6xl md:text-9xl whitespace-nowrap font-bold px-10"
        >
          Trade Anytime,&nbsp;
          <span className="text-[#a35ca2]">Anywhere.</span>
        </motion.h1>

        <div className="absolute top-0 w-full flex justify-center pointer-events-none">
          <Image
            className="p-1 rounded bg-white w-48"
            width={100}
            height={100}
            src="/qr.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <Image
          className="w-48"
          width={100}
          height={100}
          src="/store.png"
          alt=""
        />
      </div>
    </div>
  );
}
