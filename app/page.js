'use client'
import Nav from './nav'
import Searchbar from './searchbar'
import { useState } from 'react'
import Fonts from '@/utils/fonts'
import { useContext } from 'react'
import { FontContext } from './fontcontext'
import { ThemeContext } from './themeContext'
import Image from 'next/image'
export default function Home() {
  const [meaning, setMeaning] = useState([])
  const { font } = useContext(FontContext)
  const { theme } = useContext(ThemeContext)
  return (
    <main
  
    className={` ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }
    `}>
      <div className={`flex min-h-screen flex-col mx-auto bg-[hsl(0 0% 100% / 4)] 
      max-w-3xl py-12 px-4 sm:px-6 lg:px-8 ${Fonts[font]} ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }
    `}>
      <Nav />
      <Searchbar 
   
      setMeaning={setMeaning}
      />
      <div className='flex justify-between  gap-4'>
        <div>
      <h1 className={`text-6xl font-semibold 
      ${theme === 'dark' ? 'text-white' : 'text-black'}
      `}>{meaning?.word}</h1>
      <h1 className='text-2xl font-semibold text-purple-600'>{meaning?.phonetic}</h1>
      </div>
      <div>
      <Image
        onClick={() => { 
          const findingPhonetic = meaning?.phonetics.find((item) => item?.audio.length > 0)
          const audio = new Audio(findingPhonetic?.audio)
          audio.play()
        }}
        
        src="/items/icon-play.svg" className='cursor-pointer' alt="search" width={70} height={70} />
        
      </div>
      </div>
        {
  meaning?.meanings &&
  meaning?.meanings.map((item, index) => {
    return (
      <div
        key={index}
        className={`flex flex-col gap-4 ${
          theme === 'dark' ? 'bg-black text-white' : ''
        }`}
      >
        <div className='flex items-center mt-8 mb-4 gap-4'>
          <h1 className='text-2xl font-semibold text-purple-600'>
            {item?.partOfSpeech}
          </h1>
          <div className='w-full h-[2px] bg-gray-200'></div>
        </div>
        <p className={`text-xl 
        ${theme === 'dark' ? 'text-white' : 'text-black'}
        `}>
          {item.definitions.map((item, index) => {
            return (
              <div key={index} className='flex'>
                <p className={`text-xl  ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{item?.definition}</p>
              </div>
            );
          })}
        </p>
        {item?.antonyms && item?.antonyms.length > 0 && (
          <>
            <h2 className='text-xl font-semibold text-purple-600'>antonyms</h2>
            <p className={`
              ${theme === 'dark' ? 'text-white' : 'text-black'}
            text-xl flex gap-4`}>
              {item.antonyms.map((item, index) => {
                return (
                  <div key={index} className='flex'>
                    <p className={`text-xl 
                    ${theme === 'dark' ? 'text-white' : 'text-black'}
                    `}>{item}</p>,
                  </div>
                );
              })}
            </p>
          </>
        )}
        
      </div>
    );
  })
}

    


</div>

    </main>
  )
}
