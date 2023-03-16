import React, { useState, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
// import speaker from "./../../../public/images/blog1.jpeg";
// import { blogContent } from "@/contents/blogContent";
import BlogArticle from "@/components/BlogArticle";
import BlogArticleCard from "@/components/BlogArticleCard";
import { BlogContent, blogDemoData } from "@/contents/blogContent";
import { AiOutlineSearch } from "react-icons/ai";
import FeaturedBlogCard from "@/components/FeaturedBlogCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const otherCategories = ["events", "academics", "stories", "community"];
const CATEGORIES = ["all", ...otherCategories];
// const filterItems = (category) => {
// if (category === "all") {
// setBlogData(blogDemoData);
// return;
// }
// const newData = blogDemoData.filter((blog) => blog.category === category);
// setBlogData(newData);

// function filterCategory()=>{
// 	 if (category === "all") {
// setBlogData(blogDemoData);
// return;
// }

const Blog = () => {
	const [blogData, setBlogData] = useState<BlogContent[]>(blogDemoData);
	// const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef<HTMLDivElement>(null);
	const [activeCategory, setActiveCategory] = useState("all");

	function onNextClick() {
		if (sliderRef.current) {
			// let updatedTranslateX = translateX - getTranslateXValue();
			sliderRef.current.style.transform = `translateX(-100%)`;
			// setTranslateX();
		}
	}
	function onPrevClick() {
		if (sliderRef.current) {
			// let updatedTranslateX = translateX + getTranslateXValue();
			sliderRef.current.style.transform = `translateX(100%)`;
			// setTranslateX(updatedTranslateX);
		}
	}

		// function getTranslateXValue() {
		// 	let translateX = 0;
		// 	if (sliderRef.current) {
		// 		translateX =
					
		// 	}
		// 	return translateX;
		// }

	return (
		<>
			<Head>
				<title>Blog | Build-Up Africa</title>
			</Head>
			<div className=' pt-[70px] md:pt-[96px]'>
				<div className='  flex h-full items-center '>
					<h2 className=' faq_heading w-fit flex-shrink-0 bg-[#218B39] px-4 py-6 text-[14px] font-bold text-white md:px-[100px] md:py-[38px] md:pr-[100px] md:text-[36px]'>
						BUA Blog
					</h2>
					<p className='  line-clamp-2 truncate px-4 md:pl-[60px]'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex
						at autem{" "}
					</p>
				</div>


				{/* featured articles section */}
				
				<section className=' px-4 md:px-[100px] '>
					<div className=' flex flex-col-reverse items-center md:flex-row md:justify-between  md:py-6'>
						<p className=' self-start py-4 font-bold text-[#218B39] md:self-center md:py-0 '>
							ALL FEATURED ARTICLES
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
				</section>

				{/* slider section */}
				<section className=' overflow-hidden px-4 pt-6 md:px-[100px] md:pt-10 '>
					<div ref={sliderRef} className='relative flex gap-24  '>
						{blogData.map(({ id, ...blog }: BlogContent) => (
							<FeaturedBlogCard key={id} {...blog} />
						))}
					</div>
					<div className=' mx-auto mt-16 flex w-fit space-x-2 '>
						<button
							onClick={onPrevClick}
							className=' rounded-full bg-green-600 p-1 text-white'>
							<IoIosArrowBack className='h-6 w-6' />
						</button>

						<div>
							<BsDot className='h-6 w-6' />
						</div>
						<button
							onClick={onNextClick}
							className=' rounded-full bg-green-600 p-1 text-white'>
							<IoIosArrowForward className='h-6 w-6' />
						</button>
					</div>
				</section>
				{/* <section className=' px-4'>
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
				</section> */}

				<section className=' mt-16'>
					<div className='bg-[#F7F7F7] px-4 py-8 md:px-[100px]'>
						<div className=' flex w-full space-x-6 overflow-x-scroll  '>
							{CATEGORIES.map((category) => (
								<p
									key={category}
									onClick={() => setActiveCategory(category)}
									className={` cursor-pointer rounded-[3px]  px-3  py-[6px] capitalize  ${
										activeCategory === category
											? "bg-[#218B39] text-white"
											: "bg-[#EBEBEB] text-black"
									}`}>
									{category}
								</p>
							))}
						</div>
					</div>
					<div className=' px-4 py-16 md:px-[100px]'>
						<div className=' grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3'>
							{blogData
								.filter((blog) =>
									activeCategory === "all"
										? true
										: blog.category === activeCategory
								)
								.map(({ id, ...blog }: BlogContent) => (
									<BlogArticleCard key={id} {...blog} />
								))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Blog;
