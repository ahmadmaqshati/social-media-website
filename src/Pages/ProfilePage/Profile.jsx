export default function Profile() {
    return (
        <div className="mx-4">
            <div className="shadow-md mt-20 container mx-auto max-w-5xl bg-white pt-12 pb-12 px-5 rounded-lg">
                <div className="profile flex items-center">
                    {/* USER IMAGE COL */}
                    <div className="w-full md:w-1/6 flex justify-center md:justify-start">
                        <img
                            id="main-info-image"
                            src="/user.png"
                            alt=""
                            className="profile-img w-[120px] h-[120px] md:w-30 md:h-30 rounded-full border-2 border-gray-100"
                        /* style={{ borderColor: 'rgba(222, 226, 230, 0.4)' }} */
                        />
                    </div>
                    {/*// USER IMAGE COL //*/}

                    {/* USERNAME - EMAIL - NAME */}
                    <div id="main-info" className="flex gap-6 flex-col justify-evenly w-full md:w-2/6 font-bold text-center md:text-left">
                        <div className="text-gray-700" id="main-info-email">
                            example@example.com
                        </div>
                        <div className="text-gray-700" id="main-info-name">
                            yarob99
                        </div>
                        <div className="text-gray-700" id="main-info-username">
                            yarob999
                        </div>
                    </div>
                    {/*// USERNAME - EMAIL - NAME //--*/}

                    {/* POSTS & COMMENTS COUNT */}
                    <div className="flex flex-col justify-evenly w-full md:w-2/6 text-center md:text-left">
                        <div className="font-thin text-lg text-gray-900">
                            <span className="font-hairline text-6xl text-gray-800">92</span> Posts
                        </div>
                        <div className="font-thin text-lg text-gray-900">
                            <span className="font-hairline text-6xl text-gray-800">92</span> Comments
                        </div>
                    </div>
                    {/*// POSTS & COMMENTS COUNT //*/}
                </div>
            </div>
        </div>
    );
}
