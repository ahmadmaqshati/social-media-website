// React Libraries
import { Link } from 'react-router-dom';

// PostDetails Components
import PostHeader from '../../PostComponants/PostHeader';
import PostFooter from '../../PostComponants/PostFooter';
import PostContent from '../../PostComponants/PostContent';

export default function MainPosts({ post }) {
  const { id } = post;

  return (
    <Link to={`/postdetails/${id}`}>
      <div className="animate-fade-up animate-duration-[1000ms] animate-delay-500 animate-once max-w-full rounded overflow-hidden mt-10 mx-4 mb-7">
        <div
          style={{ background: '#F9F7FB' }}
          className="container mx-auto max-w-5xl"
        >
          <header>
            <PostHeader post={post} />
          </header>

          <section className="bg-white pt-2">
            <PostContent post={post} />
            <PostFooter post={post} />
          </section>
        </div>
      </div>
    </Link>
  );
}
