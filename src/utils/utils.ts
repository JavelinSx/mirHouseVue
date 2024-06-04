import { 
 imagesR1Cir17,
 imagesR1Gag7,
 imagesR1Len65,
 imagesR1Lom4,
 imagesR1Ovch19,
 imagesR1Sov4,
 imagesR2Cir19,
 imagesR2Lom13,
 imagesR2Ovch19,
 imagesR2Schol4,
 imageRom1,
 imageRom2,
 imageRom3,
 imageTwoRoom1,
 imageTwoRoom2
 } from "./imagesArray";

import magnit from '../img/magnit-icon.png'
import patyorka from '../img/five-icon.png'

export interface CardReview{
    avatar: string;
    name: string;
    age: string;
    textReview: string;
}

export const cardsRewievs: CardReview[] = [
    {
        avatar: '',
        name:'Николай Алексеевич',
        age: '37',
        textReview: 'Снимал кваритру на Ленина, отличный сервис, чисто и уютно, арендодатель всегда на связи. Однозначно рекомендую',
    },
    {
        avatar: '',
        name:'Александр Андреевич',
        age: '42',
        textReview: 'Сотрудничаю с данным агенством уже не первый раз, всегда подстраиваются под клиента, был в разных вариантах квартир - качество на высоте',
    },
    {
        avatar: '',
        name:'Владимир Николаевич',
        age: '40',
        textReview: 'Был в командировке, по рекомендации друга обратился в Городок, был приятно удивлён сервисом и обратной связью',
    },
    {
        avatar: '',
        name:'Валерия',
        age: '34',
        textReview: 'Встретили с вокзала, оформили документы и заселили, просто волшебно!',
    }
]

export interface Option {
    balcony: boolean;
    scale: string;
    floor: string;
    floorMax: string;
}

export interface Card {
    address: string;
    description: string;
    fullDescription: string;
    room:number;
    images: string[];
    nearby?: string[];
    options: Option[];
    mapLink: string;
    mapRoute: string;
}

export const cards: Card[] = [
    {
        address: 'г. Мирный, ул. Ломоносова, д.6',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imageTwoRoom2,
        room: 2,
        nearby: [],
        options: [
            {
                balcony: false,
                scale: '42',
                floor: '3',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A3d783c2e713c4c3a39d0e40a7488c56866dd97a138289ac599eb65082ed0b053&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDu~JO3S'
    },
    {
        address: 'г. Мирный, ул. Советская, д.8',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. В шаговой доступности магазин "Магнит". Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imageTwoRoom1,
        room: 2,
        nearby: [magnit],
        options: [
            {
                balcony: true,
                scale: '48',
                floor: '3',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Adb327d3332035ebaf927cd94589b1b52756639315727d6476e97b731d1807c90&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDu~BQpn'
    },
    {
        address: 'г. Мирный, ул. Ломоносова, д.22',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. В шаговой доступности магазин "Магнит". Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imageRom3,
        room: 1,
        nearby: [magnit],
        options: [
            {
                balcony: true,
                scale: '28',
                floor: '3',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aedc190666d747ba9ccdfbb3793b0cd65c38a5164411f9eeb29bd4b10bd7d96f6&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDu~y2Kk'
    },
    {
        address: 'г. Мирный, ул. Ломоносова, д.20',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. В шаговой доступности магазин "Магнит". Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imageRom2,
        room: 1,
        nearby: [magnit],
        options: [
            {
                balcony: true,
                scale: '28',
                floor: '4',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A9192aa13db713e5076bdbb1b7498001c9e2078576d6735210f3a7e52779685da&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDu~yN4f'
    },
    {
        address: 'г. Мирный, ул. Ленина, д.30',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. В шаговой доступности магазин "Пятерочка". Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imageRom1,
        room: 1,
        nearby: [patyorka],
        options: [
            {
                balcony: true,
                scale: '31',
                floor: '2',
                floorMax: '4',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Abfa98609c272b5513a1e85b8488abe7e00b81df25da1fd8c76a8473f7586fe70&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDu2YK4a'
    },
    {
        address: 'г. Мирный, ул. Овчинникова, д.19',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. В шаговой доступности магазины "Магнит" и "Пятерочка". Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imagesR1Ovch19,
        room: 1,
        nearby: [magnit, patyorka],
        options: [
            {
                balcony: false,
                scale: '31',
                floor: '4',
                floorMax: '4',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A131fabf7d66f3e14efdcfbf04e06da2a04fd7ad4759e729ef4c82f485b0b8f0c&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInBNU'
    },
    {
        address: 'г. Мирный, ул. Гагарина, д.7',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Удобное расположение квартиры в центральной части города. В шаговой доступности магазины "Магнит" и "Пятерочка". Квартира со всем необходимым для комфортного проживания: мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании. ',
        images: imagesR1Gag7,
        room: 1,
        nearby: [
            magnit,
            patyorka
        ],
        options: [
            {
                balcony: true,
                scale: '31',
                floor: '2',
                floorMax: '4',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Af76e220b6a92b82f91b0c7ba03535530b1b12132948e882b412c6f062dd9a84f&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInJM0'
    },
    {
        address: 'г. Мирный, ул. Ломоносова, д.4',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Мебель, бытовая техника, цифровое телевидение, интернет Wi-Fi, посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании.',
        images: imagesR1Lom4,
        room: 1,
        nearby: [],
        options: [
            {
                balcony: true,
                scale: '28',
                floor: '2',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ad152a4000917bdd125f00572cc04160efeadb5c5011f619fc5a037ebe6b67a8b&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInJ~h'
    },
    {
        address: 'г. Мирный, ул. Ленина, д.65',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании.',
        images: imagesR1Len65,
        room: 1,
        nearby: [],
        options: [
            {
                balcony: true,
                scale: '28',
                floor: '2',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A72b2c669c8e516bd461606c51dd1c3eb0492d506ee6385542c59071731cea7b1&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInRmh'
    },
    {
        address: 'г. Мирный, ул. Циргвава, д.17',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании.',
        images: imagesR1Cir17,
        room: 1,
        nearby: [magnit],
        options: [
            {
                balcony: false,
                scale: '31',
                floor: '1',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Acf540f1914c2b7d40f84598eeab4b32eeb38cc0e0ac3b0d40a77a101ac193198&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInR9V'
    },
    {
        address: 'г. Мирный, ул. Советская, д.4',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Мебель, ортопедический матрас, бытовая техника, цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности. Свежий ремонт. Предоставляем документы о проживании.',
        images: imagesR1Sov4,
        room: 1,
        nearby: [magnit],
        options: [
            {
                balcony: false,
                scale: '30.4',
                floor: '1',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A1bc650ae735a02b640a68027c66cde5d9324977e11d6385636733e85cf91b749&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInV~Q'
    },
    {
        address: 'г. Мирный, ул. Циргвава, д.19',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Уютная стильная квартира укомплектована всем для комфортного проживания. Вся необходимая мебель, бытовая техника. Цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности, ортопедический матрас.  Предоставляем документы о проживании.',
        images: imagesR2Cir19,
        room: 2,
        nearby: [magnit],
        options: [
            {
                balcony: true,
                scale: '56',
                floor: '1',
                floorMax: '5',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A9c18f19f4012f16130bf8411f362f706bd6b1698161e8481dc66e1e9b9e1ecf9&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInZkD'
    },
    {
        address: 'г. Мирный, Школьный пер., д.4',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Комфортабельная "двушка" укомплектована всем для проживания. Вся необходимая мебель, бытовая техника. Цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности, ортопедический матрас.  Предоставляем документы о проживании.',
        images: imagesR2Schol4,
        room: 2,
        nearby: [],
        options: [
            {
                balcony: true,
                scale: '43',
                floor: '3',
                floorMax: '4',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aaa0d8068498a2632037f5876abb1834b7b20cd51b7c918d7034ca97712ce094d&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInC4e'
    },
    {
        address: 'г. Мирный, ул. Ломоносова, д.13',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Комфортабельная "двушка" укомплектована всем для проживания. Вся необходимая мебель, бытовая техника. Цифровое телевидение, интернет Wi-Fi,  посуда, постельные принадлежности, ортопедический матрас.  Предоставляем документы о проживании.',
        images: imagesR2Lom13,
        room: 2,
        nearby: [magnit],
        options: [
            {
                balcony: true,
                scale: '43',
                floor: '3',
                floorMax: '4',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A1989149fb291744724ed5e0a6716774e3c81a21f28c91f689cdf69ffd3fa434c&amp;source=constructor',
        mapRoute: 'https://yandex.ru/maps/-/CDuInOms'
    },
    {
        address: 'г. Мирный, ул. Овчинникова, д.19',
        description: 'Квартира в центре города со всем необходимым для комфортного проживания',
        fullDescription: 'Квартира в центре города. Укомплектована всей необходимой мебелью, ортопедическим матрасом, бытовой техникой, цифровым телевидением, интернетом Wi-Fi, посудой и постельными принадлежностями.  Предоставляем документы о проживании.',
        images: imagesR2Ovch19,
        room: 2,
        nearby: [patyorka, magnit],
        options: [
            {
                balcony: true,
                scale: '43',
                floor: '3',
                floorMax: '4',
            },
        ],
        mapLink: 'https://yandex.ru/map-widget/v1/?um=constructor%3A06bfe8137d8de442930afc3bbde7578e00b2d046330f9b29f03f3f04bfe6bb6a&amp;source=constructor',
        mapRoute:'https://yandex.ru/maps/-/CDuInSIu'
    },
]
