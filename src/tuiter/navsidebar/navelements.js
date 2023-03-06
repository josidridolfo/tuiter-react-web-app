import { faHome, faHashtag, faEnvelope, faBookmark, faFlask, faEllipsisH, faList, faUser } from "@fortawesome/free-solid-svg-icons";

const navItems = [

    {
        id_: "123",
        url: '/tuiter/home',
        faIcon: faHome,
        caption: 'Home',
    },

    {
        id_: "234",
        url: '/tuiter/explore',
        faIcon: faHashtag,
        caption: 'Explore',
    },

    {
        id_: "345",
        url: '/',
        faIcon: faFlask,
        caption: 'A6 Lab',
    },

    {
        id_: "456",
        url: '#',
        faIcon: faEnvelope,
        caption: 'Messages',
    },

    {
        id_: "567",
        url: '#',
        faIcon: faBookmark,
        caption: 'Bookmarks',
    },

    {
        id_: "678",
        url: '#',
        faIcon: faList,
        caption: 'Lists',
    },

    {
        id_: "789",
        url: '#',
        faIcon: faUser,
        caption: 'Profile',
    },

    {
        id_: "890",
        url: '#',
        faIcon: faEllipsisH,
        caption: 'More',
    },
];

export default navItems;