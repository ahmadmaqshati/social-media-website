import MainPosts from '../Pages/PostsPage/MainPosts';

export default function PostList({ postsList }) {
  return (
    <>
      {postsList.map((post, index) => (
        <MainPosts key={index} post={post} />
      ))}
      <div id="sentinel" style={{ height: '1px' }}></div>
    </>
  );
}
