import React from "react";
import Image from "next/image";
import emailCampaign from "./../../public/images/Email_Campaign.svg";

const Newsletter = () => {
	return (
		<section className='  bg-[#3A3A3A] py-[70px] md:py-[100px]'>
			<div className=' mx-auto flex w-fit flex-col justify-center space-y-10 px-4 text-center md:space-y-16'>
				<Image src={emailCampaign} alt='' className=' mx-auto' />
				<p className=' faq_heading mx-auto w-4/5 text-[20px] text-white md:text-[36px]'>
					Don’t miss out. Stay updated with our newsletter
				</p>
				<form className=' mx-auto flex w-full flex-col md:w-fit md:flex-row md:space-x-2'>
					<input
						type='text'
						placeholder='Full name'
						className=' mb-2 rounded-[3px] py-[10px] px-4 md:mb-0'
					/>
					<input
						type='text'
						placeholder='Email address'
						className=' mb-6 rounded-[3px] py-[10px] px-4 md:mb-0'
					/>
					<button className=' rounded-[3px] bg-[#218B39] px-8 py-2 text-white '>
						Subscribe
					</button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
