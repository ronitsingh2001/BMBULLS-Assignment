import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import BottomLine from "./ui/BottomLine";
import AnimatedCard from "./AnimatedCard";

const features = [
  "Who It's For",
  "Initial Capital Requirement",
  "Spread Advantage",
  "Trading Fees",
  "Leverage Capacity",
  "Minimum Lot Size",
  "Trade Execution Limit",
  "Open Position Capacity",
  "Stop Out Threshold",
  "Margin Call Activation",
  "Swap Policy",
  "Risk Exposure",
  "Asset Options",
];

const plans = [
  {
    name: "Abcd Vintage",
    desc: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    values: [
      "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      "$10%",
      "from 0.2 pips",
      "No Commission",
      "1:Unlimited",
      "0.01",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Moderate",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    name: "Abcd Cent",
    desc: "Designed for beginners ready to step into the trading world with minimal risk.",
    values: [
      "Designed for beginners ready to step into the trading world with minimal risk.",
      "$10",
      "from 0.3 pips",
      "Zero Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Low",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    name: "Abcd Pro",
    desc: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    values: [
      "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      "$500",
      "from 0.1 pips",
      "No Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "High",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
];

export default function PlansSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-2">
      <div className="flex flex-col gap-4 justify-center items-center py-12 pt-24">
        <Button variant="default">Compare Plan</Button>
        <h1 className="text-5xl md:text-6xl flex flex-wrap justify-center gap-2 text-center">
          <span
            className="inline-block animate-fade-in-up opacity-0"
            style={{ animationDelay: "0ms" }}
          >
            Compare
          </span>
          <span
            className="inline-block animate-fade-in-up opacity-0"
            style={{ animationDelay: "100ms" }}
          >
            your
          </span>
          <span
            className="inline-block animate-fade-in-up opacity-0 text-[#a35ca2]"
            style={{ animationDelay: "200ms" }}
          >
            Abcd
          </span>
          <span
            className="inline-block animate-fade-in-up opacity-0"
            style={{ animationDelay: "300ms" }}
          >
            Plan
          </span>
        </h1>

        <p className="flex w-full justify-center text-[#ffffffbf] animate-fade-up opacity-0">
          Flexible Deposits for Every Trader
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full px-12">
        <Card className="hidden md:flex flex-col justify-between py-8 pr-6 min-w-[220px] bg-transparent border-none shadow-none">
          <CardHeader />
          <CardContent className="flex flex-col gap-2">
            {features.map((feature) => (
              <React.Fragment key={feature}>
                <div
                  className={`text-left text-gray-300 text-sm py-2 font-normal`}
                >
                  {feature}
                </div>
                <BottomLine />
              </React.Fragment>
            ))}
          </CardContent>
          <CardFooter />
        </Card>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          {plans.map((plan, id) =>
            id === 1 ? (
              <AnimatedCard key={id}>
                <Card
                  key={plan.name}
                  className="bg-transparent text-white min-h-[700px] p-6 border-0 rounded-2xl flex flex-col"
                >
                  <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-3xl font-medium">
                      {plan.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 flex-1 px-0">
                    {plan.values.map((value, i) => (
                      <React.Fragment key={i}>
                        <div className="text-center text-gray-100 text-sm py-2">
                          {value}
                        </div>
                        <BottomLine />
                      </React.Fragment>
                    ))}
                  </CardContent>
                  <CardFooter className="pt-8 flex justify-center">
                    <Button
                      variant="outline"
                      className="rounded-lg bg-gradient-to-r from-[#7C5BD6] to-[#a990ef] hover:bg-[#8e6be0]  px-8 py-5 max-w-xs shadow-none border-none"
                    >
                      Start Trading
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ) : (
              <Card
                key={plan.name}
                style={{
                  background:
                    id === 1
                      ? undefined
                      : "linear-gradient(156deg, #3811387d, #000 72%)",
                }}
                className={`text-white min-h-[700px] p-6 ${
                  id === 1
                    ? "bg-transparent border-0"
                    : "border border-[#232336] shadow-lg"
                } rounded-2xl flex flex-col`}
              >
                <CardHeader className="text-center space-y-2">
                  <CardTitle className="text-3xl font-medium">
                    {plan.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 flex-1 px-0">
                  {plan.values.map((value, i) => (
                    <React.Fragment key={i}>
                      <div className="text-center text-gray-100 text-sm py-2">
                        {value}
                      </div>
                      <BottomLine />
                    </React.Fragment>
                  ))}
                </CardContent>
                <CardFooter className="pt-8 flex justify-center">
                  <Button
                    variant="outline"
                    className="rounded-lg bg-gradient-to-r from-[#7C5BD6] to-[#a990ef] hover:bg-[#8e6be0]  px-8 py-5 max-w-xs shadow-none border-none"
                  >
                    Start Trading
                  </Button>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
