
const SearchBar = () => {
    return (
        <div className="flex items-center">
            <input type="text" name="" id=""
                placeholder=" Search here..."
                className="border-2 border-gray-300 shadow-md px-3 py-2 font-thin text-sm rounded-sm w-[30vw]" />

            <button className="uppercase font-semibold text-white  bg-green px-3 py-2 rounded-sm shadow-md ">Search</button>
        </div>
    )
}

export default SearchBar