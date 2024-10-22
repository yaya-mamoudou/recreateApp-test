import { collections, topCreators } from '@/data/mock-data';
import React from 'react';
import CollectionCard from './cards/collection-card';
import CreatorCard from './cards/creator-card';
import Button from './button';
import { Rocket } from 'lucide-react';

export default function TopCreators() {
	return (
		<div className='container'>
			<div className='flex items-end justify-between'>
				<div>
					<h2 className='text-lg font-semibold'>Top Creators</h2>
					<p className='text-md'>Checkout Top Rated Creators on the NFT Marketplace</p>
				</div>

				<Button className='hidden md:flex' variant='outlined'>
					<Rocket className='text-purple' size={18} /> View Rankings
				</Button>
			</div>
			<div className='grid grid-cols-12 gap-6 mt-12'>
				{topCreators.map((item, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 lg:col-span-3'>
						<CreatorCard {...item} />
					</div>
				))}
			</div>

			<Button className='md:hidden' variant='outlined'>
				<Rocket className='text-purple' size={18} /> View Rankings
			</Button>
		</div>
	);
}
