import React, { useState } from 'react'

import Spinner from './Spinner';
import useGif from '../hooks/useGif';

function Tag() {
    const [tag,setTag] = useState('')
    const{gif,loading,fetchData} = useGif()

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>{`Random ${tag} gif`}</h1>
      {
        loading?(<Spinner/>):(<img src={gif} alt='taggif'  width={450}/>)
      }
      <input type="text" 
      className='w-10/12 text-lg py-2 rounded-lg mb-[10px] text-center'
      onChange={(event)=>setTag(event.target.value)}
      value={tag}/>
      <button onClick={()=>fetchData()}
      className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px] '>Generate</button>
    </div>
  )
}

export default Tag
