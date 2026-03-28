import React from 'react'
import TopCardOne from '../components/TopCardOne'
import TopCardTwo from '../components/TopCardTwo'
import BottomCardTwo from '../components/BottomCardTwo'
import BottomCardOne from '../components/BottomCardOne'

const View = () => {
  return ( 
    <>
    <div className='grid md:grid-cols-2 grid-cols-1  gap-6 m-10 '>
      <TopCardOne/>
      <TopCardTwo/>
      <BottomCardOne/>
      <BottomCardTwo/>


    </div>
    </>
  )
}

export default View