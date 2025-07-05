import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { animate } from "motion";
import { motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import AnimatedCard from "./AnimatedCard";

export default function PayoutsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(701);
  const rounded = useTransform(() => Math.round(count.get()));
  useEffect(() => {
    const controls = animate(count, 999, { duration: 300 });
    return () => controls.stop();
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Button variant="default" className="px-8">
          Payout
        </Button>
        <div className="relative flex flex-col items-center text-center z-10">
          <h2
            className={`text-4xl md:text-6xl text-white transition-all duration-1000 ease-out ${
              isInView
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-4 blur-sm"
            }`}
            ref={ref}
          >
            We&apos;ve Paid Out Over <br /> $1M to Traders
          </h2>

          <p className="text-md text-gray-400">
            Your Trust is Our Fuel—Power Up with Abcd
          </p>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full z-10">
        <div className="text-[12vw] flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#e0e0e0] to-[#a084e8]">
          $999, <motion.pre className="text-[12vw]">{rounded}</motion.pre>{" "}
          <span>+</span>
        </div>
        <div className="mt-8">
          <AnimatedCard>
            <Button
              className="bg-black group border-0 rounded-xl flex items-center hover:bg-stone-950 hover:text-white"
              variant="outline"
            >
              Are you Next?
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
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute scale-200  -bottom-100 object-cover opacity-40 z-1"
        src="/vid.mp4"
      />
    </section>
  );
}
