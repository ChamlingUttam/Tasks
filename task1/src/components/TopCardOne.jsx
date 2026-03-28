import React from 'react'
import LeftSimpleCard from './LeftSimpleCard'
import avatar from '../imgs/anime.webp'

const TopCardOne = () => {
  return (
    <LeftSimpleCard
    bg="bg-red-400"
    heading={"Start With Clarity"}
    subHeading={"Step into learning path."}
    textContent={"Monitor your data, manage your workflow, and gain insights in real time with a streamlined and responsive dashboard experience tailored for efficiency"}
    imageUrl={avatar}
    />
  )
}

export default TopCardOne