import React from 'react';
import Logo from './logo';
import Button from './button';
import { AlignLeft, User2 } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<header>
			<nav className='container p-4 flex items-center justify-between'>
				<Logo />

				<AlignLeft size={25} className='xl:hidden' />
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
		</header>
	);
}
