import React from 'react';
import Button from './button';
import { Eye } from 'lucide-react';
import { discoveries } from '@/data/mock-data';
import DiscoveryCard from './cards/discovery-card';

export default function Discoveries() {
	return (
		<div className='container'>
			<div className='flex items-end justify-between'>
				<div>
					<h2 className='text-lg font-semibold'>Discover More NFTs</h2>
					<p className='text-md'>Explore New Trending NFTs</p>
				</div>

				<Button className='hidden md:flex' variant='outlined'>
					<Eye className='text-purple' size={18} /> See All
				</Button>
			</div>
			<div className='grid grid-cols-12 gap-6 mt-12'>
				{discoveries.map((item, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 lg:col-span-4'>
						<DiscoveryCard {...item} />
					</div>
				))}
			</div>

			<Button className='md:hidden w-full mt-10' variant='outlined'>
				<Eye className='text-purple' size={18} /> See All
			</Button>
		</div>
	);
}
