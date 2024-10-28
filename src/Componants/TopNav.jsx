import { useState } from 'react';
import MobileNav from './MobileNav';

export default function TopNavigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const links = ['Tarmeez', 'Home', 'Profile']

    const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };
    const linksList = links.map((link, index) => (
        <a key={index} href="#" className="a hover:text-blue-700 text-sm font-semibold leading-6 text-gray-600">
            {link}
        </a>
    ))

    return (
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
                            onClick={toggleMobileMenu}
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    {/* ==Menue Btn== */}

                    {/* Hide auth buttons on small screens */}
                    <div className="hidden lg:flex sm:ml-3 gap-2">
                        <button

                            type="button"
                            className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Login
                        </button>
                        <button
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
                />
            )}

        </header>
    );
}
