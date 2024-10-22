import Image from 'next/image';
import React from 'react';
import CardTitleAndCreator from '../card-title-and-creator';
import type { Collection } from '@/types';

export default function CollectionCard(props: Collection) {
	return (
		<div className='space-y-3'>
			<Image
				alt={props.title}
				src={props.images?.[0]}
				width={300}
				height={300}
				loading='lazy'
				className='object-cover w-full rounded-20 bg-black-secondary'
			/>
			<div className='flex *:flex-1 gap-x-3 mb-2'>
				<Image
					loading='lazy'
					alt={props.title}
					src={props.images?.[1]}
					width={100}
					height={100}
					className='object-cover rounded-20 aspect-square  bg-black-secondary'
				/>
				<Image
					loading='lazy'
					alt={props.title}
					src={props.images?.[2]}
					width={100}
					height={100}
					className='object-cover flex-1 rounded-20 aspect-square  bg-black-secondary'
				/>
				<div className='object-cover justify-center items-center flex font-semibold text-md flex-1 rounded-20 aspect-square font-space-mono text-white bg-purple'>
					{props.additional}
				</div>
			</div>

			<CardTitleAndCreator
				title={props.title}
				avatar={props.creator?.avatar}
				name={props.creator?.name}
			/>
		</div>
	);
}
