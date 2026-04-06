import React from 'react'
import RigthSimpleCard from './RightSimpleCard'
import avatar from '../imgs/anime2.png'

const BottomCardTwo = () => {
  return (
    <>
    <RigthSimpleCard
    imageUrl={avatar}
    bg="bg-orange-300"
    heading={"Achieve & Showcase"}
    subHeading={"Build your portfolio, get job ready."}
    textContent={"Level up your skills and embark on your journey with mentors who guide you every step of the way. Adventure awaits!"}
    />
    </>
  )
}

export default BottomCardTwo