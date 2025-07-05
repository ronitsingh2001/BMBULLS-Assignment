"use client";

import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import PlansSection from "@/components/Plan";
import PayoutsSection from "@/components/Payout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#060710] text-white">
      <Hero />
      <Steps />
      <PlansSection />
      <PayoutsSection />
      <Footer />
    </div>
  );
}
