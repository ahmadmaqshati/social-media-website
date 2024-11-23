export default function PostFooter({ post }) {
  const { comments_count } = post;

  return (
    <div className="flex gap-2 items-center px-[15px] pt-2 pb-4">
      <svg
        className="h-5 w-5 text-red-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          className="text-gray-500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>

      <h1 className="flex items-center gap-2">
        ({comments_count})
        <div className="z-10 bg-slate-200 w-9 h-6 rounded-lg flex justify-center items-center shadow-lg">
          <svg
            className="cursor-pointer mt-[5px]"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="#6B7280"
              d="M20 2H4a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 10H6V9h12v3zm0-4H6V5h12v3z"
            />
          </svg>
        </div>
      </h1>
    </div>
  );
}
