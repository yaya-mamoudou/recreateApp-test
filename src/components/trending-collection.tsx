'use client';
import { collections } from '@/data/mock-data';
import React from 'react';
import CollectionCard from './cards/collection-card';
import { useMediaQuery } from 'react-responsive';

export default function TrendingCollection() {
	let data = [...collections];
	const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

	if (isTablet) data = data.slice(0, 2);
	if (isMobile) data = data.slice(0, 1);

	return (
		<div className='container'>
			<h2 className='text-lg font-semibold'>Trending Collection</h2>
			<p className='text-md'>Checkout our weekly updated trending collection.</p>
			<div className='grid grid-cols-12 gap-6 mt-12'>
				{data.map((item, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 lg:col-span-4'>
						<CollectionCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
}
