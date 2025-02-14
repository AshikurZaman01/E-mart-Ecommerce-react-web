const SearchBar = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="border-2 border-gray-300 shadow-md px-10 py-2 font-thin text-sm rounded-sm w-[30vw]
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100
                           transition-all duration-200"
                />
                <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            <button
                className="uppercase font-semibold text-white bg-green px-6 py-2.5 rounded-sm shadow-md
                       hover:bg-green-600 transition-colors duration-200 active:scale-95"
            >
                Search
            </button>
        </div>
    )
}

export default SearchBar