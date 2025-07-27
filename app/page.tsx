import DesktopLeftNav from "@/components/desktopLeftNav";
import logoIcon from "../public/logo.svg";

import Image from "next/image";
import Link from "next/link";
import DesktopRightNav from "@/components/desktopRightNav";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <>
      <div className="h-full">
        <nav className=" sticky top-10 flex justify-between h-fit items-stretch mt-10 z-50">
          <div className="bg-greenSecondary/65 border-1 px-7 py-4 rounded-lg min-h-full flex items-center lg2:gap-[54px]">
            <Link href={"/"} className="my-auto">
              <Image
                priority
                src={logoIcon}
                alt="logo"
                className="h-[27px] w-[150px] md:h-[30px] md:w-[177px]"
              />
            </Link>
            <DesktopLeftNav />
          </div>
          <DesktopRightNav />
        </nav>
        <main className="h-full">
          <section id="hero" className="h-full">
            <HeroSection />
          </section>
        </main>
      </div>
    </>
  );
}
