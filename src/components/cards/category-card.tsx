import type { CategoryCardProp } from '@/types';
import Image from 'next/image';
import React from 'react';

export default function CategoryCard(props: CategoryCardProp) {
	return (
		<div className='rounded-20 bg-black-secondary'>
			<div className='relative'>
				<Image
					alt={props.name}
					src={props.img}
					width={300}
					height={300}
					loading='lazy'
					className='object-cover rounded-20 rounded-b-[0] bg-black-secondary'
				/>
				<div className='absolute top-0 flex items-center justify-center rounded-t-20 backdrop-blur-md bg-white/5 b size-full'>
					<Image
						loading='lazy'
						alt={props.name}
						src={props.icon}
						width={100}
						height={100}
						className='object-contain'
					/>
				</div>
			</div>
			<div className='p-6 font-semibold text-md'>{props.name}</div>
		</div>
	);
}
