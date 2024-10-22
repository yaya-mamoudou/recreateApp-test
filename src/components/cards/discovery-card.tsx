import type { DiscoveryProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import CreatorCard from './creator-card';
import CardTitleAndCreator from '../card-title-and-creator';

export default function DiscoveryCard(props: DiscoveryProps) {
	return (
		<div className='rounded-20 bg-black-secondary w-full'>
			<Image
				alt={props.title}
				src={props.img}
				width={300}
				height={300}
				loading='lazy'
				className='object-cover w-full rounded-20 rounded-b-[0] bg-black-secondary'
			/>
			<div className='p-6 '>
				<CardTitleAndCreator
					title={props.title}
					name={props.creator?.name}
					avatar={props.creator?.avatar}
				/>
				<div className='flex justify-between items-center mt-6'>
					<LabelValue label='Price' value={props.price} />
					<LabelValue label='Highest Bid' value={props.highestBid} />
				</div>
			</div>
		</div>
	);
}

type Props = {
	label: string;
	value: string;
};
const LabelValue = (props: Props) => {
	return (
		<div className='font-space-mono'>
			<span className='text-gray-caption text-xs'>{props.label}</span>
			<div>{props.value}</div>
		</div>
	);
};
