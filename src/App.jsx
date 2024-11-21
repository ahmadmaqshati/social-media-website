import { useEffect, useState } from 'react';
import './App.css'; // تأكد من استيراد CSS
import MainNavigation from './TopNavComponants/MainNavigation';
import Profile from './Pages/ProfilePage/Profile';
//Libraries
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from './PostComponants/PostList';
import PostDetails from './Pages/PostDetailsPage/PostDetails';

export default function App() {
  const [postsList, setPostsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page for pagination
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false); // State to indicate if data is being loaded

  const baseUrl = 'https://tarmeezAcademy.com/api/v1/';

  // Function to fetch posts from the API
  async function getPosts(page = 1) {
    setLoading(true); // عرض محرك التحميل عند بداية الطلب
    try {
      // Make a GET request to fetch posts from the API with a limit of 6 posts per page
      const res = await axios.get(`${baseUrl}posts?limit=6&page=${page}`);
      const newPosts = res.data.data;

      // تحديث آخر صفحة
      setLastPage(res.data.meta.last_page);

      /* If it's the first page (page === 1), it replaces the entire list 
      with the newly fetched data (newPosts).
      Otherwise, it combines the existing posts (currentPosts) with the newly fetched posts (newPosts)  
      using the spread operator (...). */
      setPostsList((currentPosts) =>
        page === 1 ? newPosts : [...currentPosts, ...newPosts],
      );
    } catch (error) {
      console.error('Error loading posts: ' + error.message);
      // يمكنك هنا إضافة رسالة خطأ للمستخدم أو التعامل مع الخطأ بشكل مناسب
    } finally {
      // Set loading state to false once the request is completed (success or failure)
      // Reset loading state after the API call completes
      setLoading(false);
    }
  }

  // Effect to handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check if the user has scrolled to the bottom of the page
      if (
        innerHeight + scrollY >= scrollHeight - 100 &&
        currentPage < lastPage &&
        !loading
      ) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, lastPage, loading]);

  // Effect to fetch posts whenever the current page changes
  useEffect(() => {
    getPosts(currentPage);
  }, [currentPage]);

  return (
    <>
      <BrowserRouter>
        <MainNavigation />

        {/* عرض اللودر أثناء التحميل */}
        {loading && (
          <div className="lds-roller">
            {[...Array(8)].map((_, index) => (
              <div key={index}></div>
            ))}
          </div>
        )}

        <Routes>
          <Route path="/" element={<PostList postsList={postsList} />} />
          <Route path="/home" element={<PostList postsList={postsList} />} />
          <Route
            path="/postdetails/:postId"
            element={<PostDetails postsList={postsList} />}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
/* PostDetails */
