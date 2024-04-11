import { useState } from 'react'
import './App.css'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

import ChatArea from './Components/ChatArea/ChatArea'

function App() {

  const handleDocument=()=>{
    console.log("document is getting handle")
  }
  const handleSubmit=()=>{
    console.log("submited");
  }
  return (
    <div className='relative w-[360px] h-[800px] top-110 border-[7px] rounded-[20px]  left-780 bg-[#FFFFFF]  text-black justify-center flex-col'>
      {/* Header */}
      <div className='absolute inset-x-0 top-0 h-16 flex justify-between items-center rounded-[20px] bg-[#F4F4F4]'>
        <div className='flex items-center space-x-2 m-2 '>
          <img src='https://images.pexels.com/photos/16564264/pexels-photo-16564264/free-photo-of-pexels-home-page.jpeg?auto=compress&cs=tinysrgb&w=60' alt='Profile' />
          <div>
            <p className='p-1'>Timpu</p>
            <p className='p-1'>Chat Assistant</p>
          </div>
        </div>
        <p className='m2 p-1'>Online</p>
      </div>

      {/* Chat Area */}
      <div className='flex-grow flex justify-center items-center w-[350px] h-[640px]'>
        <ChatArea />
      </div>

      {/* Message Input and Send Button */}
      <div className='absolute inset-x-0 bottom-0  flex items-center justify-between m-0 w-[360px] h-[80px] border-[2px] gap-[2px] p-1 bg-[#E6EEFF]'>
        <input type='text' placeholder='Type your message' className='w-full px-4 py-2 border border-gray-300 rounded-md' 
          

        />
        <div className='flex space-x-2'>
          <IconButton style={{color:'white', backgroundColor:'gray' }} onClick={()=>{handleDocument}}>
            <AttachFileIcon />
          </IconButton>
          <IconButton style={{color:'white', backgroundColor:'blue'}} onClick={()=>{handleSubmit}}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>

      {/* Powered By krunk.ai */}
      <div className='m-2'>
      <p className='absolute bottom-2 left-2'>Powered By krunk.ai</p>
      </div>
    </div>
  );
}
export default App
