import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { BlogContent, blogDemoData } from "@/contents/blogContent";

const BlogArticleCard = ({ ...blog }) => {
	return (
		<article className=' max-w-sm space-y-6 	'>
			<div className=' h-[240px] md:h-[325px] '>
				<Image
					src={blog.image}
					alt=''
					width={500}
					height={500}
					className=' aspect-square object-top h-full w-full rounded-lg object-cover '
				/>
			</div>
			<div className=' space-y-6'>
				<p className=' w-fit rounded-[3px] bg-[#D4EDDA] px-3 py-[1px] text-sm '>
					{blog.category}
				</p>
				<h2 className=' faq_heading text:[20px] font-bold md:text-[28px]'>
					{blog.title}
				</h2>
				<p className=' text-sm text-[16px] '>{blog.content}</p>
				<div className=' flex items-center space-x-4 text-[#218B39]'>
					<p>Read this article</p>
					<BsArrowRight />
				</div>
			</div>
		</article>
	);
};

export default BlogArticleCard;
