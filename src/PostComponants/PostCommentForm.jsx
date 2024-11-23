export default function PostCommentForm({ handleCommentSend }) {
  return (
    <div
      id="input-btn-div"
      className="w-full flex mb-3 mt-3 mx-auto px-[15px] pb-[17px]"
    >
      <input
        id="comment-input"
        type="text"
        className="w-full bg-gray-200 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="add your comment"
      />
      <div className="flex-shrink-0">
        <button
          onClick={handleCommentSend}
          className="bg-[#498486] text-white border border-blue-900 rounded-r-md px-4 py-2 hover:bg-blue-950"
        >
          Send {/* Button to submit the comment */}
        </button>
      </div>
    </div>
  );
}
