import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const UserDetailsSidebar = ({ onClose }) => {
    return (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform duration-300 translate-x-0">
            <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={onClose}
            >
                <IoIosCloseCircleOutline className='text-3xl' />
            </button>

            <div className="flex flex-col items-center mt-10">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="User"
                    className="w-24 h-24 rounded-full object-cover"
                />
                <h2 className="text-xl font-semibold mt-4">John Doe</h2>
            </div>

            {/* Pickup Address */}
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Pickup Address</h3>
                <p className="text-gray-600">123 Main St, Springfield, IL</p>
            </div>

            {/* Buy History */}
            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Buy History</h3>
                <ul className="text-gray-600">
                    <li>Order #123 - $50.00</li>
                    <li>Order #124 - $75.00</li>
                    <li>Order #125 - $100.00</li>
                </ul>
            </div>

            {/* Edit Details Button */}
            <div className="p-6">
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Edit Details
                </button>
            </div>
        </div>
    );
};

export default UserDetailsSidebar;