import React, { useEffect, useState } from 'react'
import Head from "next/head";
import { AiOutlineSearch } from "react-icons/ai";
import GridGallery from "../components/GridGallery";
import Pagination from '../components/Pagination'
import UpcomingEvents from '../components/UpcomingEvents'
import DropDown from '../components/DropDown'


function Photos() {

	const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

	const images = ["https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600", 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600',  'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b']

  return (
    <div>'https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=600',
      <Head>
				<title>Event Photos | Build-Up Africa</title>
			</Head>
      <div>
        <div>
          <div className=' pt-[70px] md:pt-[96px]'>
				    <div className='  flex h-full items-center '>
					    <h2 className=' faq_heading sm:w-fit flex-shrink-0 bg-[#218B39] px-4 py-6 text-[14px] font-bold text-white md:px-[100px] md:py-[38px] md:pr-[100px] md:text-[36px] xsm:w-full  xsm:text-center'>
						    EVENT PHOTOS
					    </h2>
					    <p className='  line-clamp-2 truncate px-4 md:pl-[60px] xsm:invisible sm:visible'>
						    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
					    </p>
				</div>


				{/* featured articles section */}
				
				<section className=' px-4 md:px-[100px] '>
					<div className=' flex flex-col-reverse items-center md:flex-row md:justify-between  md:py-6'>
						<p className=' self-start py-4 font-bold text-black md:self-center md:py-0 '>
							CATEGORIES
						</p>
						<div className=' relative w-full py-4  md:w-fit md:py-0 '>
							<input
								type='text'
								placeholder='Search by event'
								className=' w-full rounded-[3px] border bg-gray-100 p-2 outline-none  '
/>
							<AiOutlineSearch className=' absolute right-2 top-6 h-6 w-6 bg-gray-100 md:top-2 ' />
						</div>
					</div>
					<DropDown /> {/* Dropdown menu*/}
				</section>
			</div>
				{/* Image Gallery */}
				<div>
					<GridGallery images={images} />
				</div>
        </div>
				{/* Image Pagination */}
				<Pagination />
      </div>
			{/* <Image classNameName='w-full' src={one} alt='' width={300} height={300} /> */}
			<UpcomingEvents />
    </div>
  )

}

export default Photos