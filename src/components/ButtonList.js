import React from 'react'
import Button from './Button'
// import { buttonData } from './Data'

const ButtonList = ({ buttonData }) => {
  return (
    <div className='flex'>
      <Button buttonData={buttonData} />
    </div>
  )
}

export default ButtonList