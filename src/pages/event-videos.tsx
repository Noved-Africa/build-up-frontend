import React, { useEffect, useState } from 'react'
import Head from "next/head";
import { AiOutlineSearch } from "react-icons/ai";
import GridGallery from "../components/GridGalleryVid";
import Pagination from '../components/Pagination'
import UpcomingEvents from '../components/UpcomingEvents'
import DropDown from '../components/DropDown'


function EventVideos() {

	const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

	// const video = ['https://www.youtube.com/watch?v=EWzbWqH-JG4', 'https://www.youtube.com/watch?v=vWtwf-3pXaM', 'https://www.youtube.com/watch?v=k0jJL_YFyIU','https://www.youtube.com/watch?v=wWgIAphfn2U','https://www.youtube.com/watch?v=wWgIAphfn2U','https://www.youtube.com/watch?v=wWgIAphfn2U']

	const video = ["https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600", 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600',  'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b']

  return (
    <>
      <Head>
				<title>Event Videos | Build-Up Africa</title>
			</Head>
			{/* Top Part */}
				<div className=' pt-[70px] md:pt-[96px]'>
					<div className='  flex h-full items-center '>
						<h2 className=' faq_heading sm:w-fit flex-shrink-0 bg-[#218B39] px-4 py-6 text-[14px] font-bold text-white md:px-[100px] md:py-[38px] md:pr-[100px] md:text-[36px] xsm:w-full  xsm:text-center'>
							EVENT VIDEOS
						</h2>
						<p className='  line-clamp-2 truncate px-4 md:pl-[60px] xsm:invisible sm:visible'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
						</p>
					</div>
				</div>
			{/* featured articles section */}
				<section className=' px-4 md:px-[100px] '>			
					<div className=' flex flex-col-reverse items-center md:flex-row md:justify-between  md:py-6'>
						<p className='self-start py-4 font-bold text-green-700 lg:ml-32 md:self-center md:py-0 xxsm:hidden'>
							ALL VIDEOS
						</p>
						<div className='relative py-4 ml-auto md:w-80 md:py-0 '>
							<input
								type='text'
								placeholder='Search by event'
								className='xxsm:w-full rounded-[3px] border bg-gray-100 p-2 outline-none'
							/>
							<AiOutlineSearch className=' absolute right-2 top-6 h-6 w-10 bg-gray-100 md:top-2 inset-y-0 right-0' />
						</div>
					</div>
				</section>

				<main className='lg:grid mr-5 lg:grid-cols-5 lg:gap-4  xxsm:ml-5 mx-auto'>
					<aside className='m-10 lg:ml-20 z-40   lg:mt-1 sm:-mt-10 sm:absolute'>
						<h1 className='font-bold text-xl xxsm:-ml-10'>CATEGORIES</h1>
						<DropDown />
					</aside>
					<section className='lg:col-start-2 col-end-8'>
						{/* Video Gallery */}
						<GridGallery video={video} />

						{/* Video Pagination */}
						<Pagination />
					</section>
				</main>
			<UpcomingEvents />
    </>
  )

}

export default EventVideos