import { useEffect, useState } from 'react';
import './App.css'
import MainPosts from './Pages/PostsPages/MainPosts';
import MainNavigation from './Componants/MainNavigation';
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

  return (
    <>
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route path='/' element={postsList.map(post =>
            <MainPosts key={post.id} post={post} />
          )} />

          <Route path='/home' element={postsList.map(post =>
            <MainPosts key={post.id} post={post} />
          )} />

          <Route path='/profile' element={<Profile />} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

