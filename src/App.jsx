import { useEffect, useState } from 'react';
import './App.css'
import AuthModal from './Componants/AuthModal';
import MainPosts from './Componants/MainPosts';
import TopNav from './Componants/TopNav';

export default function App() {

  return (
    <>
      <TopNav />

      <MainPosts />
      <MainPosts />
      <MainPosts />


    </>
  );
}
