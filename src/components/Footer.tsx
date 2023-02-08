import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	FaTwitter,
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
	FaYoutube,
} from "react-icons/fa";
import logo from "../public/icons/facebook.png";

const Footer = () => {
	return (
		<footer className=' flex bg-[#102232] p-[100px] text-white'>
			<div className='w-1/2'>
				<div className='mb-6 flex items-center space-x-4'>
					<p className=' h-10 w-10 bg-green-700'></p>
					<p className=' text-[24px] font-bold'>Build-Up Africa</p>
				</div>
				<p className='w-1/2 text-[16px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere
					adipiscing convallis.
				</p>
				<div className=' mt-[44px] mb-[68px] flex items-center space-x-[24px]'>
					<Link className=' rounded-full border-2  p-[8px]' href={"#"}>
						<FaTwitter className=' h-3 w-3' />
					</Link>

					<Link className=' rounded-full border-2  p-[8px]' href={"#"}>
						<FaInstagram className=' h-3 w-3' />
					</Link>

					<Link className=' rounded-full border-2  p-[8px]' href={"#"}>
						<FaFacebookF className=' h-3 w-3' />
					</Link>

					<Link className=' rounded-full border-2  p-[8px]' href={"#"}>
						<FaLinkedinIn className=' h-3 w-3' />
					</Link>
					<Link className=' rounded-full border-2  p-[8px]' href={"#"}>
						<FaYoutube className=' h-3 w-3' />
					</Link>
				</div>

				<div className=' mb-6 flex text-lg'>
					<p className=' pr-5'>Give us a call: </p>
					<div className=' text-[#93D3A2]'>
						<p>+234 (0) 123 456 7890</p>
						<p>+234 (0) 123 456 7890</p>
					</div>
				</div>
				<div className=' mb-16  flex'>
					<p className=' mr-4'>Email support: </p>
					<p className=' text-[#93D3A2]'>cooperatehomes@support.mail</p>
				</div>

				<div>
					<p className=' text-lg'>
						2022 Build Up Africa Inc. All Rights Reserved.{" "}
					</p>
				</div>
			</div>

			<div className='w-1/2'>
				<div className='mb-16 grid h-fit grid-cols-3 justify-between gap-y-20  '>
					<div className='h-fit'>
						<h2 className=' mb-6 text-2xl font-bold'>Products</h2>
						<div className=' space-y-[16px] '>
							<p>U-Grad</p>
							<p>U-Grad Academy</p>
						</div>
					</div>

					<div className='h-fit'>
						<h2 className=' mb-6 text-2xl font-bold'>Services</h2>
						<div className=' space-y-[16px] '>
							<p>Community</p>
							<p>Event</p>
							<p>Event Consult</p>
						</div>
					</div>

					<div className='h-fit'>
						<h2 className=' mb-6 text-2xl font-bold'>Media</h2>
						<div className=' space-y-[16px] '>
							<p>Event Photos</p>
							<p>Event Videos</p>
							<p>News</p>
							<p>Testimonials</p>
						</div>
					</div>

					<div>
						<h2 className=' mb-6 text-2xl font-bold'>Company</h2>
						<div className=' space-y-[16px] '>
							<p>Our Story</p>
							<p>Careers</p>
							<p>News</p>
							<p>Testimonials</p>
							<p>BUA Webinars</p>
							<p>BUA Masterclass</p>
							<p>Contact</p>
							<p>FAQs</p>
						</div>
					</div>

					<div>
						<h2 className=' mb-6 text-2xl font-bold'>Legal</h2>
						<div className=' space-y-[16px] '>
							<p>Privacy Policy</p>
							<p>Terms of Use</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
