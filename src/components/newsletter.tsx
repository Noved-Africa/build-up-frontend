import React from "react";
import Image from "next/image";
import emailCampaign from "./../../public/images/Email_Campaign.svg";


const Newsletter = () => {
	return (
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
					<button className=' bg-[#218B39]  px-8 py-2 '>Subscribe</button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
