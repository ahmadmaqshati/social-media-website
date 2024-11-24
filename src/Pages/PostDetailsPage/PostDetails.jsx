// React Libraries
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// PostDetails Components
import PostHeader from '../../PostComponants/PostHeader';
import PostFooter from '../../PostComponants/PostFooter';
import PostContent from '../../PostComponants/PostContent';
import PostCommentForm from '../../PostComponants/PostCommentForm';
import BackButtonToPosts from '../../PostComponants/BackButtonToPosts';
import PostComments from '../../PostComponants/PostComments';

export default function PostDetails({ postsList }) {
  const [postDetails, setPostDetails] = useState([]);

  // Extract the postId from the URL parameters for route
  const { postId } = useParams();

  /* Find the post in the postsList that matches the postId extracted by useParams
  and returns the first matching post object */
  const post = postsList.find((p) => p.id === parseInt(postId));

  // Base URL for the API requests
  const baseUrl = 'https://tarmeezAcademy.com/api/v1/';

  // useEffect hook to fetch the post and its comments from the API when the postId changes
  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        // Making an API request to fetch the post details
        const postResponse = await axios.get(`${baseUrl}posts/${postId}`);

        // Extracting the comments data from the response
        let comments = postResponse.data.data.comments;

        // Set the comments data into the postDetails state
        setPostDetails(comments);
      } catch (error) {
        console.error('Error fetching post or comments:', error);
      }
    };

    fetchPostAndComments();
  }, [postId]); // Dependency array, re-run the effect when postId changes

  // Map over the postDetails (comments) and create JSX for each comment
  /* const commentsList = postDetails.map((comment) => {
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
  }); */

  // If no post is found with the given postId, show a 'not found' message
  if (!post)
    return <div>Sorry, the post you are looking for could not be found.</div>;

  return (
    <>
      <div className="animate-fade-up animate-duration-[1000ms] animate-delay-500 animate-once max-w-full rounded overflow-hidden mt-10 mx-4">
        <div
          style={{ background: '#F9F7FB' }}
          className="container mx-auto max-w-5xl"
        >
          {post && (
            <div>
              <header>
                <PostHeader post={post} />
              </header>
              {/* ---------------- Post Content ----------------- */}
              <section className="bg-white pt-2">
                <PostContent post={post} />
                <PostFooter post={post} />

                {/* Render the comments */}
                {/* {commentsList} */}
                <PostComments postDetails={postDetails} />
                {/* Render the form for adding a new comment */}
                <PostCommentForm />
              </section>
              {/* ============= End of post content ============= */}
            </div>
          )}
        </div>
      </div>
      {/* Footer with a back button to return to the MainPosts Page */}
      <footer>
        <BackButtonToPosts />
      </footer>
    </>
  );
}
