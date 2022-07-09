
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import {faUser,
    faGem,
    faChartPie,
    faTableList,
    faFileLines,
    faMobileScreen,
    faPager,
    faChevronUp,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'


export const sideMenu = [

    {
        id: 1,
        icon: faUser,
        down: faChevronDown,
        up: faChevronUp,
        path: '/',
        title: 'User'
    },
    {
        id: 2,
        icon: faBloggerB,
        down: faChevronDown,
        up: faChevronUp,
        path: '/post-list',
        title: 'Blog'
    }
];

