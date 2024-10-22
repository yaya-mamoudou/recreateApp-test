'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { AlignLeft, User2, X } from 'lucide-react';
import Button from './button';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className='container p-4 max-w-[1400px] flex items-center justify-between'>
			<Logo />

			<AlignLeft size={25} className='xl:hidden cursor-pointer' onClick={toggleMenu} />

			<div
				className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center pt-20 text-center space-y-8 transition-transform duration-300 ease-in-out xl:hidden ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<X
					size={30}
					className='absolute top-4 right-4 text-white cursor-pointer'
					onClick={closeMenu}
				/>

				<ul className='text-white text-md font-semibold'>
					<li className='mb-4' onClick={closeMenu}>
						<Link href='#'>Marketplace</Link>
					</li>
					<li className='mb-4' onClick={closeMenu}>
						<Link href='#'>Rankings</Link>
					</li>
					<li className='mb-4' onClick={closeMenu}>
						<Link href='#'>Connect a wallet</Link>
					</li>
					<li onClick={closeMenu}>
						<Button size='sm' className='text-sm'>
							<User2 size={20} /> Sign Up
						</Button>
					</li>
				</ul>
			</div>

			{/* Desktop Menu */}
			<ul className='xl:flex hidden items-center text-md font-semibold gap-x-10'>
				<li>
					<Link href='#'>Marketplace</Link>
				</li>
				<li>
					<Link href='#'>Rankings</Link>
				</li>
				<li>
					<Link href='#'>Connect a wallet</Link>
				</li>
				<li>
					<Button>
						<User2 /> Sign Up
					</Button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
