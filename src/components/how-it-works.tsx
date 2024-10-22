import { howItWorksList } from '@/data/mock-data';
import React from 'react';
import HowItWorksCard from './cards/how-it-works-card';

export default function HowItWorks() {
	return (
		<div className='container'>
			<div className='flex items-end justify-between'>
				<div>
					<h2 className='text-lg font-semibold'>How It Works</h2>
					<p className='text-md'>Find Out how to get the started</p>
				</div>
			</div>
			<div className='grid grid-cols-12 gap-6 mt-12'>
				{howItWorksList.map((item, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 md:col-span-4'>
						<HowItWorksCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
}
