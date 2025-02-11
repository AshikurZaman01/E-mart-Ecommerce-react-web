import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import LocationModal from "./LocationModal";

const Location = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="flex flex-col items-center bg-[#f2f6ff] p-3 rounded-tl-2xl rounded-br-2xl cursor-pointer hover:bg-[#e2e9ff] transition-colors duration-300"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="flex items-center gap-2">
                    <IoLocationOutline className="text-green text-xm" />
                    <span className="font-semibold text-gray-700">9203</span>
                    <TiArrowSortedDown />
                </div>
                <span className="text-gray-400 font-semibold text-xs">Khulna</span>
            </div>

            {/* Modal - Separate from the trigger */}
            <LocationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default Location;