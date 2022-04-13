import About from "../component/about";
import ChatRoom from "../component/chatRoom";
import Contact from "../component/contact";
import Home from "../component/home";
import LandingPage from "../component/landingPage";
import Login from "../component/login";
import MediaList from "../component/Medialist";
import GenerateQRCode from "../component/QRcodeGeneration";
import VedioStream from "../component/vedioStream";

export const routes = {
    guest: [
        {
            key: 4,
            title: 'login',
            path: '/login',
            exact: true,
            component: Login
        },
        {
            key: 2,
            title: 'mediafile',
            path: '/mediafile',
            exact: true,
            component: MediaList
        },
        // {
        //     key:1,
        //     title:'home',
        //     path:'/home',
        //     exact:true,
        //     component:Home
        // },
        {
            key: 1,
            title: 'chat',
            path: '/chat',
            exact: true,
            component: ChatRoom
        },
        {
            key: 3,
            title: 'Vedio Stream',
            path: '/vedio/:id',
            exact: true,
            notshow: true,
            component: VedioStream

        },
        {
            key: 5,
            title: 'Generate QR code',
            path: '/qrcode',
            exact: true,
            component: GenerateQRCode
        }, {
            key: 6,
            title: 'Landing page',
            path: '/landingpage',
            exact: true,
            component: LandingPage
        }
    ],
    registeredUser: [
        {
            key: 1,
            title: 'home',
            path: '/home',
            exact: true,
            component: Home
        },
        {
            key: 2,
            title: 'about us',
            path: '/about',
            exact: true,
            component: About
        },
        {
            key: 3,
            title: 'contact us',
            path: '/contact',
            exact: true,
            component: Contact
        }
    ]
}