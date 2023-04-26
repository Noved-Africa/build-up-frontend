import React from "react";
import Link from "next/link";
import {
	IoIosArrowDown,
	IoIosClose,
	IoMdHelpCircleOutline,
} from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleNavbar() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<header className=' fixed top-0 left-0 right-0 z-20 w-full content-center bg-white p-4 shadow-lg md:px-[100px] md:py-[20px]'>
				<div className=' flex items-center justify-between text-[#3A3A3A]'>
					{/* logo */}
					<Link
						className='bg-[#218B39] px-2 py-[10px] font-bold text-white md:px-4 md:py-[18px]'
						href='/'>
						<p className=' text-xs md:text-[14px]'>BUA</p>
					</Link>

					{/* link on the desktop screen */}
					<div className='hidden items-center xl:flex'>
						<ul className=' flex items-center justify-between space-x-6'>
							<Link href='/products' className=' flex items-center  px-3 py-2 '>
								<li className=' mr-3'>Our Products</li>
								<IoIosArrowDown className=' h-5 w-5 ' />
							</Link>

							<Link href='/products' className=' flex items-center  px-3 py-2 '>
								<li className=' mr-3'>Our Services</li>
								<IoIosArrowDown className=' h-5 w-5 ' />
							</Link>

							<Link href='/#' className=' flex items-center  px-3 py-2 '>
								<li className=' mr-3'>Media</li>
								<IoIosArrowDown className=' h-5 w-5 ' />
							</Link>

							<Link href='/ourstory' className=' flex items-center  px-3 py-2 '>
								<li className=''>Our Story</li>
							</Link>

							<Link href='/careers' className=' flex items-center  px-3 py-2 '>
								<li className=''>Careers</li>
							</Link>

							<Link href='/contact' className=' flex items-center  px-3 py-2 '>
								<li className='mr-3 '>Contacts</li>
								<IoIosArrowDown className=' h-5 w-5 ' />
							</Link>
						</ul>
					</div>

					{/* hamburger for mobile menu  */}
					<div
						onClick={toggleNavbar}
						className='h-6 w-6 cursor-pointer text-[#218B39] duration-3500 xl:hidden'>
						{isOpen ? (
							<IoIosClose className='h-full w-full ' />
						) : (
							<HiMenuAlt3 className=' h-full w-full  rotate-180 xl:hidden ' />
						)}
					</div>
				</div>
				
				<div
					className={` ${
						isOpen ? "left-0 right-0 " : " -left-[200px]"
					} absolute top-[68px] z-20 h-screen bg-white duration-500 xl:hidden`}>
					<div className=' '>
						<div
							onClick={toggleNavbar}
							className=' flex items-center justify-between border-t  py-4 px-4'>
							<Link className=' flex-grow' href='/products'>
								Our Products
							</Link>
							<HiOutlineChevronRight className=' h-4 w-4 ' />
						</div>

						<div
							onClick={toggleNavbar}
							className=' flex items-center justify-between border-t  py-4 px-4'>
							<Link className=' flex-grow' href='/#'>
								Our Services
							</Link>
							<HiOutlineChevronRight className=' h-4 w-4 ' />
						</div>

						<div
							onClick={toggleNavbar}
							className=' flex items-center justify-between border-t  py-4 px-4'>
							<Link className=' flex-grow' href='/#'>
								Media
							</Link>
							<HiOutlineChevronRight className=' h-4 w-4 ' />
						</div>

						<div
							onClick={toggleNavbar}
							className=' flex items-center justify-between border-t  py-4 px-4'>
							<Link className=' flex-grow' href='/ourstory'>
								Our Story
							</Link>
							{/* <HiOutlineChevronRight className=' h-4 w-4 ' /> */}
						</div>

						<div
							onClick={toggleNavbar}
							className=' flex items-center justify-between border-t  py-4 px-4'>
							<Link className=' flex-grow' href='/careers'>
								Careers
							</Link>
							{/* <HiOutlineChevronRight className=' h-4 w-4 ' /> */}
						</div>

						<div
							onClick={toggleNavbar}
							className=' flex items-center justify-between border-t  py-4 px-4'>
							<Link className=' flex-grow' href='/contact'>
								Contacts
							</Link>
							<HiOutlineChevronRight className=' h-4 w-4 ' />
						</div>
					</div>

					<div className=' bottom-0 left-6  flex flex-shrink-0 bg-green-800 '>
						<p>Help</p>
						<IoMdHelpCircleOutline />
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
