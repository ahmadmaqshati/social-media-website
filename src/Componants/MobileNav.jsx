import React from 'react'
export default function MobileNav({ toggleMobileMenu, linksList }) {
    return (
        <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-black opacity-50" onClick={toggleMobileMenu}></div>
            <div className="fixed inset-y-0  h-72 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-full sm:ring-1 sm:ring-gray-900/10 ">

                <div className="flex items-center justify-between">
                    {/*  button for close the menu */}
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        onClick={toggleMobileMenu}
                    >
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {/*  ==button for close the menu== */}
                </div>

                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="py-6 flex gap-4 flex-col">
                            {linksList}
                        </div>
                        {/* Authentication-Btns */}
                        <div className="py-6">
                            <div className="sm:flex">
                                <button
                                    type="button"
                                    className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 mr-3 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="border-[1px] border-slate-800 inline-flex items-center rounded-md px-3 py-2 font-medium text-green-700 shadow-sm hover:bg-indigo-500  hover:text-yellow-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Signup
                                </button>
                            </div>
                        </div>
                        {/* ==Authentication-Btns== */}
                    </div>
                </div>
            </div>
        </div>
    )
}
