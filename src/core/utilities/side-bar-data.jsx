
import {
    faHomeUser,
    faEnvelope,
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
        icon: faHomeUser,
        down: faChevronDown,
        up: faChevronUp,
        path: '/',
        title: 'Economy'
    },
    {
        id: 2,
        icon: faEnvelope,
        down: faChevronDown,
        up: faChevronUp,
        path: '/mailbox',
        title: 'Mailbox'
    },
    {
        id: 3,
        icon: faGem,
        down: faChevronDown,
        up: faChevronUp,
        path: '/interface',
        title: 'Interface'
    },
    {
        id: 4,
        icon: faChartPie,
        down: faChevronDown,
        up: faChevronUp,
        path: '/charts',
        title: 'Charts'
    },
    {
        id: 5,
        icon: faTableList,
        down: faChevronDown,
        up: faChevronUp,
        path: '/data_tables',
        title: 'Data Tables'
    },
    {
        id: 6,
        icon: faFileLines,
        down: faChevronDown,
        up: faChevronUp,
        path: '/form_elements',
        title: 'Form Elements'
    },
    {
        id: 7,
        icon: faMobileScreen,
        down: faChevronDown,
        up: faChevronUp,
        path: '/app_views',
        title: 'App Views'
    },
    {
        id: 8,
        icon: faPager,
        down: faChevronDown,
        up: faChevronUp,
        path: '/pages',
        title: 'Pages'
    },
];

