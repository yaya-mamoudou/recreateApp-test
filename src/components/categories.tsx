import { categoriesCardList } from '@/data/mock-data';
import React from 'react';
import CategoryCard from './cards/category-card';

export default function BrowseCategories() {
	return (
		<div className='container'>
			<h2 className='text-lg font-semibold'>Browse Categories</h2>
			<div className='grid grid-cols-12 gap-6 mt-12'>
				{categoriesCardList.map((item, index) => (
					<div key={index} className='col-span-6 lg:col-span-3'>
						<CategoryCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
}
