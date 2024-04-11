import React from 'react'
import Card from './Card'
import MessageSelf from '../Messages/MessageOther.jsx'
import MessageOther from '../Messages/MessageOther.jsx'

function ChatArea() {
  return (
    <div className='w-fill h-fill px-[50px] py-[10px] gap-[20px] overflow-y-auto'>
    {/* we can pass props here */}
      <MessageOther />
      <MessageSelf />
      <Card/>
    </div>
  )
}

export default ChatArea