import React from 'react'
import LeftSimpleCard from './LeftSimpleCard'
import avatar from '../imgs/img.png' 
const BottomCardOne = () => {
  return (
    <>
    <LeftSimpleCard
     bg="bg-purple-400"
     heading={"Get Mentor & Support"}
     subHeading={"your are not alone."}
     textContent={"Building intuitive and scalable user interfaces requires attention and a strong focus on performance. This section showcases dynamic content structured for optmial."}
    imageUrl={avatar}
    />
    </>
  )
}

export default BottomCardOne