import Image from 'next/image';
import React from 'react';

type Props = {
	alt: string;
	src: string;
	creatorName: string;
	creatorAmount: string;
	rank: string;
};
export default function CreatorCard(props: Props) {
	return (
		<div className='rounded-20 p-4 flex gap-4 lg:flex-col flex-row items-center relative bg-black-secondary lg:aspect-square'>
			<Image
				width={100}
				height={100}
				className='bg-white size-[50px] ml-2 lg:size-[100px] rounded-full object-cover'
				src={props.src}
				alt={props.alt}
			/>

			<div className='rounded-full bg-black absolute  top-3 lg:top-4 flex items-center justify-center left-[calc(14.5px+)] lg:left-4 size-[25px] text-gray-caption'>
				{props.rank}
			</div>

			<div className='lg:text-center'>
				<div className='font-semibold text-md'>{props.creatorName}</div>
				<div>
					<span className='text-gray-caption'>Total Sales:</span>{' '}
					<span className='font-space-mono'>{props.creatorAmount}</span>
				</div>
			</div>
		</div>
	);
}
