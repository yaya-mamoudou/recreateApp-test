import Image from 'next/image';

export default function HomePage() {
	return (
		<div>
			<main className='w-full h-screen flex flex-col justify-center items-center'>
				<h2 className='font-black'>Hello</h2>
				<h2 className='font-extrabold'>Hello</h2>
				<h2 className='font-bold'>Hello</h2>
				<h2 className='font-semibold'>Hello</h2>
				<h2 className='font-medium'>Hello</h2>
				<h2 className='font-normal'>Hello</h2>
				<h2 className='font-light'>Hello</h2>
				<h2 className='font-extralight'>Hello</h2>
				<h2 className='font-thin'>Hello</h2>
				<h2 className=' font-space-mono font-bold'> Space Mono 240k+</h2>
			</main>
		</div>
	);
}
