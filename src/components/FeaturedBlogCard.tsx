import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const FeaturedBlogCard = ({ ...blog }) => {
	return (
		<article className=' flex w-full flex-shrink-0 flex-col gap-3  md:w-[1030px] md:flex-row '>
			<div className=' h-[240px] w-full flex-shrink-0 rounded-[8px] bg-green-700 md:h-[327px] md:w-[623px] '>
				<Image src={blog.image} alt='' width={400} height= {0} className=" h-full w-full object-cover object-top" />
			</div>
			<div className=' m-2'>
				<div className=' space-y-6'>
					<p className=' w-fit rounded-[3px] bg-[#D4EDDA] px-3 py-[1px] text-sm '>
						{blog.category}
					</p>
					<h2 className=' faq_heading text:[20px] font-bold md:text-[28px]'>
						{blog.title}
						Lorem ipsum dolor sit.
					</h2>
					<p className=' text-sm text-[16px] '>
						{blog.content}
					</p>
					<div className=' flex items-center space-x-4 text-[#218B39]'>
						<p className=' cursor-pointer'>Read this article</p>
						<BsArrowRight />
					</div>
				</div>
			</div>
		</article>
	);
};

export default FeaturedBlogCard;
