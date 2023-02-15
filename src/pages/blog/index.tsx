import React from "react";
import Image from "next/image";
import speaker from "./../../../public/images/speaker.jpeg";

const index = () => {
	return (
		<div className=' pt-[70px]'>
			<div className=' flex w-full flex-row items-center'>
				<div className=' faq_heading w-1/3 bg-[#218B39] px-4 py-6 text-[14px] text-white'>
					<h2 className=' w-full font-bold '>BUA Blog</h2>
				</div>
				<div className=' p-4 text-[12px]'>
					<p className=' '>
						Lorem ipsum dolor sit amet, consectetur ing elit. Q posuere
						adipiscing dkserr con.
					</p>
				</div>
			</div>
			<section className='  px-4 pt-[40px]  '></section>

			<section className=" px-4">
				<div></div>
				<article className=' space-y-[24.5px] '>
					<div className=' h-[240px]'>
						<Image
							src={speaker}
							alt={"speaker"}
							className=' w-full object-cover object-center'
						/>
					</div>
				</article>
			</section>
		</div>
	);
};

export default index;
