"use client";
import React, { useEffect, useState } from "react";
import { HiSparkles } from "react-icons/hi2";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

const HeroInput = () => {
  const [placeholderText, setPlaceholderText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [inputValue, setInputValue] = useState("");

  // Store the state when paused so we can resume
  const [pausedState, setPausedState] = useState({
    placeholderText: "",
    currentIndex: 0,
    isDeleting: false,
    currentTextIndex: 0,
  });

  // Array of texts to cycle through
  const texts = [
    "Search for AI Agents...",
    "Find what you need...",
    "Explore our catalog...",
    "Type your query here...",
  ];

  useEffect(() => {
    // Stop animation when input is focused OR when there's text in the input
    if (isFocused || inputValue.length > 0) return;

    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentText.length) {
            setPlaceholderText(currentText.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Finished typing current text, wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setPlaceholderText(currentText.slice(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isDeleting, currentTextIndex, isFocused, inputValue]); // Added inputValue to dependencies

  // Cursor blinking effect
  useEffect(() => {
    if (isFocused || inputValue.length > 0) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isFocused, inputValue]); // Added inputValue to dependencies

  const handleFocus = () => {
    // Save current state before pausing
    const stateToSave = {
      placeholderText,
      currentIndex,
      isDeleting,
      currentTextIndex,
    };
    setPausedState(stateToSave);

    setIsFocused(true);
    setShowCursor(false);
  };

  const handleBlur = () => {
    setIsFocused(false);

    // Only resume animation if input is empty
    if (inputValue.length === 0) {
      setShowCursor(true);

      // Validate the paused state before restoring
      const targetText = texts[pausedState.currentTextIndex];
      if (targetText && pausedState.currentIndex <= targetText.length) {
        // Resume from where we left off
        setPlaceholderText(pausedState.placeholderText);
        setCurrentIndex(pausedState.currentIndex);
        setIsDeleting(pausedState.isDeleting);
        setCurrentTextIndex(pausedState.currentTextIndex);
      } else {
        // Reset to beginning if invalid state
        setPlaceholderText("");
        setCurrentIndex(0);
        setIsDeleting(false);
        setCurrentTextIndex(0);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    // If user clears the input and it's not focused, resume animation
    if (e.target.value.length === 0 && !isFocused) {
      setShowCursor(true);
      // Resume from paused state or restart
      const targetText = texts[pausedState.currentTextIndex];
      if (targetText && pausedState.currentIndex <= targetText.length) {
        setPlaceholderText(pausedState.placeholderText);
        setCurrentIndex(pausedState.currentIndex);
        setIsDeleting(pausedState.isDeleting);
        setCurrentTextIndex(pausedState.currentTextIndex);
      } else {
        setPlaceholderText("");
        setCurrentIndex(0);
        setIsDeleting(false);
        setCurrentTextIndex(0);
      }
    }
  };

  return (
    <div
      id="input_cta"
      className="mt-15 relative w-full max-w-3xl h-[59.5px] md:h-[75px] shadow-md border-white border-8 rounded-xl"
    >
      <div className="relative">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient
              id="green-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="oklch(72.3% 0.219 149.579)" />
              <stop offset="30%" stopColor="oklch(79.2% 0.209 151.711)" />
              <stop offset="100%" stopColor="oklch(79.2% 0.209 151.711)" />
            </linearGradient>
          </defs>
        </svg>
        <HiSparkles
          className="size-5 md:size-9 top-3 left-4 absolute z-10"
          style={{ fill: "url(#green-gradient)" }}
        />
      </div>

      <div className="relative h-full">
        <Input
          className="h-full pl-12 md:pl-18 !text-lg font-semibold border-1 bg-white border-gray-200"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Custom animated placeholder with thick cursor - only show when input is empty and not focused */}
        {!isFocused && inputValue.length === 0 && (
          <div className="absolute left-12 md:left-18 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm md:text-lg font-semibold text-black flex items-center">
            <span>{placeholderText}</span>
            {/* Thick blinking cursor */}
            <span
              className={`ml-1 w-1 h-6 bg-black transition-opacity duration-100 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        )}

        <Button
          variant={"startPilot"}
          onClick={() => {
            toast.info(
              inputValue
                ? `Search Input: ${inputValue}, Backend yet to connect`
                : "Type some Input"
            );
          }}
          className="absolute right-0 top-0 py-[20px] md:py-[28px] px-1 md:px-6 text-sm  md:text-lg animate-diagonal-shine font-kodeMono font-semibold"
        >
          Prepare Simulation
        </Button>
      </div>
    </div>
  );
};

export default HeroInput;
