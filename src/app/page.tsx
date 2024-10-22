import BrowseCategories from '@/components/categories';
import Countdown from '@/components/countdown';
import CtaWeeklyDigest from '@/components/cta-weekly-digest';
import Discoveries from '@/components/discoveries';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import HowItWorks from '@/components/how-it-works';
import Navbar from '@/components/navbar';
import TopCreators from '@/components/top-creators';
import TrendingCollection from '@/components/trending-collection';

export default function HomePage() {
	return (
		<div>
			<header className='min-h-[50vh] mb-28'>
				<Navbar />
				<Hero />
			</header>
			<main className='space-y-28'>
				<TrendingCollection />
				<TopCreators />
				<BrowseCategories />
				<Discoveries />
				<Countdown />
				<HowItWorks />
				<CtaWeeklyDigest />
				<Footer />
			</main>
		</div>
	);
}
