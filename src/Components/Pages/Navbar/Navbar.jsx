import Location from "./Location/Location"
import Logo from "./Logo/Logo"
import TimeBar from "./TimeBar/TimeBar"

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">

            <nav className="container mx-auto ">
                <div className="flex items-center gap-4">

                    {/* Logo */}
                    <Logo />


                    <Location />

                    <TimeBar />

                </div>


            </nav>

        </div>
    )
}

export default Navbar