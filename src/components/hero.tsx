import React from 'react';
import HeroCard from './cards/hero-card';
import Button from './button';
import { Rocket } from 'lucide-react';

export default function Hero() {
	return (
		<div className='container mt-10 md:mt-20'>
			<div className='flex flex-col gap-10 md:flex-row md:items-center'>
				<div className='w-full lg:w-4/5'>
					<h1 className='text-lg md:text-2xl mb-6 font-semibold'>
						Discover digital art & Collect NFTs
					</h1>
					<p className='text-sm md:text-md'>
						NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more
						than 20k NFT artists.
					</p>
					<div className='hidden md:block'>
						<ButtonAndStats></ButtonAndStats>
					</div>
				</div>
				<div className='w-full'>
					<div className='w-full flex lg:justify-end'>
						<HeroCard />
					</div>
				</div>

				<div className='md:hidden'>
					<ButtonAndStats></ButtonAndStats>
				</div>
			</div>
		</div>
	);
}

type Props = {
	label: string;
	value: string;
};
const Stat = (props: Props) => {
	return (
		<div>
			<div className='font-semibold font-space-mono text-md'>{props.value}</div>
			<div>{props.label}</div>
		</div>
	);
};

const ButtonAndStats = () => {
	return (
		<div className='flex flex-col items-center md:items-start'>
			<Button className='mt-6 w-full '>
				<Rocket size={20} /> Get Started
			</Button>

			<div className='flex gap-x-8 md:gap-x-20 mt-6'>
				<Stat label='Total Sale' value='240k+' />
				<Stat label='Auctions' value='100k+' />
				<Stat label='Artists' value='240k+' />
			</div>
		</div>
	);
};
