import React, { useCallback, useState } from 'react'



const Home = (props) => {

  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  },[]);

  const search = useCallback(() => {
    props.onSearch(term);
  },[props.onSearch, term]);
  
  return (
    <div className='flex justify-center py-8'>
      <div className='py-16'>
        <input placeholder="Enter A Song, Album, or Artist" type='search' className='py-4 px-3 text-[1rem] text-blue-500 rounded ' value={term}  onChange={handleTermChange}/>
        <button className='SearchButton' onClick={search} class="cursor-pointer w-32 py-2 px-4 rounded-full bg-blue-900 text-white text-center text-sm transition bg-blue-800 font-medium ml-10">
        SEARCH
        </button>

      </div>
    </div>
  )
}

export default Home
