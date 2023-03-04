import React from 'react'
import Image from 'next/image'
import two from '../pages/photos/two.jpg'

export default function UpcomingEvents(){
  return(
    <div className='relative'>
			<Image className='w-screen' src={two} alt='' width={300} height={500} />
			<h4 className='absolute top-8 left-9 lg:text-3xl sm:text-xl text-white mt-20 ml-12'>--- Upcoming Events</h4>
			<h3 className='absolute top-1/2 lg:text-3xl sm:text-xl text-white ml-20'>Employable Graduate</h3>
			<h1 className='absolute top-1/2 text-white ml-20 mt-20 lg:text-7xl sm:text-5xl'>SUMMIT <br /> EGS 2023</h1>
			<h3 className='absolute text-white bottom-3 lg:text-3xl sm:text-xl left-9 ml-12'>Click here to find more info</h3>
		</div>
  )
}