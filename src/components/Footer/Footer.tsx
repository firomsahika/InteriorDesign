import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import CopyWright from "../copywright/CopyWright";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main className="w-full items-center justify-center bg-[#191D1D]">
      <div className=" flex flex-col items-center justify-center lg:md:px-32 text-white py-16 px-6">
        <div className="flex flex-col md:lg:flex-row lg:md:gap-96 gap-6">
          <div className="grid grid-cols-3 md:lg:grid-cols-6 gap-16 text-md items-center justify-center">
            <p>home</p>
            <p>about</p>
            <p>services</p>
            <p>team</p>
            <p>blog</p>
            <p>contact</p>
          </div>

          <div>
            <h1 className="flex-nowrap py-20 text-nowrap">I N T E R I A</h1>
          </div>
        </div>
        <hr className="w-full border-sm border-gray-600 " />

        <div className="flex flex-col lg:md:flex-row items-center justify-between lg:md:gap-96 gap-6 text-white lg:md:py-20 py-6">
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/firomsa.hika.5/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaFacebook size={34} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaTwitter size={34} />
            </a>
            <a
              href="https://www.linkedin.com/in/firomsa-hika-633a03254/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaLinkedin size={34} />
            </a>
            <a
              href="https://www.instagram.com/fromsahika/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <FaInstagram size={34} />
            </a>
          </div>

          <div>
            <p>
              Transforming spaces, creating unique interiors tailored <br />
              to your lifestyle and taste.Connect with us on social media to
              stay <br /> updated with our latest designs and projects
            </p>
          </div>
        </div>
      </div>
      <CopyWright />
    </main>
  );
}
