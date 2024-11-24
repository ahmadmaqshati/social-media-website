import PostCommentForm from './PostCommentForm';

export default function PostComments({ postDetails }) {
  // Map over the postDetails (comments) and create JSX for each comment
  const commentsList = postDetails.map((comment) => {
    return (
      <div
        key={comment.id}
        id="comments"
        className="flex flex-col gap-5 container py-[10px] px-[15px]"
      >
        <div className="flex items-center gap-2">
          <img
            src={comment.author.profile_image}
            alt=""
            className="rounded-full w-10 h-10"
          />
          <div className="comments-input bg-[#F0F2F5] rounded-2xl flex flex-col py-2 px-3">
            <b className="font-extrabold">{comment.author.username}</b>
            <p>{comment.body}</p>
          </div>
        </div>
      </div>
    );
  });

  return <>{commentsList}</>;
}
