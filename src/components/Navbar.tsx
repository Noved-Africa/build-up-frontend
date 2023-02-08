import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
	return (
		<header className=' fixed  left-0 right-0 z-50 content-center bg-white px-[100px] py-[20px]  shadow-2xl'>
			<div className=' flex items-center justify-between text-[#3A3A3A]'>
				<Link className='bg-[#218B39] p-4 font-bold text-white' href='/'>
					<p>BUA</p>
				</Link>
				<div className=' flex items-center'>
					<ul className=' flex items-center space-x-6 justify-between'>
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
			</div>
		</header>
	);
};

export default Navbar;
