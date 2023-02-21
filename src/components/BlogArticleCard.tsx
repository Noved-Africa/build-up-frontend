import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BlogContent } from "@/contents/blogContent";

const BlogArticleCard = ({ id, category, title, image, content }: BlogContent) => {
	return (
		<article key={id} className=' max-w-sm space-y-6 	'>
			<div className=' bg-green-700 h-[240px] md:h-[325px] '>
				<Image
					src = {`image`}
					alt=''
					className=' aspect-square w-full bg-black h-full rounded-lg object-cover '
				/>
			</div>
			<div className=' space-y-6'>
				<p className=' w-fit rounded-[3px] bg-[#D4EDDA] px-3 py-[1px] text-sm '>
					{category}
				</p>
				<h2 className=' faq_heading text:[20px] md:text-[28px] font-bold'>{title}</h2>
				<p className=" text-sm text-[16px] ">{content}</p>
				<div className=' flex items-center space-x-4 text-[#218B39]'>
					<p>Read this article</p>
					<BsArrowRight />
				</div>
			</div>
		</article>
	);
};

export default BlogArticleCard;
