import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import TopCreators from '@/components/top-creators';
import TrendingCollection from '@/components/trending-collection';

export default function HomePage() {
	return (
		<div>
			<header className='min-h-[80vh]'>
				<Navbar />
				<Hero />
			</header>
			<main className='space-y-28'>
				<TrendingCollection />
				<TopCreators />
			</main>
		</div>
	);
}
