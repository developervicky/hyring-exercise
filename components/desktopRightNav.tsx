"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

import { FaUser } from "react-icons/fa6";
import { ChevronDown, ChevronRight, SquareMenu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const DesktopRightNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-greenSecondary/65 backdrop-blur-md border-1 lg2:px-7 lg2:py-4 rounded-lg min-h-full flex items-center gap-2 ">
      <div className="flex lg2:hidden px-4">
        <SquareMenu className="size-10 " />
      </div>

      <div className="hidden lg2:flex">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            onMouseEnter={() => setOpen(true)}
            className=""
            asChild
          >
            <Button
              variant={"ghost"}
              onClick={(e) => e.preventDefault()}
              className="text-base group flex justify-between font-ClashDisplay-Semibold hover:bg-transparent hover:cursor-pointer focus-visible:!ring-0"
            >
              <FaUser className="size-3.5 " />
              Login
              <ChevronDown
                className={cn(
                  open == true ? "rotate-180 transition-all" : "transition-all"
                )}
              />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="w-fit mt-6 !bg-greenSecondary/65 data-[state=open]:!backdrop-blur-md"
          >
            <Button
              variant={"ghost"}
              className="flex items-center w-full justify-between font-bold text-lg hover:!bg-[#E9EBE6] cursor-pointer focus-visible:!ring-0"
            >
              Employer <ChevronRight />
            </Button>
            <Button
              variant={"ghost"}
              className="mt-1 flex items-center w-full justify-between font-bold text-lg hover:!bg-[#E9EBE6] cursor-pointer focus-visible:!ring-0"
            >
              Job Seeker <ChevronRight />
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="relative hidden group ml-4 lg2:flex">
        <div className="absolute inset-0 bg-black rounded-md z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <Button
          variant="startPilot"
          size="lg"
          onClick={() =>
            toast.info("Just Design Level Elements, No Interactions")
          }
          className="relative z-10 transition-transform group-hover:-translate-x-[4px] group-hover:-translate-y-[4px] animate-diagonal-shine"
        >
          Start&nbsp; Pilot
        </Button>
      </div>
    </div>
  );
};

export default DesktopRightNav;
