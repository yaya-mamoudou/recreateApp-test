export type Creator = { name: string; avatar: string };

export type Collection = {
    images: [string, string, string];
    additional: string;
    title: string;
    creator: Creator
};

type DiscoveryProps = {
    price: string;
    highestBid: string;
    img: string;
    title: string;
    creator: Creator
}