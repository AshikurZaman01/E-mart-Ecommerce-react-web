import { MdOutlineTimer } from "react-icons/md"

const TimeBar = () => {


    return (
        <div>
            <p>Earliest <span className="text-dark-green font-semibold">Pick Up</span> Point Available</p>


            <div className="flex items-center gap-2">
                <MdOutlineTimer className="text-orange-400 text-xl" />
                <p className="text-[14px] font-semibold">Today 09:00 AM - 12:00 PM</p>
            </div>

        </div>
    )
}

export default TimeBar