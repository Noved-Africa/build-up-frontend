import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FeaturedBlogCard = () => {
	return (
		<article className=' flex flex-shrink-0 flex-col md:flex-row  md:w-[1030px] gap-3 '>
			<div className=' h-[240px] w-full md:h-[327px] md:w-[623px] flex-shrink-0 rounded-[8px] bg-green-700 '></div>
			<div className=' m-2'>
				<div className=' space-y-6'>
					<p className=' w-fit rounded-[3px] bg-[#D4EDDA] px-3 py-[1px] text-sm '>
						category
					</p>
					<h2 className=' faq_heading text:[20px] font-bold md:text-[28px]'>
						{/* {title} */}
						Lorem ipsum dolor sit.
					</h2>
					<p className=' text-sm text-[16px] '>
						{/* {content} */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
						voluptatem quasi et distinctio porro quia sed ipsum expedita,{" "}
					</p>
					<div className=' flex items-center space-x-4 text-[#218B39]'>
						<p className=" cursor-pointer">Read this article</p>
						<BsArrowRight />
					</div>
				</div>
			</div>
		</article>
	);
};

export default FeaturedBlogCard;
