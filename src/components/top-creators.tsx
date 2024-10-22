'use client';
import { topCreators } from '@/data/mock-data';
import { Rocket } from 'lucide-react';
import Button from './button';
import CreatorCard from './cards/creator-card';
import { useMediaQuery } from 'react-responsive';

export default function TopCreators() {
	let data = [...topCreators];
	const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

	if (isTablet) data = data.slice(0, 6);
	if (isMobile) data = data.slice(0, 5);

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
				{data.map((item, index) => (
					<div key={index} className='col-span-12 sm:col-span-6 lg:col-span-3'>
						<CreatorCard {...item} />
					</div>
				))}
			</div>

			<Button className='md:hidden w-full mt-10' variant='outlined'>
				<Rocket className='text-purple' size={18} /> View Rankings
			</Button>
		</div>
	);
}
