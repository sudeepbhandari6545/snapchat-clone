import React from 'react'
//icons
import { Avatar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import './Chats.css'

function Chats() {
  return (
    <div className="chats">
      <div className="chats_header">
        <Avatar className="chats_avatar" />
        <div className="chats_search">
          <SearchIcon />
          <input type="text" placeholder="friends" />
        </div>
        <ChatBubbleIcon className="chat_bubbleicon" />
      </div>
      <div className="chat_post"></div>
    </div>
  )
}

export default Chats
