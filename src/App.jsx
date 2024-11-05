import { useEffect, useState } from 'react';
import './App.css'
import MainPosts from './Pages/PostsPages/MainPosts';
import TopNav from './Componants/TopNav';
import Profile from './Pages/ProfilePage/Profile';
//Libraries
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  const [postsList, setPostsList] = useState([])
  const baseUrl = 'https://tarmeezAcademy.com/api/v1/'
  async function getPosts() {
    try {
      const res = await axios.get(`${baseUrl}posts`)
      const fetchPosts = res.data.data
      setPostsList(fetchPosts)
    }
    catch (error) {
      console.log('Error loading posts:' + error.message);
    }
  }

  // Effect to fetch posts from the API when the component mounts
  useEffect(() => {
    getPosts()
  }, [])

  // Mapping over the postList to render MainPosts for each post
  const renderedPosts = postsList.map((post) => {
    return <MainPosts key={post.id} post={post} />
  })

  return (
    <>
      <BrowserRouter>
        <TopNav baseUrl={baseUrl} />
        <Routes>
          <Route path='/' element={renderedPosts} />
          <Route path='/home' element={renderedPosts} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

