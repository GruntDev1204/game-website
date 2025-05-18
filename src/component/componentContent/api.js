import one from '../../assets/arrivals/1.jpg'
import two from '../../assets/arrivals/2.jpg'
import three from '../../assets/arrivals/3.jpg'
import four from '../../assets/arrivals/4.jpg'
import five from '../../assets/arrivals/5.jpg'
import six from '../../assets/arrivals/6.jpg'
import seven from '../../assets/arrivals/7.jpg'
import eight from '../../assets/arrivals/8.jpg'
import nine from '../../assets/arrivals/9.jpg'
import ten from '../../assets/arrivals/10.jpg'
import eleven from '../../assets/arrivals/11.jpg'
import twelve from '../../assets/arrivals/12.jpg'

import mc1 from '../../assets/mc/1.jpg'
import mc2 from '../../assets/mc/2.jpg'
import mc3 from '../../assets/mc/3.jpg'
import mc4 from '../../assets/mc/4.jpg'
import mc5 from '../../assets/mc/5.jpg'
import mc6 from '../../assets/mc/6.jpg'

import gaming1 from '../../assets/gaming/1.jpg'
import gaming2 from '../../assets/gaming/2.jpg'
import gaming3 from '../../assets/gaming/3.jpg'
import gaming4 from '../../assets/gaming/4.jpg'
import gaming5 from '../../assets/gaming/5.jpg'

import hotNew1 from '../../assets/hot/1.jpg'
import hotNew2 from '../../assets/hot/2.jpg'
import hotNew3 from '../../assets/hot/3.jpg'
import hotNew4 from '../../assets/hot/4.jpg'

import avatar from '../../assets/profile/avatar.jpg'
import profile1 from '../../assets/profile/1.jpg'
import profile2 from '../../assets/profile/2.jpg'
import profile3 from '../../assets/profile/3.jpg'

import { v4 as uuidv4 } from "uuid"


export const dataArrivals = [
    [
        {
            id: 1,
            image: one,
            name: 'Pool Girl',
            price: 12,
        },
        {
            id: 2,
            image: two,
            name: 'Tina',
            price: 35,
        },
        {
            id: 3,
            image: three,
            name: 'Japan',
            price: 37,
        },
        {
            id: 4,
            image: four,
            name: 'Tiếp Viên Hàng Không',
            price: 68,
        },
    ],
    [
        {
            id: 5,
            image: five,
            name: 'KDA AHRI',
            price: 94,
        },
        {
            id: 6,
            image: six,
            name: 'Gái Ngoan',
            price: 44,
        },
        {
            id: 7,
            image: seven,
            name: 'Girl công sở',
            price: 21,
        },
        {
            id: 8,
            image: eight,
            name: 'Kaisa',
            price: 156,
        },
    ],
    [
        {
            id: 9,
            image: nine,
            name: 'Catlyn',
            price: 143,
        },
        {
            id: 10,
            image: ten,
            name: 'Miss Fortune',
            price: 11,
        },
        {
            id: 11,
            image: eleven,
            name: 'Ahri tinh tú',
            price: 25,
        },
        {
            id: 12,
            image: twelve,
            name: 'Cô giáo Thảo',
            price: 36,
        },
    ],
]

export const DataMC = [
    { id: 1, img: mc1 },
    { id: 2, img: mc2 },
    { id: 3, img: mc3 },
    { id: 4, img: mc4 },
    { id: 5, img: mc5 },
    { id: 6, img: mc6 },
]

export const ExtData = [
    [{ id: 1, price: 90, img: gaming1 }],

    [{ id: 2, price: 90, img: gaming2 },
    { id: 3, price: 90, img: gaming3 },
    { id: 4, price: 90, img: gaming4 },
    { id: 5, price: 90, img: gaming5 }
    ]
]

export const hotNewData = [
    {
        id: 1,
        image: hotNew1,
        name: 'CS:GO',
        price: 12,
        sale: 22,
    },
    {
        id: 2,
        image: hotNew2,
        name: 'PUBG',
        price: 35,
        sale: 15,
    },
    {
        id: 3,
        image: hotNew3,
        name: 'Among US',
        price: 37,
        sale: 16,
    },
    {
        id: 4,
        image: hotNew4,
        name: 'Dragon Warrios',
        price: 68,
        sale: 12,
    },

]

export const PROFILE_DATA = {
    name: "Hồ Trung",
    dob: "12/04/2001",
    id: uuidv4(),
    email: "hotrung@example.com",
    avatar: avatar,
    description: "Lập trình viên front-end, yêu thích ReactJS và UI/UX. Đam mê công nghệ và sáng tạo.",
    gallery: [
        profile1,
        profile2,
        profile3,
    ],
}

export const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}