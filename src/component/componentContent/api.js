export const dataArrivals = [
    [
        {
            id: 1,
            image: 'https://i.pinimg.com/736x/16/1b/cc/161bcc1285bfa500731f9e1897a16411.jpg',
            name: 'Pool Girl',
            price: 12,
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/564x/74/91/f9/7491f9e2700e0815d4d2cf20dd68088b.jpg',
            name: 'Tina',
            price: 35,
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg',
            name: 'Japan',
            price: 37,
        },
        {
            id: 4,
            image: 'https://i.pinimg.com/564x/dd/2a/a6/dd2aa622fa55d69714b40f76b7e67e9c.jpg',
            name: 'Tiếp Viên Hàng Không',
            price: 68,
        },
    ],
    [
        {
            id: 5,
            image: 'https://i.pinimg.com/564x/30/68/85/306885e3a06a4376558615b4c5ba9317.jpg',
            name: 'KDA AHRI',
            price: 94,
        },
        {
            id: 6,
            image: 'https://i.pinimg.com/736x/f4/07/f4/f407f489816421b0fd67e3f4e2e66e3d.jpg',
            name: 'Gái Ngoan',
            price: 44,
        },
        {
            id: 7,
            image: 'https://i.pinimg.com/564x/c0/c3/da/c0c3dab104b471bfe6101cb85dc7b99d.jpg',
            name: 'Girl công sở',
            price:21,
        },
        {
            id: 8,
            image: 'https://i.pinimg.com/564x/0a/c7/64/0ac764addc95a462e179e8315044e0db.jpg',
            name: 'Kaisa',
            price:156,
        },
    ],
    [
        {
            id: 9,
            image: 'https://i.pinimg.com/564x/3f/69/e3/3f69e340cdaefb68b3e442e5a0c2fc13.jpg',
            name: 'Catlyn',
            price: 143,
        },
        {
            id: 10,
            image: 'https://i.pinimg.com/736x/ff/20/65/ff2065f75dcd166e0f3dfac6cacd0b27.jpg',
            name: 'Miss Fortune',
            price: 11,
        },
        {
            id: 11,
            image: 'https://i.pinimg.com/736x/fd/c2/09/fdc209c99840118e478cccd22d5db78a.jpg',
            name: 'Ahri tinh tú',
            price: 25,
        },
        {
            id: 12,
            image: 'https://i.pinimg.com/564x/13/33/3a/13333ad61e3bdf04d1f97af55cb0e172.jpg',
            name: 'Cô giáo Thảo',
            price: 36,
        },
    ],
];

export const DataMC = [
    { id: 1, img: 'https://i.pinimg.com/564x/e9/67/9e/e9679ed4d30bebc6d48a412cf91c4a3d.jpg' },
    { id: 2, img: 'https://i.pinimg.com/564x/a3/7b/c2/a37bc2ba25982b82bce5f5b2ecb74feb.jpg' },
    { id: 3, img: 'https://i.pinimg.com/736x/04/7f/ab/047fab7a54aa6698f420fbbfb1884c9f.jpg' },
    { id: 4, img: 'https://i.pinimg.com/564x/7f/c5/78/7fc578e93c50e6573afa162299c9fef5.jpg' },
    { id: 5, img: 'https://i.pinimg.com/564x/78/83/dd/7883ddcb3e24f78fcd3c08cfcb575209.jpg' },
    { id: 6, img: 'https://i.pinimg.com/736x/80/8b/73/808b736a16b540b27adfca2ab83e94aa.jpg' },

]


export const ExtData = [
    [{id : 1 , price : 90 , img : 'https://i.pinimg.com/564x/7c/13/76/7c1376abff084025a582cf853c44621a.jpg' }] , 
    [{id :  2 , price : 90 , img : 'https://i.pinimg.com/564x/62/7d/54/627d546f63c79ca242235453bb802b64.jpg'} , 
    {id : 3 , price : 90 , img : 'https://i.pinimg.com/564x/89/fb/cf/89fbcfecf9e86dec7dc6b543cc4cd53c.jpg' } , 
    {id : 4 , price : 90 , img: 'https://i.pinimg.com/564x/f4/f3/42/f4f342a04016669c26213523b0e991f1.jpg'},
    {id : 5 , price : 90 , img: 'https://i.pinimg.com/736x/3d/f9/20/3df92086d58c3b3e1b31a7b5d18d8264.jpg'}

    ]

]

export const hotNewData = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/16/1b/cc/161bcc1285bfa500731f9e1897a16411.jpg',
        name: 'Pool Girl',
        price: 12,
        sale: 22,

    },
    {
        id: 2,
        image: 'https://i.pinimg.com/564x/74/91/f9/7491f9e2700e0815d4d2cf20dd68088b.jpg',
        name: 'Tina',
        price: 35,
        sale: 15,
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/564x/1e/45/98/1e4598791288f02a83f80d64c10415e2.jpg',
        name: 'Japan',
        price: 37,
        sale: 16,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/564x/dd/2a/a6/dd2aa622fa55d69714b40f76b7e67e9c.jpg',
        name: 'Tiếp Viên Hàng Không',
        price: 68,
        sale: 12,
    },
  
]

export const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};