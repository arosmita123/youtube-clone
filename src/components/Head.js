import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'
import { VscAccount } from "react-icons/vsc";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setshowSuggestions] = useState(false)
  // console.log(searchQuery)
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("API CALL-" + searchQuery)
    // make an api call after every key press but if the difference between 2 api call is <200 decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
}, 200)

    return () => clearTimeout(timer)
    
  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    // console.log(json[1])
    setSuggestions(json[1])

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: suggestions,
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    
    <div className='grid grid-flow-col fixed p-5 m-2 shadow-lg w-full z-10'>
       {/* <div className="h-14 z-10 flex justify-between px-6 fixed w-full bg-white  "> */}
      <div className="flex col-span-1">
        <div
          className="flex items-center cursor-pointer text-xl ">
          <img src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' alt='menu' className='h-8 cursor-pointer' onClick={() => toggleMenuHandler()} />
        </div>
        <div>
        <img alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' className='h-8 mx-1 mt-3' />
        </div>
      </div>
      {/* <div className='flex col-span-1'>
        <img src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png' alt='menu' className='h-8 cursor-pointer' onClick={() => toggleMenuHandler()} />
        <img alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' className='h-8 mx-2' />
      </div> */}
      <div className='col-span-10 px-10'>
        <div>
          <input type='text'placeholder='Search' className='w-1/2 text-center mx-auto border border-gray-400 p-2 px-5 rounded-l-full' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className=' border border-gray-400 px-3 py-2 rounded-r-full bg-slate-200' >🔍</button>
        </div>
        {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[41.5rem] shadow-lg rounded-lg border-gray-100'>
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='py-2 shadow-sm hover:bg-slate-100'>
                🔍 {s}
              </li>
            ))}
          </ul>
        </div>)}
      </div>
      <div className='col-span-1'>
        {/* <img alt='' src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" className='h-8' /> */}
         <VscAccount  className='text-4xl mt-2'/>
      </div>
    </div>
    // </div>
  )
}

export default Head