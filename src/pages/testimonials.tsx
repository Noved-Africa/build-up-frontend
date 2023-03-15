import React from "react";
import Head from "next/head";
import Image from "next/image";
import OurStory from "./../../public/images/ourstory.jpeg";
import insider from "./../../public/images/insider.jpeg";
import { HiArrowRight } from "react-icons/hi";
import testifier from "./../../public/images/testifier.jpeg";

const testimonials = () => {
	return (
		<>
			<Head>
				<title>Testimonials | Build-Up Africa</title>
			</Head>
			<div className=' pt-[70px] md:pt-[98px] '>
				<section className='  '>
					<div className=' bg-[#D4EDDA] px-4 py-[138px] text-center  md:py-16 '>
						<h2 className=' faq_heading mb-4 text-[30px] font-bold md:text-[54px]'>
							BUA Testimonials
						</h2>
						<p className=' mx-auto max-w-2xl text-center text-sm md:text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
							tempor feugia
						</p>
					</div>
				</section>
				<section className=' flex flex-row justify-between gap-[50px] bg-[#149844] px-5 py-[34px] text-white  md:px-[206px] md:py-[68px]'>
					<div className=' text-center '>
						<h2 className=' text-[30px] font-bold md:text-[57px]  '>#1</h2>
						<p className=' text-sm font-bold md:text-[24px] '>
							Campus Community
						</p>
					</div>

					<div className=' text-center '>
						<h2 className=' text-[30px] font-bold md:text-[57px]  '>5+</h2>
						<p className=' text-sm font-bold md:text-[24px] '>
							Campus events yearly
						</p>
					</div>

					<div className=' text-center '>
						<h2 className=' text-[30px] font-bold md:text-[57px]  '>#1</h2>
						<p className=' text-sm font-bold md:text-[24px] '>
							Job marketplace
						</p>
					</div>
				</section>

				<section className=' flex flex-col items-center justify-between py-12 px-4 md:flex-row md:px-[100px]'>
					<div className=' items-center space-y-4 md:w-1/2'>
						<div className=' flex items-center '>
							<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
							<p className=' text-[14px] font-bold text-[#218B39] md:text-[24px] '>
								TESTIMONIALS
							</p>
						</div>

						<h2 className=' faq_heading text-lg font-bold md:w-4/5 md:text-3xl '>
							Our mission is to empower young African undergraduates and fresh
							graduates
						</h2>
						<div className=' h-[405px] w-full rounded-lg py-4 md:hidden md:w-[478px]'>
							<Image
								src={OurStory}
								alt=''
								className=' h-full  rounded-[10px] object-cover object-center '
							/>
						</div>
						<p className=' text-sm md:w-3/4 md:text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit amet, consectetur adipiscing elit. Quis posu
							adipiscing coallis sit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc
							adipiscing mi amet tempor dolor sit amet, consectetur adipiscing
							elit. Quis posu adipiscing coallis sit.Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Quis posuere adipiscing coallis sit.
							Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur
							adipiscing elit. Quis posu adipiscing coallis sit.
						</p>
					</div>
					<div className=' hidden h-[405px] w-full rounded-lg md:block md:w-[478px]'>
						<Image
							src={OurStory}
							alt=''
							className=' h-full  rounded-[10px] object-cover object-center '
						/>
					</div>
				</section>

				<section className=' bg-[#E9F6EC] px-4 py-10 md:py-20 md:px-[100px] '>
					<div className=' mb-16 text-center md:mb-10'>
						<h2 className='  faq_heading mb-4 text-2xl font-bold md:mb-9 md:text-[48px]'>
							From the <span className=' text-[#218B39]'>INSIDERS</span>
						</h2>
						<p className=' mx-auto text-sm md:w-1/2 md:text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit.
						</p>
					</div>

					<div className=' '>
						<div className=' grid grid-cols-1 content-center items-center gap-[70px] md:grid-cols-2 md:gap-[103px]'>
							<div className=' max-w-[528px] '>
								<Image
									src={insider}
									alt=''
									className=' h-full  rounded-[10px] bg-no-repeat object-cover object-center '
								/>
							</div>

							<div className=' space-y-4 md:space-y-6'>
								<div className=' flex items-center '>
									<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
									<p className=' text-sm font-bold text-[#218B39] md:text-[18px] '>
										COMMUNITY
									</p>
								</div>
								<h2 className=' faq_heading text-[20px] font-bold md:text-[30px] '>
									“Extraordinary”
								</h2>
								<p className=' text-sm md:text-[16px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
									posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
									tempor dolor sit amet, consectetur adipiscing elit. Quis posu
									scing coallis sit.
								</p>
							</div>
						</div>
						<div>pagination</div>
					</div>
				</section>

				<section className=' py-10 md:py-20'>
					<div className=' text-center'>
						<h2 className='faq_heading mb-4 text-2xl font-bold md:mb-9 md:text-[48px]'>
							Around the <span className=' text-[#218B39]'>WORLD</span>
						</h2>
						<p className=' mx-auto text-sm md:w-1/2  md:text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit.
						</p>
					</div>

					<div className=' px-4 py-10 md:py-20 md:px-[100px]'>
						<div className='flex w-full flex-col space-y-10 overflow-x-scroll md:flex-row md:space-y-0 md:space-x-8'>
							<article className=' rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 md:w-[753px] '>
								<div className=' mb-8 flex space-x-6'>
									<Image
										src={testifier}
										alt=''
										className=' h-[60px] w-[60px] rounded-full object-cover object-center '
									/>
									<div>
										<h1 className=' text-[20px] font-bold'>Evelyn Jones</h1>
										<p className=' text-[#828282]'>12.04.2022</p>
									</div>
								</div>
								<p>
									Lorem Ipsum amet minim mollit non deserunt ullamco est sit
									aliqua dolor do amet sint. Velit officia consequat duis enim
									velit mollit. Exercitation veniam consequat sunt nostrud amet.
									Lorem Ipsum amet minim mollit non. Lorem Ipsu amet minim
									mollit non minim mollit non.
								</p>
							</article>

							<article className=' md:w-[753px] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 '>
								<div className=' mb-8 flex space-x-6'>
									<Image
										src={testifier}
										alt=''
										className=' h-[60px] w-[60px] rounded-full object-cover object-center '
									/>
									<div>
										<h1 className=' text-[20px] font-bold'>Evelyn Jones</h1>
										<p className=' text-[#828282]'>12.04.2022</p>
									</div>
								</div>
								<p>
									Lorem Ipsum amet minim mollit non deserunt ullamco est sit
									aliqua dolor do amet sint. Velit officia consequat duis enim
									velit mollit. Exercitation veniam consequat sunt nostrud amet.
									Lorem Ipsum amet minim mollit non. Lorem Ipsu amet minim
									mollit non minim mollit non.
								</p>
							</article>

							<article className=' md:w-[753px] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 '>
								<div className=' mb-8 flex space-x-6'>
									<Image
										src={testifier}
										alt=''
										className=' h-[60px] w-[60px] rounded-full object-cover object-center '
									/>
									<div>
										<h1 className=' text-[20px] font-bold'>Evelyn Jones</h1>
										<p className=' text-[#828282]'>12.04.2022</p>
									</div>
								</div>
								<p>
									Lorem Ipsum amet minim mollit non deserunt ullamco est sit
									aliqua dolor do amet sint. Velit officia consequat duis enim
									velit mollit. Exercitation veniam consequat sunt nostrud amet.
									Lorem Ipsum amet minim mollit non. Lorem Ipsu amet minim
									mollit non minim mollit non.
								</p>
							</article>
						</div>
						<div></div>
					</div>
				</section>
				<section className=' px-4 py-[141px] md:px-[100px]'>
					<div className='  text-center'>
						<h1 className=' faq_heading mb-6 text-2xl font-bold md:text-[54px]'>
							Join the BUA community
						</h1>
						<p className=' mx-auto mb-12 text-sm md:mb-16 md:w-3/4 md:text-[]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
							tempor feugia
						</p>
						<div className=' flex justify-center '>
							<button className=' flex h-fit items-center justify-center self-center rounded-[3px] bg-[#218B39] py-2 px-[23px] text-white'>
								Visit community page <HiArrowRight className=' ml-3' />
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default testimonials;
