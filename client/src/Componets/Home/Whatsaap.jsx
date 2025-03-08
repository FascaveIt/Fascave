import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

function Whatsaap() {
  return (
    <Link>
     <div className='fixed bottom-4 right-4 z-50   w-[50px] h-[50px] bg-green-500 text-white rounded-full cursor-pointer flex justify-center items-center circle'>
<i className="text-center ri-whatsapp-line text-xl"></i>
  

    </div>
    </Link>

  )
}

export default Whatsaap