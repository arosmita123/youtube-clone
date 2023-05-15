import React from 'react'
import { buttonData } from './Data'

const Button = ({ name }) => {
    return (
        <div>
           
            <ul className='flex'>
                {buttonData.map((data) => {
                    return <li className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{data}</li>
                })}
            </ul>
        </div>
    )
}

export default Button