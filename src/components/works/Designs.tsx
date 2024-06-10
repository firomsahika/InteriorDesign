import { IoIosArrowForward } from "react-icons/io";
export default function Designs() {
  return (
    <main>
      <div className="flex flex-col gap-10 py-20 px-32">
        <div className="flex gap-80  ">
          <p className="text-4xl">01. Interior design</p>
          <div className="flex flex-col gap-4">
            <p className="text-[#6D7D7D]">
              At our firm, we specialize in transforming spaces into stylish,{" "}
              <br />
              functional, and personalized environments.
            </p>
            <p  className="flex items-center justify-start py-4 gap-4">
              LEARN MORE <IoIosArrowForward />
            </p>
          </div>
        </div>
        <hr className="border-sm border-[#6D7D7D]"/>
        

        <div className="flex gap-72">
          <p className="text-4xl">02. Furniture design</p>
          <div className="flex-flex-col gap-4">
            <p className="text-[#6D7D7D]">
              Our furniture design services focus on creating pieces that are{" "}
              <br />
              not only aesthetically pleasing but also functional and tailored
              <br /> to your unique needs.
            </p>
            <p className="flex items-center justify-start py-4 gap-4">
              LEARN MORE <IoIosArrowForward />
            </p>
          </div>
        </div>
        <hr className="border-sm border-[#6D7D7D]"/>

        <div className="flex  gap-64">
          <p className="text-4xl text-nowrap">03. Landscape design</p>
          <div className="flex flex-col">
            <p className="text-[#6D7D7D]">
              Our landscape design services transform outdoor spaces into
              beautiful,
              <br /> functional, and sustainable environments.
            </p>
            <p  className="flex items-center justify-start py-4 gap-4">
              LEARN MORE <IoIosArrowForward />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
