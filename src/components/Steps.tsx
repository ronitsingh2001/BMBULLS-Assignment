import { Button } from "@/components/ui/button";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";
import AnimatedCard from "./AnimatedCard";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface NumberRowProps {
  num: string;
  title: string;
}

export const NumberRow = ({ num, title }: NumberRowProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const height = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "0%", "10%", "50%", "70%", "80%"]
  );
  const [isPastHalf, setIsPastHalf] = useState(false);
  useMotionValueEvent(height, "change", (latest) => {
    const percent = parseFloat(latest);
    setIsPastHalf(percent > 0);
  });
  const isEven = parseInt(num, 10) % 2 === 0;
  return (
    <div ref={ref} className="flex min-h-[385px] w-full gap-4 z-10">
      <div className="flex-1 text-end">
        {isEven && (
          <div
            className={`flex flex-col transition-all duration-300 ease-out transform ${
              isPastHalf
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-4 blur-sm"
            }`}
          >
            <p className="font-light text-xl text-white opacity-80">
              Step {num}
            </p>
            <p className="text-2xl text-white">{title}</p>
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center min-h-[385px] w-[80px]">
        <p
          className={`text-[41px] mb-5 font-semibold transition-colors duration-500 ${
            isPastHalf ? "text-white" : "text-gray-900"
          }`}
        >
          {num}
        </p>
        <div className="absolute top-[70px] bottom-0 w-[3px] bg-[#1f1b27]" />
        {isInView && (
          <motion.div
            style={{
              width: "3px",
              backgroundColor: "#d5c5fa",
              position: "absolute",
              top: "70px",
              bottom: 0,
              height,
            }}
            initial={{ height: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )}
      </div>
      <div className="flex-1 flex items-start justify-start pl-4">
        {!isEven && (
          <div
            className={`flex flex-col transition-all duration-300 ease-out transform ${
              isPastHalf
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-4 blur-sm"
            }`}
          >
            <p className="font-light text-lg opacity-50">Step {num}</p>
            <p className="text-xl opacity-100">{title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Steps() {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-1 opacity-25"
        style={{ backgroundImage: "url('/bg1.png')" }}
        aria-hidden="true"
      ></div>
      <NumberRow num="01" title="Register your account" />
      <NumberRow num="02" title="Deposit your funds" />
      <NumberRow num="03" title="KYC" />
      <NumberRow num="04" title="Start Trading & Earn Profits" />
      <div className="mt-8">
        <AnimatedCard>
          <Button
            variant="outline"
            className="group bg-[#6242A5] text-lg rounded-xl border-0 p-6 hover:bg-[#7159a9] hover:text-white flex items-center"
          >
            Open Free Account
            <span className="ml-2 group-hover:hidden transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
            <span className="ml-2 hidden group-hover:inline transition-all">
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </AnimatedCard>
      </div>
    </div>
  );
}
