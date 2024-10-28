export default function MainPosts() {

    return (
        <div className="max-w-full rounded overflow-hidden mt-10 mx-3 mb-7">
            <div style={{ background: "#F9F7FB" }} className='container mx-auto max-w-5xl'>
                {/* post-header */}
                <div className='flex items-center gap-1 py-2 px-4' /* style={{ padding: "7px 15px", background: "#F8F6F8", display: "flex", gap: "5px", alignItems: "center" }} */>
                    <img className='object-cover h-10 w-10 rounded-full' src="https://tarmeezacademy.com/images/users/bYkNHefp6nwt6cp.jpg" alt="" />
                    <div className="font-bold">Card Title</div>
                </div>
                {/*==post-header ==*/}

                <hr className="border-slate-300 dark:border-white"></hr>

                {/* post-content */}
                <div className='bg-white pt-2'>
                    <div className="" style={{ padding: "7px 15px 0", height: "400px", }}>
                        <img style={{ height: "100%", objectFit: "cover" }} className="w-full" src="https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=150&lazy=load 150w, https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load 300w, https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load 400w, https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load 600w, https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load 800w, https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load 1200w, https://images.pexels.com/photos/27351134/pexels-photo-27351134/free-photo-of-a-boat-by-the-pier.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load 1600w" alt="Card image" />

                    </div>

                    <div className="" style={{ padding: "0px 15px" }}>
                        <span className='text-gray-500'>2 minutes ago</span>
                        <h1 className='text-xl text-slate-800'>Title</h1>
                        <p className='text-sm'>details</p>
                        <hr className="border-slate-400 dark:border-white mt-1"></hr>
                    </div>
                    <div className="flex gap-2 items-center" style={{ padding: "10px 15px" }}>
                        <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className='text-slate-700' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <h1 className=''>(3) Comments</h1>

                    </div>
                </div>
                {/* ==post-content== */}


            </div>
        </div>


    )
}   
