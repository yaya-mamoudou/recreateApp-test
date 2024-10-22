import BrowseCategories from '@/components/categories';
import CtaWeeklyDigest from '@/components/cta-weekly-digest';
import Discoveries from '@/components/discoveries';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
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
				<BrowseCategories />
				<Discoveries />
				<HowItWorks />
				<CtaWeeklyDigest />
			</main>
		</div>
	);
}
