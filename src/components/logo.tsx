import React from 'react';
import Image from 'next/image';

export default function Logo() {
	return <Image src='/svg/logo.svg' alt='logo' width={250} height={80} />;
}
