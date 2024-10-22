import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { Instagram, Mail, Twitter, Youtube } from 'lucide-react';
import Button from './button';
import DiscordIcon from './discord-icon';

export default function Footer() {
	return (
		<div className=' bg-black-secondary py-10'>
			<div className='container'>
				<div className='grid grid-cols-12 gap-y-8'>
					<div className='col-span-12 lg:col-span-4'>
						<div className='mb-6'>
							<Logo />
						</div>

						<div className='text-gray-400 space-y-4'>
							<div className=''>NFT marketplace UI created with Anima for Figma.</div>
							<div>
								<Link href='#'>Join our community</Link>
							</div>
							<div className='flex *:text-gray-caption gap-x-2'>
								<DiscordIcon className='size-[25px]' />
								<Youtube size={25} />
								<Twitter size={25} />
								<Instagram size={25} />
							</div>
						</div>
					</div>
					<div className='col-span-12 lg:col-span-3'>
						<div className='mb-6 text-md font-semibold'>Explore</div>

						<div className='text-gray-400 space-y-4'>
							<div>
								<Link href='#'>Marketplace</Link>
							</div>
							<div>
								<Link href='#'>Rankings</Link>
							</div>
							<div>
								<Link href='#'>Connect to wallet</Link>
							</div>
						</div>
					</div>
					<div className='col-span-12 lg:col-span-4'>
						<div className='mb-6 text-md font-semibold'>Join our weekly digest</div>

						<div className='text-gray-400 space-y-4'>
							<div>Get exclusive promotions & updates straight to your inbox.</div>
							<div className='bg-white flex mt-8 rounded-20 justify-between'>
								<input
									className='rounded-20 w-auto text-sm px-6 ring-0 flex-1 border-none focus:border-none outline-none appearance-none text-black'
									placeholder='Enter your email here'
								/>
								<Button className='px-2 md:px-10' size='sm'>
									<Mail className='hidden md:block' size={18} /> Subscribe
								</Button>
							</div>
						</div>
					</div>
				</div>
				<hr className='border-t-1 border-gray-caption my-6' />
				<span className='text-gray-400'>Ⓒ NFT Market. Use this template freely.</span>
			</div>
		</div>
	);
}
