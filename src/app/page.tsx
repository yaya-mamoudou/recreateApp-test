import Button from '@/components/button';
import CategoryCard from '@/components/cards/category-card';
import CollectionCard from '@/components/cards/collection-card';
import CreatorCard from '@/components/cards/creator-card';
import DiscoveryCard from '@/components/cards/discovery-card';
import HowItWorksCard from '@/components/cards/how-it-works-card';
import { categoriesCardList, collections, discoveries, howItWorksList } from '@/data/mock-data';
import { Rocket } from 'lucide-react';

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
				<Button>
					<Rocket size={20} className='' /> View Rankings
				</Button>

				<CreatorCard
					alt='Yaya mamoudou'
					src='/images/avatars/img1.png'
					rank='1'
					creatorName='Mamoudou'
					creatorAmount='34.53 ETH'
				/>

				<CollectionCard {...collections[0]} />

				<DiscoveryCard {...discoveries[0]} />

				<HowItWorksCard {...howItWorksList[0]} />

				<CategoryCard {...categoriesCardList[0]} />
			</main>
		</div>
	);
}
