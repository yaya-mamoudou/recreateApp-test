import Image from 'next/image';
import React from 'react';
import CardTitleAndCreator from '../card-title-and-creator';

export default function HeroCard() {
	return (
		<div className='rounded-20 bg-black-secondary w-full md:w-auto'>
			<div>
				<Image
					alt='Space Walking'
					src='/images/hero/img1.png'
					width={400}
					height={400}
					className='object-cover w-full md:w-[350px] xl:w-[500px]  rounded-20 rounded-b-[0] bg-black-secondary'
				/>
			</div>
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
