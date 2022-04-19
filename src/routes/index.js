import React from 'react';
const About = React.lazy(() => import("../component/about"));
const ChatRoom = React.lazy(() => import("../component/chatRoom"));
const Contact = React.lazy(() => import("../component/contact"));
const Home = React.lazy(() => import("../component/home"));
const LandingPage = React.lazy(() => import("../component/landingPage"));
const Login = React.lazy(() => import("../component/login"));
const MediaList = React.lazy(() => import("../component/Medialist"));
const PaginatedItems = React.lazy(() => import("../component/Pagination"));
const GenerateQRCode = React.lazy(() => import("../component/QRcodeGeneration"));
const VedioStream = React.lazy(() => import("../component/vedioStream"));

export const routes = [
    {
        key: 1,
        title: 'home',
        path: '/home',
        exact: true,
        component: Home,
        isPrivate: true
    },
    {
        key: 2,
        title: 'about us',
        path: '/about',
        exact: true,
        component: About,
        isPrivate: true
    },
    {
        key: 3,
        title: 'contact us',
        path: '/contact',
        exact: true,
        component: Contact,
        isPrivate: true
    },
    {
        key: 4,
        title: 'mediafile',
        path: '/mediafile',
        exact: true,
        component: MediaList,
        isPrivate: true
    },
    {
        key: 5,
        title: 'chat',
        path: '/chat',
        exact: true,
        component: ChatRoom,
        isPrivate: true
    },
    {
        key: 6,
        title: 'Vedio Stream',
        path: '/vedio/:id',
        exact: true,
        notshow: true,
        component: VedioStream,
        isPrivate: true

    },
    {
        key: 7,
        title: 'Generate QR code',
        path: '/qrcode',
        exact: true,
        component: GenerateQRCode,
        isPrivate: true
    }, {
        key: 8,
        title: 'Landing page',
        path: '/landingpage',
        exact: true,
        component: LandingPage,
        isPrivate: true
    },
    {
        key: 9,
        title: 'Pagination',
        path: '/pagination',
        exact: true,
        component: PaginatedItems,
        isPrivate: true
    },
    {
        key: 10,
        title: 'login',
        path: '/login',
        exact: true,
        isPrivate: false,
        component: Login,
    }
]