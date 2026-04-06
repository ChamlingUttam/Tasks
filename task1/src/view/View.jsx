import React from 'react'
import TopCardOne from '../components/TopCardOne'
import TopCardTwo from '../components/TopCardTwo'
import BottomCardOne from '../components/BottomCardOne'
import BottomCardTwo from '../components/BottomCardTwo'
const View = () => {
  return (
    <div className='grid grid-cols-2 gap-10 m-10'>
      <TopCardOne/>
      <TopCardTwo/>
      <BottomCardOne/>
      <BottomCardTwo/>
    </div>
  )
}

export default View