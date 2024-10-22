import { HowItWorkCard } from '@/types';
import Image from 'next/image';
import React from 'react';

export default function HowItWorksCard(props: HowItWorkCard) {
	return (
		<div className='rounded-20 flex-row gap-x-4 flex md:flex-col items-center bg-black-secondary p-6'>
			<Image
				alt={props.title}
				src={props.img}
				width={300}
				height={300}
				loading='lazy'
				className='object-cover size-[100px] md:size-[200px] rounded-20 rounded-b-[0] bg-black-secondary'
			/>
			<div className='md:text-center'>
				<div className='font-semibold text-md mb-2 mt-4'>{props.title}</div>
				<div>{props.description}</div>
			</div>
		</div>
	);
}
