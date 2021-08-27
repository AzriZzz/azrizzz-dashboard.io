import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-purple"
          onClick={() => setActiveItem(name)}>
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();
  console.log(pathname);

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    else if (pathname === "/projects") setActiveItem("Projects");
    else if (pathname === "/resume") setActiveItem("Resume");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-purple-300 text-purple md:text-2xl">
        {activeItem}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
