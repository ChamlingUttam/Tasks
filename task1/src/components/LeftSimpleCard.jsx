import React from 'react'

const LeftSimpleCard = ({textContent,heading,subHeading,bg,imageUrl}) => {
  return (
    //using inline style to pass the backgroundColor as a props
     <div  className={`relative  flex rounded-4xl p-6 ${bg} `}>
      <div className='flex shrink-0 '>
      <img className='animate-float w-50 -left-10 h-64 absolute -bottom-1 '  src={imageUrl || null} alt="picture " />

      </div>

    
    {/* right content */}
      <div className='flex-1 pt-5 ml-40 '>
        <h1 className='font-bold text-4xl text-white text-end pr-8'>{heading}</h1>
        <h3 className='font-semibold text-white text-2xl pt-4 pb-7 text-end pr-8'>{subHeading}</h3>
        <p className='text-white pb-10 text-end pr-8 text-xl'>{textContent}</p>
 
      </div>   

    </div>




  )
}

export default LeftSimpleCard


// // Get Mentored and & Growth

