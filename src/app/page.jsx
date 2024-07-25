"use client";
import Image from "next/image";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";
import Posts from "@/components/Home/Posts";
import app from "@/firebase/FirebaseConfig";
import { getFirestore, doc, setDoc, getDoc, 
  collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react'


export default function Home() {
  const db=getFirestore( app);
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    getPost();
  },[])

  const getPost=async()=>{
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    
   setPosts(posts=>[...posts,doc.data()]);
});
  }

  const onGamePress=async(gameName)=>{
    setPosts([]);
    if(gameName=='Other Games')
    {
      getPost();
      return ;
    }
    const q=query(collection(db,"posts"),
    where("game","==",gameName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data=doc.data();
      data.id=doc.id
      setPosts(posts=>[...posts,doc.data()]);
   
});
  }
  
  return (
    <div className="h-screen w-full px-5 sm:px-10 md:px-16 mt-10 mb-20">
    <Hero />
    <Search />
    <GameList onGamePress={onGamePress}/>
    {posts? <Posts posts={posts}/>:null}
    </div>
  );
}
