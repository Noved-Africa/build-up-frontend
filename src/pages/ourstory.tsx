import React from "react";
import Head from "next/head";
import Image from "next/image";
import OurStory from "./../../public/images/ourstory.jpeg";
import emailCampaign from "./../../public/images/Email_Campaign.svg";
import { HiArrowRight } from "react-icons/hi";

const ourstory = () => {
	return (
		<>
			<Head>
				<title>Our Story | Build-Up Africa</title>
			</Head>
			<div className='  pt-[100px] '>
				<section className=' grid grid-cols-2 bg-[#D4EDDA]  px-[100px] py-32 '>
					<div>
						<h1 className='faq_heading mb-6 text-[60px] font-bold '>
							Your career growth our priority at Build-Up Africa
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
							tempor feugia
						</p>
					</div>
				</section>

				<section className=' flex items-center justify-between py-12 px-[100px]'>
					<div className=' w-1/2 items-center space-y-4'>
						<div className=' flex items-center '>
							<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
							<p className=' text-[24px] font-bold text-[#218B39] '>ABOUT US</p>
						</div>
						<h2 className=' faq_heading text-[30px] '>
							Career. Opportunity. Growth.
						</h2>
						<p className=' w-3/4'>
							Build Up Africa was born out of the burning desire to solve a
							single problem: unemployability. We are a team of strong-willed
							individuals dedicated to equipping undergraduates and fresh
							graduates with valuable employability skills.
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

				<section className=' py-10 px-[100px] text-center'>
					<h2 className=' faq_heading mb-4 text-4xl font-bold '>
						Why Buildup Africa?
					</h2>
					<p className=' mx-auto w-2/3'>
						We deliver full spectrum resources to upskill students for
						employability purposes. Our services will help achieve becoming an
						industry leader and becoming employable after graduation among other
						things.
					</p>
				</section>

				<section className=' px-[100px] pt-16 pb-20 '>
					<div className=' flex space-x-6'>
						<div className=' w-1/2 rounded-[10px] bg-[#FFF9DC] py-10 px-8 text-center '>
							<h2 className=' mb-4 text-[24px]  font-bold'>Our Mission</h2>
							<p className=' w-full'>
								At Buildup Africa, our mission is to empower African
								undergraduates and fresh graduates to become employing and
								employable graduates. We believe that with the right education,
								African undergraduates can become the entreprenuers and leaders
								of today!
							</p>
						</div>

						<div className=' w-1/2 rounded-[10px] bg-[#D1F0DC] py-10 px-8 text-center '>
							<h2 className=' mb-4 text-[24px] font-bold '>Our Vision</h2>
							<p className=' w-full'>
								We deliver full spectrum resources to upskill students for
								employability purposes.
							</p>
						</div>
					</div>
				</section>

				<section className='bg-[#F9F9F9] px-[100px] py-16 '>
					<div className=' w-1/2'>
						<div className=' flex items-center '>
							<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
							<p className=' text-[24px] font-bold text-[#218B39] '>
								OUR CORE VALUES
							</p>
						</div>

						<p className=' faq_heading w-4/5 text-[30px]'>
							Our values are a way of living and creating, not just words.
						</p>
					</div>
				</section>

				<section className='  bg-[#F9F9F9] px-[100px]'>
					<div className=' grid grid-cols-2 gap-y-10 gap-x-4 pt-10 pb-[120px]'>
						<div className=' space-y-6 rounded-[10px]  bg-[#FAF0F4] px-16 py-[72px] '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								1
							</p>
							<h2 className=' text-[40px] '>Quality</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>

						<div className=' space-y-6 rounded-[10px]  bg-[#F0FAF9] px-16 py-[72px] '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								2
							</p>
							<h2 className=' text-[40px] '>Dive deep</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>

						<div className=' space-y-6 rounded-[10px]  bg-[#F0F0FA] px-16 py-[72px] '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								3
							</p>
							<h2 className=' text-[40px] '>Community</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>

						<div className=' space-y-6 rounded-[10px]  bg-[#FCFDED] px-16 py-[72px] '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								4
							</p>
							<h2 className=' text-[40px] '>Custom learning</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>
					</div>
				</section>

				<section className=' px-[100px] py-[141px]'>
					<div className='  text-center'>
						<h1 className=' faq_heading mb-6 text-[54px] font-bold'>
							Join the BUA community
						</h1>
						<p className=' mx-auto mb-16 w-3/4'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
							tempor feugia
						</p>
						<div className=' flex justify-center '>
							<button className=' flex h-fit items-center justify-center self-center bg-[#218B39] py-2 px-[23px]'>
								Visit community page <HiArrowRight className=' ml-3' />
							</button>
						</div>
					</div>
				</section>

				<section className='bg-[#F9F9F9] px-[100px] py-16 '>
					<div className=' w-1/2'>
						<div className=' flex items-center'>
							<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
							<p className='  text-[24px] font-bold text-[#218B39] '>
								OUR PARTNERS
							</p>
						</div>
						<p className=' faq_heading text-[30px]'>
							Organisations we have worked with to achieve our mission & vision.
						</p>
					</div>
					<div className=' mt-16 grid grid-cols-5 gap-6'>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
					</div>
				</section>
				<section className='  bg-[#3A3A3A] py-[100px]'>
					<div className=' mx-auto flex w-fit flex-col justify-center space-y-16 text-center'>
						<Image src={emailCampaign} alt='' className=' mx-auto' />
						<p className=' faq_heading mx-auto w-4/5 text-[36px] text-white'>
							Don’t miss out. Stay updated with our newsletter
						</p>
						<form className=' mx-auto flex w-fit space-x-2'>
							<input
								type='text'
								placeholder='Full name'
								className=' py-[10px] px-4'
							/>
							<input
								type='text'
								placeholder='Email address'
								className=' py-[10px] px-4'
							/>
							<button className=' bg-[#218B39] px-8 py-2 '>Subscribe</button>
						</form>
					</div>
				</section>
			</div>
		</>
	);
};

export default ourstory;
