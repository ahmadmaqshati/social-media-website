import { Link } from 'react-router-dom';

export default function BackButtonToPosts() {
  return (
    <div>
      <div className="animate-fade-up animate-duration-[1000ms] animate-delay-500 animate-once max-w-full rounded overflow-hidden mx-4 mb-7">
        <div className="container mx-auto max-w-5xl">
          {/* Link to navigate back to the MainPosts Page */}
          <Link
            to={'/'}
            id="input-btn-div"
            className="w-full flex mx-auto pb-[17px]"
          >
            <button className="font-medium bg-[#498486] text-white px-4 py-2 rounded mb-4 max-w-5xl hover:bg-blue-950 active:bg-blue-00 transition-all duration-300">
              Back to Posts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
