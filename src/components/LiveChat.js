import React, { useEffect, useState } from 'react'
import { generateRandomNames } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import ChatMessage from './ChatMessage'
import { makeRandomMessage } from '../utils/helper'


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch()

    const chatMessage = useSelector((store) => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {


            dispatch(addMessages({
                name: generateRandomNames(),
                message: makeRandomMessage(30)
            }))
        }, 2000)


        return () => clearInterval(i)
    }, []);

    return (
        <>
            <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {
                        chatMessage.map((c, i) => (
                            <ChatMessage key={i} name={c.name} message={c.message} />
                        ))
                    }
                </div>
            </div>
            <form className='p-2 ml-2 w-full border border-black ' onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessages({
                    name: "Arosmita",
                    message: liveMessage,
                }))
                setLiveMessage("")
            }}>
                <input className='w-96' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='px-2 mx-2 bg-blue-100'>Submit</button>
            </form>
        </>
    )
}

export default LiveChat