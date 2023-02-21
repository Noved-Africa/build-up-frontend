import React from "react";
import Head from "next/head";
import { FaMap, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact | Build-Up Africa</title>
			</Head>
			<div>
				<section className='  flex flex-col px-4  pt-[120px] pb-24 md:flex-row md:px-[175px] md:pt-44 '>
					<div className=' z-0 w-full max-w-[844px] space-y-8 rounded-[10px] bg-[#1E4262] px-4 pt-10 pb-10 text-center text-white md:w-3/4 md:px-0 md:pt-16 md:pb-[76px] md:pl-14  md:text-left'>
						<p className=' faq_heading w-full text-[24px] font-bold md:w-1/2 md:text-5xl'>
							Get in touch with us
						</p>
						<p className=' w-fit text-[16px] md:w-1/2'>
							Praesent sapien massa, convallis a pellentesque nec, egestas non
							nisi. Proineget.
						</p>

						{/* location  */}
						<div className='flex text-left'>
							<FaMap className=' mr-4 h-7 w-7 text-[#28A745]' />
							<div>
								<p className=' font-bold'>Location</p>
								<p>2825 Masonic Hill Road, Little Rock, Arkansas 72201</p>
							</div>
						</div>

						{/* telephone  */}
						<div className='flex text-left'>
							<FaPhone className=' mr-4 h-7 w-7 text-[#28A745]' />

							<div>
								<p className=' font-bold'>Customer Care Number</p>
								<p>+1 800-655-5489</p>
							</div>
						</div>

						{/* email  */}
						<div className='flex text-left'>
							<FaEnvelope className=' mr-4 h-7 w-7 text-[#28A745]' />

							<div>
								<p className=' font-bold'>Support Email</p>
								<p>support@skipper.com, help@skipper.co</p>
							</div>
						</div>
					</div>

					<div className=' z-10 mt-10 w-full rounded-[10px] bg-white px-[20px] py-10 shadow-lg md:my-5 md:-ml-52 md:w-1/2 md:p-[46px] '>
						<form className=' w-full space-y-[16px]'>
							<div className=' w-full'>
								<label className=' mb-[4px] pl-[10px]' htmlFor='fullname'>
									Full Name
								</label>
								<input
									type='text'
									placeholder='Enter your name'
									className=' w-full rounded-[5px] border border-[#CACACA] p-[10px] px-[24px] pt-3 pb-[14px] outline-none '
								/>
							</div>
							<div className=' w-full'>
								<label className='mb-[4px] pl-[10px]' htmlFor='email'>
									Email Address
								</label>
								<input
									type='text'
									placeholder='Enter your email address'
									className='  w-full rounded-[5px] border border-[#CACACA] p-[10px] px-[24px] pt-3 pb-[14px] outline-none '
								/>
							</div>

							<div className=' w-full'>
								<label className=' mb-[4px] pl-[10px]' htmlFor='subject'>
									Subject
								</label>
								<input
									type='text'
									placeholder='Enter the subject of your mail'
									className=' w-full rounded-[5px] border border-[#CACACA] p-[10px] px-[24px] pt-3 pb-[14px] outline-none '
								/>
							</div>

							<div className=' w-full'>
								<label className=' mb-[4px] pl-[10px]' htmlFor='subject'>
									What are you contacting about?
								</label>
								<textarea
									name=''
									id=''
									cols={30}
									rows={5}
									placeholder='Description'
									className='w-full  rounded-[5px] border border-[#CACACA] px-[24px] pt-3'></textarea>
							</div>
							<button className=' w-full rounded-[5px] bg-[#218B39] py-[8.5px] text-center'>
								<span className=' text-white'>Submit</span>
							</button>
						</form>
					</div>
				</section>

				<section className=' overlay h-[324px] bg-image bg-cover bg-center bg-no-repeat text-white bg-blend-overlay md:h-[682px] '>
					<div className=' to-#00160599 grid h-full w-full grid-cols-1 gap-20 bg-gradient-to-r from-[#218B3999] px-4 pt-[72px] text-center backdrop-brightness-100 md:grid-cols-2 md:px-[140px] md:pt-[183px]'>
						<div className=' hidden md:block'></div>
						<div className='  justify-self-end'>
							<h2 className=' faq_heading mb-4 px-12 text-[24px] font-bold md:mb-6 md:text-6xl'>
								Check how we can help you
							</h2>
							<p className=' text-[16px] md:text-lg'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
								posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
								tempor feugia
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
