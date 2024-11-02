import { useEffect, useState } from 'react';
import './App.css'
import MainPosts from './Componants/MainPosts';
import TopNav from './Componants/TopNav';
import axios from 'axios';

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
      <TopNav baseUrl={baseUrl} />

      {/* Rendering the list of posts */}
      {renderedPosts}

    </>
  );
}

