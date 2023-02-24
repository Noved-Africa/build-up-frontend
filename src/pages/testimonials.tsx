import React from "react";
import Head from "next/head";
import Image from "next/image";
import OurStory from "./../../public/images/ourstory.jpeg";
import insider from "./../../public/images/insider.jpeg";
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
				<section className=' flex gap-[50px] bg-[#149844] px-5 py-[34px] text-white md:gap-[200px] md:px-[206px] md:py-[68px]'>
					<div className=' text-center '>
						<h2 className=' text-[30px] font-bold md:text-[57px]  '>#1</h2>
						<p className=' text-sm font-bold md:text-[24px] '>Community</p>
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
				<section className=' flex items-center justify-between py-12 px-[100px]'>
					<div className=' w-1/2 items-center space-y-4'>
						<div className=' flex items-center '>
							<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
							<p className=' text-[24px] font-bold text-[#218B39] '>
								TESTIMONIALS
							</p>
						</div>
						<h2 className=' faq_heading text-[30px] '>
							Our mission is to empower young African undergraduates and fresh
							graduates
						</h2>
						<p className=' w-3/4'>
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
					<div className=' h-[405px] w-[478px] rounded-lg'>
						<Image
							src={OurStory}
							alt=''
							className=' h-full  rounded-[10px] object-cover object-center '
						/>
					</div>
				</section>

				<section className=' bg-[#E9F6EC] px-[100px] py-20 '>
					<div className=' mb-20 text-center'>
						<h2 className='  faq_heading mb-9 text-[48px] font-bold'>
							From the <span className=' text-[#218B39]'>INSIDERS</span>
						</h2>
						<p className=' mx-auto w-1/2'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit.
						</p>
					</div>
					<div className=' '>
						<div className=' grid grid-cols-2 content-center items-center gap-[103px]'>
							<div className=' max-w-[528px] '>
								<Image
									src={insider}
									alt=''
									className=' h-full  rounded-[10px] bg-no-repeat object-cover object-center '
								/>
							</div>
							<div className='  space-y-6'>
								<div className=' flex items-center '>
									<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
									<p className=' text-[18px] font-bold text-[#218B39] '>
										TESTIMONIALS
									</p>
								</div>
								<h2 className=' faq_heading text-[30px] font-bold '>
									“Extraordinary”
								</h2>
								<p>
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

				<section className=' py-20'>
					<div className=' text-center'>
						<h2 className='  faq_heading mb-9 text-[48px] font-bold'>
							Around the <span className=' text-[#218B39]'>WORLD</span>
						</h2>
						<p className=' mx-auto w-1/2'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit.
						</p>
					</div>

					<div className=' px-[100px] py-20'>
						<div className='  flex w-full flex-row space-x-8 overflow-x-scroll'>
							<article className=' w-[753px] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 '>
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

							<article className=' w-[753px] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 '>
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

							<article className=' w-[753px] rounded-2xl bg-gradient-to-r from-[#D4EDDA] to-[#93D3A2] p-8 '>
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
			</div>
		</>
	);
};

export default testimonials;
