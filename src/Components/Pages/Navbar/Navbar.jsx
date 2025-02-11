import Location from "./Location/Location"
import Logo from "./Logo/Logo"
import MyAccount from "./MyAccount/MyAccount"
import SearchBar from "./SearchBar/SearchBar"
import TimeBar from "./TimeBar/TimeBar"

const Navbar = () => {
    return (
        <div className="bg-white shadow-md">

            <nav className="container mx-auto ">
                <div className="flex items-center gap-4">

                    {/* Logo */}
                    <Logo />


                    <Location />

                    <div className="flex justify-between items-center w-full ">
                        <TimeBar />

                        <SearchBar />

                        <MyAccount />

                    </div>

                </div>


            </nav>

        </div>
    )
}

export default Navbar