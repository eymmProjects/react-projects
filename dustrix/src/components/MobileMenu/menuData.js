import React from 'react';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Home One',
                path: '/',
            },
            {
                title: 'Home Two',
                path: '/home-2',
            },

            {
                title: 'Home Three',
                path: '/home-3',
            },
        ],
    },

    {
        title: 'About',
        path: '/about',
    },

    {
        title: 'Pages',
        path: '/',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Team',
                path: '/team',
                cName: 'sub-nav',
            },
            {
                title: 'Faq',
                path: '/faq',
                cName: 'sub-nav',
            },
            {
                title: 'Projects',
                path: '/projects',
            },
        ],
    },

    {
        title: 'Services',
        path: '/services',
    },

    {
        title: 'News',
        path: '/news',
    },

    {
        title: 'Contact',
        path: '/contact',
    },
];

export default menuData;
