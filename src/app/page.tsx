"use client";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { HomeHeader } from "app/components/home/HomeHeader"
import { SuscriptionForm } from "app/components/home/SuscriptionForm"
import { SuccessMessage } from 'app/components/home/SuccessMessage';
import 'react-toastify/dist/ReactToastify.css';

export default function Home(){
  
  const [isSubscribed, setIsSuscribed] = useState(false)

  return(
    <main style={{
      display: "block",
      margin: '0 auto',
      padding: 12,
      maxWidth: "420px"
    }}>
      <HomeHeader isSuscribed={isSubscribed}/>
      {
        isSubscribed ? <SuccessMessage /> : <SuscriptionForm setIsSuscribed={setIsSuscribed}/>
      }
      <ToastContainer />
    </main>
  )
}