'use client'
import React ,{useState}from 'react'
import Image from 'next/image'
import { useContext } from 'react';
import { FontContext } from './fontcontext';
import { ThemeContext } from './themeContext';
import Fonts from '@/utils/fonts';
const Nav = () => {
    const [toggle,setToggle]=useState(false);
    const {font,setFont}=useContext(FontContext);
    const {theme,setTheme}=useContext(ThemeContext);
    
  console.log(theme)
  return (
    <div className={`
    ${Fonts[font]}
    ${theme==='dark'?'bg-black text-white':'bg-white text-gray-900'}
    flex justify-between items-center`}>
        <Image
          color={theme==='dark'?'white':'black'}
        src={'/items/logo.svg'} width={40} height={40} />
        <div className='flex justify-between items-center'>
        <div className='relative'>
            {/*dropdown*/}
<button 
onClick={()=>setToggle(!toggle)}
className=" focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">change font <Image className='ml-2' src={'/items/icon-arrow-down.svg'} height={15} width={15} /></button>
<div  class=" bg-white divide-y divide-gray-100  ">
{toggle &&
    <ul class="p-3 absolute text-sm text-gray-700 bg-white shadow-md min-w-full cursor-pointer" >

        <li
        onClick={()=>setFont(' InterFont')}
        className="block px-4 py-2 hover:bg-gray-100  white"> InterFont</li>
   
    
        <li 
        onClick={()=>setFont('PlayfairDisplayFont')}
        className="block px-4 py-2 hover:bg-gray-100 white">PlayfairDisplayFont</li>
     
   
        <li 
        onClick={()=>setFont('FiraCodeFont')}
        className="block px-4 py-2 hover:bg-gray-100">FiraCodeFont</li>

    </ul>
}
</div>

</div>  

{/*checkbox*/}
<div>
<label 

class="relative inline-flex items-center cursor-pointer">
 <input
  type="checkbox"
  value=""
  className="sr-only peer"
  onChange={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))}
/>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 ">
    <Image src={'/items/icon-moon.svg'} height={25} width={25}/>
  </span>
</label>
</div>

{/*svg moon*/}

        </div>
    </div>
  )
}

export default Nav