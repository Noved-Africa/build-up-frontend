import React from "react";
import Head from "next/head";
import Image from "next/image";
import OurStory from "/public/images/ourstory.jpeg";
import emailCampaign from "/public/images/Email_Campaign.svg";
import { HiArrowRight } from "react-icons/hi";
import Newsletter from "@/components/newsletter";

const ourstory = () => {
	return (
		<>
			<Head>
				<title>Our Story | Build-Up Africa</title>
			</Head>
			<div className=' pt-[70px] md:pt-[100px] '>
				<section className=' grid grid-cols-1 bg-[#D4EDDA] px-4 py-32 text-center md:grid-cols-2 md:px-[100px] md:text-left '>
					<div>
						<h1 className='faq_heading mb-10 px-[20px] text-[30px] font-bold md:mb-6 md:px-0 md:text-[60px] '>
							Your career growth our priority at Build-Up Africa
						</h1>
						<p
							className=' text-sm md:text-lg
						
						 '>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
							tempor feugia
						</p>
					</div>
				</section>

				<section className=' flex flex-col items-center justify-between py-8 px-4 md:flex-row md:py-12 md:px-[100px]'>
					<div className=' items-center space-y-6 md:w-1/2 md:space-y-4'>
						<div className=' flex items-center '>
							<span className=' mr-4  h-1 w-4 bg-[#218B39] md:w-8 '></span>
							<p className=' text-sm font-bold text-[#218B39] md:text-[24px] '>
								ABOUT US
							</p>
						</div>

						<div className=' h-[278px] w-[396px] rounded-lg md:hidden md:h-[405px] md:w-[478px]'>
							<Image
								src={OurStory}
								alt=''
								className=' h-full  rounded-[10px] object-cover object-center '
							/>
						</div>
						<h2 className=' faq_heading text-[24px] font-bold md:text-[30px] '>
							Career. Opportunity. Growth.
						</h2>
						<p className=' text-sm md:w-3/4 md:text-[16px]'>
							Build Up Africa was born out of the burning desire to solve a
							single problem: unemployability. We are a team of strong-willed
							individuals dedicated to equipping undergraduates and fresh
							graduates with valuable employability skills.
						</p>
					</div>
					<div className=' hidden h-[278px] w-[390px] rounded-lg px-4 md:block md:h-[405px] md:w-[478px]'>
						<Image
							src={OurStory}
							alt=''
							className=' h-full  rounded-[10px] object-cover object-center '
						/>
					</div>
				</section>

				<section className=' py-4 px-4 text-center md:py-10 md:px-[100px]'>
					<h2 className=' faq_heading mb-4 text-2xl font-bold md:text-4xl '>
						Why Buildup Africa?
					</h2>
					<p className=' mx-auto text-sm md:w-2/3 md:text-[16px]'>
						We deliver full spectrum resources to upskill students for
						employability purposes. Our services will help achieve becoming an
						industry leader and becoming employable after graduation among other
						things.
					</p>
				</section>

				<section className=' px-4 pt-16 pb-20 md:px-[100px] '>
					<div className=' flex flex-col space-y-6 shadow-lg md:flex-row md:space-x-6  md:space-y-0'>
						<div className='  rounded-[10px] bg-[#D1F0DC] py-10 px-8 text-center shadow-lg md:w-1/2 '>
							<h2 className=' faq_heading mb-4 text-[24px] font-bold text-[#145322] '>
								Our Vision
							</h2>
							<p className=' w-full'>
								We deliver full spectrum resources to upskill students for
								employability purposes.
							</p>
						</div>

						<div className=' rounded-[10px] bg-[#FFF9DC] py-10 px-8 text-center shadow-lg md:w-1/2 '>
							<h2 className=' faq_heading mb-4 text-[24px] font-bold  text-[#145322]'>
								Our Mission
							</h2>
							<p className=' w-full'>
								At Buildup Africa, our mission is to empower African
								undergraduates and fresh graduates to become employing and
								employable graduates. We believe that with the right education,
								African undergraduates can become the entreprenuers and leaders
								of today!
							</p>
						</div>
					</div>
				</section>

				<section className='bg-[#F9F9F9] px-4 py-16 md:px-[100px] '>
					<div className=' md:w-1/2'>
						<div className=' flex items-center '>
							<span className=' mr-4  h-1 w-4 bg-[#218B39] md:w-8 '></span>
							<p className=' text-sm font-bold text-[#218B39] md:text-[24px] '>
								OUR CORE VALUES
							</p>
						</div>

						<p className=' faq_heading w-4/5 text-[18px] md:text-[30px]'>
							Our values are a way of living and creating, not just words.
						</p>
					</div>
				</section>

				<section className='   px-4 md:px-[100px]'>
					<div className=' grid grid-cols-1 gap-y-6 pt-10 pb-10 md:grid-cols-2 md:gap-y-10 md:gap-x-4 md:pb-[120px]'>
						<div className=' space-y-6 rounded-[10px]  bg-[#FAF0F4] px-6 py-10 md:py-[72px] md:px-16 '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								1
							</p>
							<h2 className=' text-2xl md:text-[40px] '>Quality</h2>
							<p className=' text-sm md:text-[16px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>

						<div className=' space-y-6 rounded-[10px]  bg-[#F0FAF9] px-6 py-10 md:py-[72px] md:px-16 '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								2
							</p>
							<h2 className=' text-2xl md:text-[40px] '>Dive deep</h2>
							<p className=' text-sm md:text-[16px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>

						<div className=' space-y-6 rounded-[10px]  bg-[#F0F0FA] px-6 py-10 md:py-[72px] md:px-16 '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								3
							</p>
							<h2 className=' text-2xl md:text-[40px] '>Community</h2>
							<p className=' text-sm md:text-[16px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>

						<div className=' space-y-6 rounded-[10px]  bg-[#FCFDED] px-6 py-10 md:py-[72px] md:px-16 '>
							<p className=' h-10 w-10 items-center rounded-full bg-white p-1  text-center text-[24px]'>
								4
							</p>
							<h2 className=' text-2xl md:text-[40px] '>Custom learning</h2>
							<p className=' text-sm md:text-[16px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
								tempor dolor sit amet, consectetur adipiscing elit. Quis posu
								scing coallis sit.
							</p>
						</div>
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

				<section className='bg-[#F9F9F9] px-4 py-8	 md:py-16 md:px-[100px] '>
					<div className=' md:w-1/2'>
						<div className=' flex flex-row items-center'>
							<span className=' mr-4  h-1 w-8 bg-[#218B39] '></span>
							<p className=' text-sm font-bold text-[#218B39] md:text-[24px] '>
								OUR PARTNERS
							</p>
						</div>
						<p className=' faq_heading text-[18px] md:text-[30px]'>
							Organizations we have worked with to achieve our mission & vision.
						</p>
					</div>
					<div className=' mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-5 md:gap-6'>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
						<div className=' h-[120px] rounded-[10px] bg-[#D9D9D9] '></div>
					</div>
				</section>

				<Newsletter />
			</div>
		</>
	);
};

export default ourstory;
