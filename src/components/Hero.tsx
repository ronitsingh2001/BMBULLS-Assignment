import { Button } from "./ui/button";

export default function Hero() {
    return (
      <div className="flex flex-col gap-2 justify-center items-center py-12 pt-24">
        <Button variant="default">Our Process</Button>
  
        <h1 className="text-5xl md:text-6xl flex flex-wrap justify-center gap-2 text-center">
          <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "0ms" }}>
            Become
          </span>
          <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "100ms" }}>
            a
          </span>
          <span className="inline-block animate-fade-in-up opacity-0 text-[#a35ca2]" style={{ animationDelay: "200ms" }}>
            Abcd
          </span>
          <span className="inline-block animate-fade-in-up opacity-0 text-[#a35ca2]" style={{ animationDelay: "300ms" }}>
            Pro
          </span>
          <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "400ms" }}>
            in
          </span>
          <span className="inline-block animate-fade-in-up opacity-0" style={{ animationDelay: "500ms" }}>
            sec...
          </span>
        </h1>
  
        <p className="flex w-full justify-center text-[#ffffffbf]">
          🚀 Sign up. Fund. Trade.
        </p>
      </div>
    );
  }
  