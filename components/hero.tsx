import React from "react";
import HeroInput from "./hero-input";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mt-32">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center font-ClashDisplay-Semibold bg-gradient-to-b to-green-500 via-green-700 from-green-700 bg-clip-text text-transparent">
        AI &nbsp;Interviewer
      </h1>
      <p className="mt-3 text-lg md:text-xl lg2:!text-2xl text-muted-foreground text-center ">
        Records 🎥, Evaluates 📊, Detects cheating candidates 🕵️ with detailed
        converstional intelligence 💬
      </p>
      <HeroInput />
    </div>
  );
};

export default HeroSection;
