import React from 'react'
import SearchInput from '../../components/searchbar'
import Navbar from '../../components/navbar'
import Conversation from '../../components/conversation'

function ChatWindow() {
  return (
    <div className='bg-gray-900 h-screen'>
        <Navbar />
        <SearchInput />
        <Conversation />
    </div>
  )
}

export default ChatWindow