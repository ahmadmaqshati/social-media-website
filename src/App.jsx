import { useEffect, useState } from 'react';
import './App.css'
import AuthModal from './Componants/AuthModal';
import MainPosts from './Componants/MainPosts';
import TopNav from './Componants/TopNav';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>

      <TopNav />

      <MainPosts />
      <MainPosts />
      <MainPosts />


    </div>
  );
}
