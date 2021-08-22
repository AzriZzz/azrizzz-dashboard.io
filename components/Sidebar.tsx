import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";

function Sidebar() {
  return (
    <div>
      {/* <div className='relative items-center justify-center flex-shrink-0 w-60 h-60 md:h-52 md:w-80 '>
      <Image
        src={`/images/avatar.jpg`}
        layout="fill"
        alt="User Avatar"
        objectFit="cover"
      />
      </div> */}
      <img
        src={`/images/avatar.jpg`}
        alt="User Avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-urbanist">
        <span className="text-green">Azri</span>
        Zzz
      </h3>
      <p className="px-2 py-1 my-3">Frontend Engineer</p>
      <a
        href=""
        download="name"
        className="flex items-center content-center justify-center px-2 py-1 my-3"
      >
        Download Resume
      </a>

      {/* social icons */}
      <div className="flex justify-around mx-auto my-5 w-12/12 text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Selangor, Malaysia</span>
        </div>
        <p className="my-2">muhdazri.biz@gmail.com</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-sm text-black border-2 rounded-full focus:outline-none"
        onClick={() => window.open("mailto:muhdazri.biz@gmail.com")}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-sm text-black border-2 rounded-full">
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
