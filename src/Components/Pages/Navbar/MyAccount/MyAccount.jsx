import { useState } from 'react';
import UserDetailsSidebar from './UserDetailsSidebar';

const MyAccount = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleAccountClick = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div
                className="grid text-center bg-gray-200 rounded-lg py-3 px-5 hover:bg-gray-300 duration-300 cursor-pointer"
                onClick={handleAccountClick}
            >
                <span className="text-gray-600 text-xs font-medium">Hello UserName</span>
                <span className="font-semibold text-sm text-gray-800">My Account</span>
            </div>

            {isSidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={closeSidebar}
                    />
                    <UserDetailsSidebar onClose={closeSidebar} />
                </>
            )}
        </>
    );
};

export default MyAccount;