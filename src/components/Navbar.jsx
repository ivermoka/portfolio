import { useEffect } from "react";
import { $currentTab, setTab } from "../store";
import Tab from "./Tab";
import { BiLogoGoLang } from "react-icons/bi";

const Navbar = ({ currentTab }) => {
  return (
    <>
      <div className="fixed w-full z-50">
        <section className="h-[4vh] lg:h-[4vh] sm:h-[5.5vh] flex items-center justify-center bg-[#26292d] text-[#adb0b5] text-lg sm:text-3xl lg:text-lg">
          ivermoka_portfolio
          <div className="absolute right-0 pr-4">- # X</div>
        </section>
        <section className="h-[4.5vh] lg:h-[4.5vh] sm:h-[6vh] w-full flex justify-start bg-[#1D1F23] text-[#828488]">
          <Tab name="hello.html" currentTab={currentTab} />
          <Tab name="about.go" currentTab={currentTab} />
          <Tab name="projects.json" currentTab={currentTab} />
        </section>
      </div>
    </>
  );
};

export default Navbar;
