export type ProductProps = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
}

const productsArray: ProductProps[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1200,
    },
    {
        title: 'iPhone 10',
        description: 'This is iPhone 10',
        type: 'phone',
        capacity: '120',
        price: 800,
    },
    {
        title: 'iPhone 12',
        description: 'This is iPhone 12',
        type: 'phone',
        capacity: '256',
        price: 1200,
    },
    {
        title: 'iPhone 13',
        description: 'This is iPhone 13',
        type: 'phone',
        capacity: '128',
        price: 800,
    },
    {
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '256',
        price: 1500,
    },
    {
        title: 'iPhone 16',
        description: 'This is iPhone 16',
        type: 'phone',
        capacity: '256',
        price: 1800,
    },
]

export default productsArray
