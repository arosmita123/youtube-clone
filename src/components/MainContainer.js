import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=' flex col-span-10 mt-28 md:flex flex-wrap '>
      <div>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer