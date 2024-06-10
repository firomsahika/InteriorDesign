import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import CopyWright from "../copywright/CopyWright";


export default function Footer() {
  return (
    <main className="w-full items-center justify-center">
      <div className=" flex flex-col items-center justify-center px-32 text-white py-16">
        <div className="flex gap-96">
          <div className="flex gap-16 text-md items-center justify-center">
            <p>home</p>
            <p>about</p>
            <p>services</p>
            <p>team</p>
            <p>blog</p>
            <p>contact</p>
          </div>

          <div>
            <h1 className="flex-nowrap py-20">I N T E R I A</h1>
          </div>
        </div>
        <hr className="w-full border-sm border-gray-600 " />

        <div className="flex items-center justify-between gap-96 text-white py-20">
          <div className="flex gap-6">
          <FaFacebook className="" size={34} />
          <FaTwitter size={34} />
          <FaLinkedin size={34} />
          <FaInstagram size={34} />
          </div>

          <div>
            <p>Transforming spaces, creating unique interiors tailored  <br />to your lifestyle and taste.Connect with us on social media to stay <br /> updated with our latest designs and projects</p>
          </div>
        </div>
        
      </div>
      <CopyWright />
    </main>
  );
}
