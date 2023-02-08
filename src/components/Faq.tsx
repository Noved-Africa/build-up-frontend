import React, { FC, useState } from "react";
import Image from "next/image";

interface Props {
  question: string;
  answer: string;
}
const Faq:FC<Props> = ({question, answer}) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<div className=' border-b py-6'>
			<div
				onClick={() => {
					setShowInfo(!showInfo);
				}}
				className=' flex cursor-pointer items-center justify-between pb-[11px]  text-lg'>
				<p>{question}</p>
				{showInfo ? (
					<Image
						src='./icons/arrow-up.svg'
						alt=''
						width={24}
						height={24}
						className=' mr-10'
					/>
				) : (
					<Image
						src='./icons/arrow-down.svg'
						alt=''
						width={24}
						height={24}
						className=' mr-10'
					/>
				)}
			</div>
			{showInfo && (
				<div>
					<p className=' text-sm'>{answer}</p>
				</div>
			)}
		</div>
	);
};

export default Faq;
