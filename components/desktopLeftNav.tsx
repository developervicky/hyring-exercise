"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const DesktopLeftNav = () => {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="relative flex gap-5">
        <NavigationMenuItem className="hidden lg2:flex">
          <NavigationMenuTrigger
            onClick={(e) => e.preventDefault()}
            className="text-base font-ClashDisplay-Semibold bg-transparent hover:!bg-[#E9EBE6] cursor-pointer"
          >
            AI &nbsp;Agents
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!mt-7 group-data-[viewport=false]/navigation-menu:bg-greenSecondary group-data-[viewport=false]/navigation-menu:backdrop-blur-md focus-visible:border-0 focus-visible:ring-0">
            <ul className="grid w-[445px] gap-4 ">
              <li>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[10px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        AI Interviewer
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm/[16px] font-normal ">
                        Conducts, records, proctors, and evaluates in a video
                        interview.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[10px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        AI Phone Screener
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm/[16px] font-normal ">
                        AI conducts phone interviews, evaluates responses, &
                        provides a score to identify the best fit.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden lg2:flex">
          <NavigationMenuTrigger
            onClick={(e) => e.preventDefault()}
            className="text-base font-ClashDisplay-Semibold bg-transparent hover:!bg-[#E9EBE6] cursor-pointer"
          >
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!mt-7 group-data-[viewport=false]/navigation-menu:bg-greenSecondary group-data-[viewport=false]/navigation-menu:backdrop-blur-md">
            <ul className="grid w-[445px] gap-4 ">
              <li>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[10px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Blog
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm/[16px] font-normal ">
                        Read expert insights, tips, and the latest trends in
                        AI-driven hiring.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[10px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Compare
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm/[16px] font-normal ">
                        Explore detailed comparisons and see how our AI
                        solutions outperform competitors.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[10px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Help Center
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm/[16px] font-normal ">
                        Find answers, resources, and guides to get the most out
                        of our AI interviewing tools.
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[10px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        ROI Calculator
                      </div>
                      <div className="mt-1 text-muted-foreground text-sm/[16px] font-normal ">
                        Estimate your potential savings and efficiency gains
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden lg2:flex">
          <NavigationMenuTrigger
            onClick={(e) => e.preventDefault()}
            className="text-base font-ClashDisplay-Semibold bg-transparent hover:!bg-[#E9EBE6] cursor-pointer"
          >
            Use Cases
          </NavigationMenuTrigger>
          <NavigationMenuContent className="!mt-7 group-data-[viewport=false]/navigation-menu:bg-greenSecondary group-data-[viewport=false]/navigation-menu:backdrop-blur-md">
            <ul className="w-[500px]">
              <NavigationMenuLink className="p-4 hover:bg-transparent">
                <h2 className="text-base font-semibold">Industry Use Cases</h2>
                <p className="mb-4 mt-1 text-sm text-muted-foreground">
                  Discover real-world examples of how our AI transforms hiring
                  across industries.
                </p>
              </NavigationMenuLink>
              <li className="grid grid-cols-2 gap-4">
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Education
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Retail
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Manufacturing
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        HealthCare
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Hospitality
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Recruitment Agency
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Technology
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        BFSI
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Semiconductor & Hardwares
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6]" asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        EV & Automative
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink className="hover:!bg-[#E9EBE6] " asChild>
                  <Link href="#">
                    <div className="p-[3px]">
                      <div className="font-semibold text-[16px]/[24px] ">
                        Aerospace & Defense
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopLeftNav;
