import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Faq from "../components/Faq";

type FaqQuestions = {
	id: number;
	question: string;
	category: string;
	answer: string;
};

const faqs: FaqQuestions[] = [
	{
		id: 1,
		question: "What is the Build-Up Africa Summit?",
		category: "general",
		answer:
			"Lscing orem ipsum dolor sit amet, consectetur adipi poskahg-ojasd asdfogo orem ipsum dolor sit amet, consectetur adipi elit. Quis posuere adipiscing convallis.",
	},

	{
		id: 2,
		question: "Can I get a refund?",
		category: "prices",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing convallis.",
	},

	{
		id: 3,
		question: "Do I have to pay yearly for subscriptions?",
		category: "general",
		answer: "okojoi lorem lpkija0sfg am0sogof0asf ina0sifg0ias gi0i0afsg 0is.",
	},
	{
		id: 4,
		question: "Can I get a refund?",
		category: "subscriptions",
		answer:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing convallis.",
	},

	{
		id: 5,
		question: "Do I have to pay yearly for subscriptions?",
		category: "general",
		answer: "okojoi lorem lpkija0sfg am0sogof0asf ina0sifg0ias gi0i0afsg 0is.",
	},
];

const CATEGORIES = [
	"general",
	"subscriptions",
	"prices",
	"events",
	"sponsorship",
];

const Faqs = () => {
	const [activeCategory, setActiveCategory] = useState<
		"general" | "subscriptions" | "prices" | "events" | "sponsorship"
	>("general");

	return (
		<>
			<Head>
				<title>FAQs | Build-Up Africa</title>
			</Head>
			<div className=' mx-auto max-w-6xl pt-[70px] md:pt-[100px] '>
				<div className=' mt-6 md:mt-14 '>
					<div className=' flex flex-col md:flex-row md:justify-between '>
						<p className='faq_heading text-2xl text-center font-bold text-[#218B39] md:text-5xl '>
							Frequently Asked Questions
						</p>
						<div className=' hidden relative md:flex items-center  justify-center '>
							<input
								className=' rounded-[3px] border-2 border-[#E1E1E1] px-2 pt-[10px] pb-[7px] outline-none '
								type='text'
								placeholder='Search by event'
							/>

							<Image
								src='./icons/search.svg'
								className=' absolute right-2 top-2  bg-white'
								alt=''
								width={24}
								height={24}
							/>
						</div>
					</div>
					<div className='my-[70px] flex flex-col md:flex-row gap-6'>
						<div className=' h-fit md:w-1/3 bg-[#D4EDDA] py-10 px-4 md:px-8 '>
							<p className=' mb-6 text-xl font-bold'>Category</p>
							<div>
								{/* <Link href=''></Link> */}
								<ul className=' list-none space-y-2'>
									{CATEGORIES.map((category) => (
										<li
											key={category}
											className={`rounded-[3px] py-[8.5px] pl-8 capitalize ${
												category === activeCategory
													? "bg-[#218B39] text-white"
													: ""
											}`}
											onClick={() => setActiveCategory(category)}>
											{category}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className=' md:w-2/3 px-4 md:px-[35px] shadow-lg'>
							<div>
								{faqs
									.filter((faq) => faq.category === activeCategory)
									.map((faq) => (
										<Faq
											key={faq.id}
											question={faq.question}
											answer={faq.answer}
										/>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Faqs;
