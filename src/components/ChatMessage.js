import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center p-2 shadow-sm'>
         <img alt='' src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" className='h-8' />
         <span className='px-2 font-bold'>{name}</span>
         <span>{message}</span>
    </div>
  )
}

export default ChatMessage