import type { CategoryCardProp, Collection, CreatorCard, DiscoveryProps, HowItWorkCard } from "@/types";

export const collections: Collection[] = [
    {
        images: ['/images/trending-collections/img2.png', '/images/trending-collections/img3.png', '/images/trending-collections/img4.png'],
        title: 'DSGN Animals',
        creator: { name: 'MrFox', avatar: '/images/avatars/img2.png' },
        additional: '1025+'
    },
    {
        images: ['/images/trending-collections/img5.png', '/images/trending-collections/img6.png', '/images/trending-collections/img7.png'],
        title: 'Magic Mushrooms',
        creator: { name: 'Shroomie', avatar: '/images/avatars/img3.png' },
        additional: '1025+'
    },
    {
        images: ['/images/trending-collections/img8.png', '/images/trending-collections/img9.png', '/images/trending-collections/img10.png'],
        title: 'Disco Machines',
        creator: { name: 'BeKind2Robots', avatar: '/images/avatars/img4.png' },
        additional: '1025+'
    }
]

export const discoveries: DiscoveryProps[] = [
    {
        title: 'Distant Galaxy',
        creator: { name: 'MoonDancer', avatar: '/images/avatars/img14.png' },
        price: '1.63 ETH',
        highestBid: '0.33 wETH',
        img: '/images/nft-discovery/img1.png'
    },
    {
        title: 'Life On Edena',
        creator: { name: 'NebulaKid', avatar: '/images/avatars/img15.png' },
        price: '1.63 ETH',
        highestBid: '0.33 wETH',
        img: '/images/nft-discovery/img1.png'
    },
    {
        title: 'AstroFiction',
        creator: { name: 'Spaceone', avatar: '/images/avatars/img12.png' },
        price: '1.63 ETH',
        highestBid: '0.33 wETH',
        img: '/images/nft-discovery/img1.png'
    }
]

export const howItWorksList: HowItWorkCard[] = [
    {
        img: '/images/how-it-works/img1.svg',
        title: 'Setup Your Wallet',
        description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
    },
    {
        img: '/images/how-it-works/img2.svg',
        title: 'Create Collection',
        description: 'Upload your work and setup your collection. Add a description, social links and floor price.'
    },
    {
        img: '/images/how-it-works/img3.svg',
        title: 'Start Earning',
        description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
    }
]

export const categoriesCardList: CategoryCardProp[] = [
    { img: '/images/categories/img1.png', name: 'Art', icon: '/svg/PaintBrush.svg' },
    { img: '/images/categories/img2.png', name: 'Collectibles', icon: '/svg/Swatches.svg' },
    { img: '/images/categories/img3.png', name: 'Music', icon: '/svg/MusicNotes.svg' },
    { img: '/images/categories/img4.png', name: 'Photography', icon: '/svg/Camera.svg' },
    { img: '/images/categories/img5.png', name: 'Video', icon: '/svg/VideoCamera.svg' },
    { img: '/images/categories/img6.png', name: 'Utility', icon: '/svg/MagicWand.svg' },
    { img: '/images/categories/img7.png', name: 'Sport', icon: '/svg/Backetball.svg' },
    { img: '/images/categories/img8.png', name: 'Virtual Worlds', icon: '/svg/Planet.svg' }
]

export const topCreators: CreatorCard[] = [
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img1.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img2.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img3.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img4.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img5.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img6.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img7.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img8.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img9.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img10.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img11.png', rank: '1' },
    { creatorName: 'Keepitreal', creatorAmount: '34.53 ETH', img: '/images/avatars/img12.png', rank: '1' },
]