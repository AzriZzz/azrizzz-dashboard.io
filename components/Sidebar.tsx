import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";

import { useTheme } from "next-themes";

function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src={`/images/profile_image.png`}
        layout="intrinsic"
        alt="User Avatar"
        className="mx-auto rounded-full "
        height="145"
        width="128"
      />

      <h3 className="my-4 text-xl tracking-wider font-sm">Muhammad Azri</h3>
      <p className="px-2 py-1 my-3 dark:bg-black-500">Frontend Engineer</p>
      <a
        href="/assets/azri-resume.pdf"
        download="azri-resume.pdf"
        className="flex items-center content-center justify-center px-2 py-1 my-3 dark:bg-black-500"
      >
        Download Resume
      </a>

      {/* social icons */}
      <div className="flex justify-center mx-auto my-5 space-x-5 w-12/12 text-purple md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Selangor, Malaysia</span>
        </div>
        <p className="my-2">muhdazri.biz@gmail.com</p>
      </div>

      <div className="flex justify-center pt-20 mx-auto space-x-5 text-2xl ">
        <AiOutlineMail
          className="cursor-pointer text-purple"
          onClick={() => window.open("mailto:muhdazri.biz@gmail.com")}
        />

        {theme === "light" ? (
          <FiSun className="cursor-pointer text-purple" onClick={changeTheme} />
        ) : (
          <FiMoon className="cursor-pointer text-purple" onClick={changeTheme} />
        )}
      </div>
      {/* <button
        className="w-8/12 px-5 py-2 my-2 text-sm text-black border-2 rounded-full dark:text-white focus:outline-none"
        onClick={() => window.open("mailto:muhdazri.biz@gmail.com")}
      >
        Email Me
      </button>
      <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-sm text-black border-2 rounded-full outline-none dark:text-white">
        Toggle Theme
      </button> */}
    </div>
  );
}

export default Sidebar;
