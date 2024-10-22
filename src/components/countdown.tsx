import Image from 'next/image';
import React from 'react';
import Button from './button';
import { Eye } from 'lucide-react';

export default function Countdown() {
	return (
		<div>
			<div
				className='min-h-[60vh] md:min-h-[70vh] w-screen bg-no-repeat bg-cover '
				style={{
					backgroundImage: 'url(/images/nft-highlight/img1-xl.png)',
					backgroundPosition: 'center',
				}}
			>
				<div className='min-h-[inherit] bg-gradient-to-b from-transparent via-transparent via-20% to-purple'>
					<div className='container flex flex-col space-y-6 justify-center md:flex-row min-h-[inherit] md:items-end pb-20'>
						<div className='space-y-4 mt-auto'>
							<div className='rounded-20 flex items-center gap-x-2 sp w-fit py-3 px-4 bg-black-secondary'>
								<Image
									width={20}
									height={20}
									src={'/images/avatars/img3.png'}
									className='object-cover'
									alt='shroomie'
								/>
								<span>Shroomie</span>
							</div>
							<h2 className='text-xl md:text-2xl font-semibold'>Magic Mashrooms</h2>
							<Button className='bg-white hidden md:flex text-black'>
								<Eye size={20} strokeWidth={1} className='text-purple' /> See NFT
							</Button>
						</div>

						<div className='bg-[rgba(59,59,59,0.5)] md:w-fit flex items-center flex-col w-full md:ml-auto backdrop-blur-lg rounded-20 p-8'>
							<span className='text-xs font-space-mono'>Auction ends in</span>

							<div className='flex items-start gap-x-3'>
								<Time value='59' label='Hours' />
								<div className='font-semibold text-lg'>:</div>
								<Time value='59' label='Minutes' />
								<div className='font-semibold text-lg'>:</div>
								<Time value='59' label='Seconds' />
							</div>
						</div>

						<Button className='bg-white w-full md:hidden text-black'>
							<Eye size={20} strokeWidth={1} className='text-purple' /> See NFT
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

type Props = {
	value: string;
	label: string;
};
const Time = (props: Props) => {
	return (
		<div className='flex flex-col items-center'>
			<div className='text-lg font-semibold'>{props.value}</div>
			<div className='font-space-mono text-xs'>{props.label}</div>
		</div>
	);
};
