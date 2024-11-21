import { Link, useParams } from 'react-router-dom';
import PostHeader from '../../PostComponants/PostHeader';
import PostFooter from '../../PostComponants/PostFooter';
import PostContent from '../../PostComponants/PostContent';
import PostCommentForm from '../../PostComponants/PostCommentForm';
import BackButtonToPosts from '../../PostComponants/BackButtonToPosts';

export default function PostDetails({ postsList }) {
  // Extract the postId from the URL parameters for route
  const { postId } = useParams();

  /*Find the post in the postsList that matches the postId extracted by useParams
  and returns the first matching post object 
  or undefined if not found. */
  const post = postsList.find((p) => p.id === parseInt(postId));

  if (!post) return <div>Post not found</div>;

  return (
    <>
      <div className="animate-fade-up animate-duration-[1000ms] animate-delay-500 animate-once max-w-full rounded overflow-hidden mt-10 mx-4">
        <div
          style={{ background: '#F9F7FB' }}
          className="container mx-auto max-w-5xl"
        >
          <header>
            <PostHeader post={post} />
          </header>

          {/* ---------------- Post Content ----------------- */}
          <section className="bg-white pt-2">
            <PostContent post={post} />
            <PostFooter post={post} />
            <PostCommentForm />
          </section>
          {/* ============= End of post content ============= */}
        </div>
      </div>
      <footer>
        <BackButtonToPosts>Back to Posts</BackButtonToPosts>
      </footer>
    </>
  );
}
