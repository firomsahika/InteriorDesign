import  { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Nav() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMobileMenu = () => {
    setToggle(false);
  };


  return ( 
    <main className="w-full fixed z-10 items-center justify-center text-white font-kanit">
      <div className="flex items-center justify-center h-16 backdrop-blur-3xl px-4">
        
        <nav className="hidden md:lg:flex gap-60 items-center justify-center">
          <p className="">I N T E R I A</p>
          <ul className="flex gap-16 items-center justify-center ">
            <Link to="/" ><li>Home</li></Link>
            <Link to="service"><li>Service</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/about"><li>About</li></Link>
          </ul>
          <button className="border border-gray-500 px-6 py-2 rounded-2xl">
            GET STARTED
          </button>
        </nav>
        <div className="md:hidden lg:hidden flex items-center justify-center gap-60">
        <p className="text-nowrap flex-nowrap">I N T E R I A</p>
          <BiMenuAltRight size={40} onClick={handleToggle} />
        </div>
      </div>
      {toggle && (
        <div className="md:lg:hidden bg-[#212828] w-full text-white flex flex-col items-center transition-transform duration-150">
          
          <ul className="flex flex-col items-center gap-4 py-4 ">
         
             <Link to="/" onClick={closeMobileMenu}><li>Home</li></Link>
            <Link to="/service" onClick={closeMobileMenu}><li>Service</li></Link>
            <Link to="/blog" onClick={closeMobileMenu}><li>Blog</li></Link>
            <Link to="/about" onClick={closeMobileMenu}><li>About</li></Link>
          </ul>
          <button className="border border-gray-500 px-6 py-2 rounded-2xl mb-4">
            GET STARTED
          </button>
        </div>
      )}
    </main>
  );
}
