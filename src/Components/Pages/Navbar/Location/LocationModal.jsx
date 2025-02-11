import { IoLocationOutline } from "react-icons/io5";

const LocationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm"
            onClick={onClose} // Close when clicking backdrop
        >
            <div
                className="bg-white p-6 rounded-xl w-full max-w-xl mx-4 shadow-xl relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <IoLocationOutline className="text-blue-500" />
                        Select Your Location
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="space-y-4">
                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search for area, street name..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>

                    {/* Recent Locations */}
                    <div className="space-y-4">
                        <h3 className="text-gray-500 font-medium">Recent Locations</h3>
                        <div className="divide-y divide-gray-100">
                            {['Khulna', 'Dhaka', 'Chittagong', 'Sylhet'].map((location) => (
                                <div
                                    key={location}
                                    className="flex items-center gap-3 p-3 hover:bg-blue-50 cursor-pointer transition-colors group"
                                >
                                    <IoLocationOutline className="text-blue-500 group-hover:text-blue-600" />
                                    <span className="text-gray-700 group-hover:text-blue-600">{location}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Current Location Button */}
                    <button className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Use Current Location
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LocationModal;