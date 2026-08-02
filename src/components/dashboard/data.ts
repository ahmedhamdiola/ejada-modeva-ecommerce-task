export const PRODUCTS = [
    {
        id: 1,
        image: "https://placehold.co/80x80",
        name: "Oversized Hoodie",
        category: "Men",
        price: 120,
        stock: 15,
    },
    {
        id: 2,
        image: "https://placehold.co/80x80",
        name: "Classic Jeans",
        category: "Men",
        price: 90,
        stock: 21,
    },
    {
        id: 3,
        image: "https://placehold.co/80x80",
        name: "White Sneakers",
        category: "Shoes",
        price: 150,
        stock: 7,
    },
];
export interface ProductInterface {
    id: number;
    image: string;
    name: string;
    category: string;
    price: number;
    stock: number;
}