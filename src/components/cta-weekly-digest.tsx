import Image from 'next/image';
import React from 'react';
import Button from './button';
import { Mail } from 'lucide-react';

export default function CtaWeeklyDigest() {
	return (
		<div className=' container rounded-20 flex flex-col md:flex-row gap-x-16 items-center md:bg-black-secondary p-10'>
			<Image
				alt='Astronaute'
				src='/images/astronaute.png'
				width={500}
				height={500}
				className='object-cover w-full md:w-[500px]  rounded-20 rounded-b-[0] bg-black-secondary'
			/>

			<div className='mt-8'>
				<h3 className='text-lg font-semibold'>Join Our Weekly Digest</h3>
				<p>Get Exclusive Promotions & Updates Straight To Your Inbox</p>

				<div className='bg-white hidden md:flex mt-8 rounded-20 justify-between'>
					<input
						className='rounded-20 text-sm px-6 ring-0 flex-1 border-none focus:border-none outline-none appearance-none text-black'
						placeholder='Enter your email here'
					/>
					<Button size='sm'>
						<Mail size={18} /> Subscribe
					</Button>
				</div>

				<div className='md:hidden mt-8'>
					<input
						className='rounded-20 bg-white w-full text-sm h-[3rem] mb-4 px-4 ring-0 flex-1 border-none focus:border-none outline-none appearance-none text-black'
						placeholder='Enter your email here'
					/>
					<Button size='sm' className='w-full'>
						<Mail size={18} /> Subscribe
					</Button>
				</div>
			</div>
		</div>
	);
}
