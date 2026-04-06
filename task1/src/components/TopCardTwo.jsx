import React from 'react'
import RigthSimpleCard from './RightSimpleCard'
import avatar from '../imgs/anime1.png'

const TopCardTwo = () => {
  return (
    <>
    <RigthSimpleCard
     imageUrl={avatar}
        bg='bg-teal-300'
        heading={"Learn By Doing"}
        subHeading={"Pratical Skills, real projects."}
        textContent={"Level up your skills and embark on your journey with mentors who guide you every step of the way. Adventure awaits!"}
    />
    </>
  )
}

export default TopCardTwo