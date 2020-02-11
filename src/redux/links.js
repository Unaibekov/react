import outdoorAdv from '../assets/images/01.jpg';
import entranceGroup from '../assets/images/02.jpg';
import largePrinting from '../assets/images/03.jpg';
import souvenir from '../assets/images/04.jpg';

export default () => {
    return [{
            id: 1,
            title: 'Наружная реклама',
            path: 'htmlless',
            image: outdoorAdv
        },
        {
            id: 2,
            title: 'Входные группы',
            path: 'cssless',
            image: entranceGroup
        },
        {
            id: 3,
            title: 'Широкоформатная печать',
            path: 'javaless',
            image: largePrinting
        },
        {
            id: 4,
            title: 'Сувенирная продукция',
            path: 'reactless',
            image: souvenir
        }
    ]
}