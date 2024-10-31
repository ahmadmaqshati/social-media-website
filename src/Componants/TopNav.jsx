import { useState } from 'react';
import MobileNav from './MobileNav';
import AuthModal from './AuthModal';

export default function TopNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const links = ['Tarmeez', 'Home', 'Profile']
    const [activeLink, setActiveLink] = useState('Tarmeez');
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState('login')

    const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const linksList = links.map((link, index) => (
        <a key={index} href="#"
            onClick={() => setActiveLink(link)}
            className={`font-semibold ${activeLink === link ? 'text-blue-600' : 'text-gray-600'}`}>
            {link}
        </a>
    ))

    return (
        <>
            <header className="relative inset-x-0 top-0 z-50 mx-3">
                <div style={{ background: "#F9F7FB" }} className="container mx-auto max-w-5xl">
                    <nav className="nav flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <div className="flex space-x-4">
                                {linksList}
                            </div>
                        </div>

                        {/* Menue Btn */}
                        <div className="flex lg:hidden">
                            {/*يعني أن العنصر سيكون مخفيًا على الشاشات الكبيرةlg:hidden ان كلاس 
                     أي لن يظهر على الشاشات التي عرضها أكبر أو يساوي 1024 بكسل  */}
                            <button
                                onClick={toggleMobileMenu} // استبدل anotherFunction بالدالة المناسبة
                                type="button"
                                className="w-10 p-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
                            >
                                <span className="sr-only">Another Action</span>
                                <img src="https://www.svgrepo.com/show/415613/menu-basic-other.svg" alt="" />

                            </button>
                        </div>
                        {/* ==Menue Btn== */}

                        {/* Hide auth buttons on small screens */}
                        <div className="hidden lg:flex sm:ml-3 gap-2">
                            <button
                                onClick={() => {
                                    toggleModal()
                                    setModalType('login')
                                }}
                                type="button"
                                className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Login
                            </button>
                            <button
                                onClick={() => {
                                    toggleModal()
                                    setModalType('signup')
                                }}
                                type="button"
                                className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Signup
                            </button>
                        </div>
                        {/* ==Hide auth buttons on small screens== */}
                    </nav>
                </div>
                {isMobileMenuOpen && (
                    <MobileNav
                        toggleMobileMenu={toggleMobileMenu}
                        linksList={linksList}
                        toggleModal={toggleModal}
                        setModalType={setModalType}
                    />
                )}
            </header>
            <AuthModal toggleModal={toggleModal} isModalOpen={isModalOpen}
                modalType={modalType} setModalType={setModalType}
            />
        </>
    );
}
