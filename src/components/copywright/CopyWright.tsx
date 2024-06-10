import { FaRegCopyright } from "react-icons/fa";

export default function CopyWright() {
  return (
    <div className="bg-[#212828] w-full min-h-40 px-32 text-white flex items-center justify-between">
      <div className="flex items-center justify-center">
        <p className="flex items-center justify-center gap-2"><FaRegCopyright />Copyright by Deyasin-Studio – All right reserved.</p>
      </div>

      <div className="flex gap-4">
        <p>T E R M S</p>
        <p>P R I V A C Y</p>
      </div>
    </div>
  )
}
