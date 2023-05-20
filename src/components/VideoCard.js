import React from 'react'

const VideoCard = ({ info }) => {
    // to check if props coming or not
    // console.log(info)
    // const { snippet, statistics } = info;
    // const { channelTitle, title, thumbnails } = snippet
    return (
        <div className='p-2 m-2  shadow-lg  min-h-72 w-[400px] my-10  hover:cursor-pointer'>
            <img className="h-48 w-[400px] object-cover rounded-xl hover:rounded-none duration-300" src={info.snippet.thumbnails.medium.url} alt='thumbnail' />
            <div>
                <div className='font-bold py-2'>{info.snippet.title}</div>
                <div className='flex flex-row justify-between font-bold text-slate-600'>
                    <div>{info.snippet.channelTitle}</div>
                    <div>{(info.statistics.viewCount / 1000000).toFixed(1)} M views</div>
                </div>
            </div>
        </div>
    )
}

export const AdVideoCard = ({ info }) => {
    return (
        <div className='p-1 m-1 border-red-900'>
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard