import { cn } from '@/utils';
import React from 'react';

type Props = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant?: 'flat' | 'outlined';
	size?: 'sm' | 'md';
};

export default function Button(props: Props) {
	let { className, variant, size, ...rest } = props;
	let extraClasses = '';

	if (variant === 'outlined') extraClasses = 'border-2 bg-transparent border-purple';
	if (size === 'sm') extraClasses = extraClasses.concat(' h-[3rem]');

	console.log(extraClasses, '====');

	return (
		<button
			className={cn(
				'bg-purple h-[3.75rem] flex items-center justify-center gap-3 hover:opacity-80 font-semibold rounded-20 px-12',
				extraClasses,
				className
			)}
			{...rest}
		></button>
	);
}
