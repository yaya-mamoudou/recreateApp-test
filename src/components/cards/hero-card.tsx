import Image from 'next/image';
import React from 'react';
import CardTitleAndCreator from '../card-title-and-creator';

export default function HeroCard() {
	return (
		<div className='rounded-20 bg-black-secondary'>
			<Image
				alt='Space Walking'
				src='/images/hero/img1.png'
				width={300}
				height={300}
				className='object-cover size-[300px] rounded-20 rounded-b-[0] bg-black-secondary'
			/>
			<div className='p-6'>
				<CardTitleAndCreator
					name='AnimaKid'
					title='Space Walking'
					avatar='/images/avatars/img1.png'
				/>
			</div>
		</div>
	);
}
