import type { Collection, DiscoveryProps } from "@/types";

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