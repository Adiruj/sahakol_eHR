// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Application',
    // caption: 'Application',
    type: 'group',
    children: [
        {
            id: 'Recruitment',
            title: 'Recruitment',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'Register',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/login/login3',
                    target: true
                },
                {
                    id: 'PD',
                    title: 'PD Approve',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                },
                {
                    id: 'Manpower',
                    title: 'Manpower',
                    type: 'item',
                    url: '/pages/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'Training',
            title: 'Training Development',
            type: 'collapse',
            icon: icons.IconKey
        },
        {
            id: 'Compensation',
            title: 'Compensation',
            type: 'collapse',
            icon: icons.IconKey
        },
        {
            id: 'Employment',
            title: 'Employment',
            type: 'collapse',
            icon: icons.IconKey
        }
    ]
};

export default pages;
