import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="w-full fixed z-10">
      <div className="flex items-center justify-center h-20 backdrop-blur-3xl">
        <nav className="hidden lg:flex md:flex flex gap-80 items-center justify-center ">
          <p>I N T E R I A</p>
          <ul className="hidden lg:flex md:flex  gap-14 items-center justify-center">
            <li>Home</li>
            <li>Service</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
          <button className="hidden lg:flex md:flex  border border-gray-500 px-6  py-2 rounded-2xl">
            GET STARTED
          </button>
        </nav>

        <div className="flex items-center gap-60  justify-between item lg:hidden md:hidden">
          <p>I N T E R I A</p>
          {toggle ? (
            <BiMenuAltRight size={40} onClick={handleToggle} />
          ) : (
            <BiMenuAltRight size={40} onClick={handleToggle} />
          )}

          {toggle && (
            <div>
              <nav className="flex gap-80 items-center justify-center ">
                <p>I N T E R I A</p>
                <ul className="flex gap-14 items-center justify-center">
                  <li>Home</li>
                  <li>Service</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
                <button className=" border border-gray-500 px-6  py-2 rounded-2xl">
                  GET STARTED
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
