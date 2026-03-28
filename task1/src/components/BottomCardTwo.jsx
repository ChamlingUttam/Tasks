import React from 'react'
import RigthSimpleCard from './RigthSimpleCard'
import avatar from '../imgs/anime2.png'

const BottomCardTwo = () => {
  return (
    <>
    <RigthSimpleCard
    imageUrl={avatar}
    bg='bg-black'
    heading={"Achieve & Showcase"}
    subHeading={"Build your portfolio, get job ready."}
    textContent={"Level up your skills and embark on your journey with mentors who guide you every step of the way. Adventure awaits!"}
    />
    </>
  )
}

export default BottomCardTwo