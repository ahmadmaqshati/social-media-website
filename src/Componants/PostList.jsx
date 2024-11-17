import MainPosts from "../Pages/PostsPages/MainPosts";

export default function PostList({ postsList }) {
    return (
        <div>
            {postsList.map((post, index) =>
                <MainPosts key={index} post={post} />
            )}
            <div id="sentinel" style={{ height: '1px' }}></div>
        </div>
    )
}
