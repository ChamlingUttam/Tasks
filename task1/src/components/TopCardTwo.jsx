import React from 'react'
import RigthSimpleCard from './RigthSimpleCard'
import avatar from '../imgs/anime1.png'

const TopCardTwo = () => {
  return (
    <>
    <RigthSimpleCard
     imageUrl={avatar}
        bg='bg-blue-500'
        heading={"Learn By Doing"}
        subHeading={"Pratical Skills, real projects."}
        textContent={"Level up your skills and embark on your journey with mentors who guide you every step of the way. Adventure awaits!"}
    />
    </>
  )
}

export default TopCardTwo