"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-24 gap-10"
    >
      <div className="relative flex items-center h-50 w-full overflow-hidden">
        <motion.h1
          style={{ x }}
          className="text-6xl md:text-9xl whitespace-nowrap font-bold px-10"
        >
          Trade Anytime,&nbsp;
          <span className="text-[#a35ca2]">Anywhere.</span>
        </motion.h1>

        <div className="absolute top-0 w-full flex justify-center">
          <div className="p-4 rounded bg-stone-900 opacity-90 w-48">
            <Image
              className="rounded bg-white w-48"
              width={100}
              height={100}
              src="/qr.png"
              alt=""
            />
          </div>
        </div>
      </div>
        <Image
          className="w-48"
          width={100}
          height={100}
          src="/store.png"
          alt=""
        />
    </div>
  );
}
