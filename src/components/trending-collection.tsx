import { collections } from '@/data/mock-data';
import React from 'react';
import CollectionCard from './cards/collection-card';

export default function TrendingCollection() {
	return (
		<div className='container'>
			<h2 className='text-lg font-semibold'>Trending Collection</h2>
			<p className='text-md'>Checkout our weekly updated trending collection.</p>
			<div className='grid grid-cols-12 gap-6 mt-12'>
				{collections.map((item, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 lg:col-span-4'>
						<CollectionCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
}
