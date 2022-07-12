
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import {faUser,
    faChevronUp,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'


export const sideMenu = [

    {
        id: 1,
        icon: faUser,
        down: faChevronDown,
        up: faChevronUp,
        title: 'User'
    },
    {
        id: 2,
        path : '/',
        title: 'User List'
    },
    {
        id: 3,
        path : '/add-new-user',
        title: 'Add New User'
    },
    {
        id: 4,
        path : '/edit-user',
        title: 'Edit User'
    },
    {
        id: 5,
        icon: faBloggerB,
        down: faChevronDown,
        up: faChevronUp,
        title: 'Blog'
    },
    {
        id: 6,
        path : '/post-list',
        title: 'Post List'
    },
    {
        id: 7,
        path : '/add-new-post',
        title: 'Add New Post'
    },
    {
        id: 8,
        path : 'edit-post',
        title: 'Edit Post'
    }
];

