import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
	return (
		<header className=' fixed left-0 right-0 z-50 content-center bg-white p-4 shadow-lg md:px-[100px]  md:py-[20px]'>
			<div className=' flex items-center justify-between text-[#3A3A3A]'>
				<Link
					className='bg-[#218B39] px-2 py-[10px] font-bold text-white md:px-4 md:py-[18px]'
					href='/'>
					<p className=' text-xs md:text-[14px]'>BUA</p>
				</Link>
				<div className=' hidden items-center md:flex'>
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

				<HiMenuAlt3 className=' h-6 w-6 rotate-180 cursor-pointer text-[#218B39] md:hidden ' />
			</div>
		</header>
	);
};

export default Navbar;
