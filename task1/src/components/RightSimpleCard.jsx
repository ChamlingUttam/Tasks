// import React from 'react'

// const RightSimpleCard = ({textContent,heading,subHeading,bg,imageUrl}) => {
//   return (
//     <>
//     <div className={`relative flex p-6 rounded-4xl  ${bg}`}>
//         {/*left content*/ }
//         <div className='flex-1 pt-5 mr-40 '>
//         <h1 className='font-bold text-4xl text-white  pl-8'>{heading}</h1>
//         <h3 className='font-semibold text-white text-2xl mt-4 mb-7  pl-8'>{subHeading}</h3>
//         <p className='text-white pb-10 pl-8 text-xl'>{textContent}</p>
 
//       </div>

//       {/*image left content */}
//       {imageUrl &&(
//          <img className='animate-float w-50 h-64 absolute -bottom-1  -right-10 '  src={imageUrl || null} alt="picture " />


//       )}
     
//     </div>
//     </>
//   )
// }

// export default RightSimpleCard















import React from 'react'

const RightSimpleCard = ({ textContent, heading, subHeading, bg, imageUrl }) => {
  return (
    <div className={`relative flex p-6 rounded-4xl overflow-hidden ${bg}`}>
      {/* Left content */}
      <div className="flex-1 pt-5 pr-4">
        <h1 className="font-bold text-4xl text-white pl-8">{heading}</h1>
        <h3 className="font-semibold text-white text-2xl mt-4 mb-7 pl-8">{subHeading}</h3>
        <p className="text-white pb-10 pl-8 text-xl">{textContent}</p>
      </div>

      {/* Image pinned to bottom-right */}
      {imageUrl && (
        <div className="shrink-0 relative w-44">
          <img
            className="animate-float w-44 h-64 absolute -bottom-6 -right-6 object-contain"
            src={imageUrl}
            alt="card visual"
          />
        </div>
      )}
    </div>
  )
}

export default RightSimpleCard