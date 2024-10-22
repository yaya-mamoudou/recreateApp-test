import Image from 'next/image';
import React from 'react';

type Props = {
	name: string;
	avatar: string;
	title: string;
};
export default function CardTitleAndCreator(props: Props) {
	return (
		<div>
			<div className='font-semibold text-md'>{props.title}</div>
			<div className='flex gap-x-2 mt-2 items-center'>
				<Image
					loading='lazy'
					alt={props.title}
					src={props.avatar}
					width={20}
					height={20}
					className='object-cover rounded-full aspect-square  bg-black-secondary'
				/>
				<span>{props.name}</span>
			</div>
		</div>
	);
}
