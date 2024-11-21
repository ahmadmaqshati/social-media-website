export default function PostHeader({ post }) {
  const { author } = post;

  return (
    <>
      <div className="flex items-center gap-1 py-2 px-4">
        {typeof author.profile_image === 'string' ? (
          <img
            className="object-cover h-10 w-10 rounded-full border-2 border-gray-300"
            src={
              author.profile_image.startsWith('http://')
                ? author.profile_image.replace('http://', 'https://')
                : author.profile_image
            }
            alt=""
          />
        ) : null}

        <div className="font-bold bg">{author.username}</div>
      </div>

      <hr className="border-slate-300 dark:border-white"></hr>
    </>
  );
}
