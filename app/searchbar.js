import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Searchbar = ({setMeaning}) => {

    const [word, setWord] = useState('')
    const getMeaning= async () => { 
        try {
        const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        const data = await res.json()
        console.log(data)
        setMeaning(data[0])
        } catch (error) {
            console.log(error)
        }
        
    }


  return (
    <div className=' w-full py-10'>
    <form 
    onSubmit={(e) => {
        e.preventDefault()
        getMeaning()
    }}
    className="flex flex-row w-full justify-between px-4  bg-gray-100 rounded-xl cursor-pointer">
    <input 
    value={word}
    onChange={(e) => setWord(e.target.value)}
    type="text" placeholder="Search for any keyword..." className='bg-gray-100 w-[50%] py-3 px-4 focus:outline-none text-black' />
    <Image 
    onClick={() => getMeaning()}
    src="/items/icon-search.svg" className='' alt="search" width={25} height={25} />
    </form>
    </div>
  )
}

export default Searchbar