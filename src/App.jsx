import { useEffect, useState } from 'react';
import './App.css'
import AuthModal from './Componants/AuthModal';
import MainPosts from './Componants/MainPosts';
import TopNav from './Componants/TopNav';
import axios from 'axios';

export default function App() {
  const [postList, setPostList] = useState([])

  // Effect to fetch posts from the API when the component mounts
  useEffect(() => {
    axios.get('https://tarmeezAcademy.com/api/v1/posts')
      .then((res) => {
        const fetchPosts = res.data.data
        setPostList(fetchPosts)
      })
  }, [])

  // Mapping over the postList to render MainPosts for each post
  const renderedPosts = postList.map((post, index) => {
    return <MainPosts key={index} />
  })


  return (
    <>
      <TopNav />

      <MainPosts />
      {renderedPosts}

    </>
  );
}
