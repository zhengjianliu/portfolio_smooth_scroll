let FRONTEND = 'Front-end';
let BACKEND = 'Back-end';
let WEBSITE = 'Live Demo';

module.exports = {
    email: 'comezheng@gmail.com',
    socialMedia: [
        {
            name: 'GitHub',
            url: 'https://github.com/zhengjianliu',
            imgUrl:'../assets/icons/github.svg',
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/zhengjian-jay-liu-33776553/',
            imgUrl: '../assets/icons/linkedin.svg'
        },
        {
            name: 'Medium',
            url: 'https://medium.com/@comezheng',
            imgUrl: '../assets/icons/medium.svg'
        },
        {
            name: 'Email',
            url: "mailto:comezheng@gmail.com",
            imgUrl: '../assets/icons/email.svg',
        }
    ],
    NavLinks: [
        {
            name: 'Home',
            url: 'Home'
        },
        {
            name: 'About',
            url: 'About',
        },
        {
            name: 'Projects',
            url: 'Projects',
        },
        {
            name: 'Blogs',
            url: 'Blogs',
        },
        {
            name: 'Contact',
            url: 'Contact',
        },
    ],
    HomePage: {
        name:"",
        greeting: ['Hello World!', " I'm ZHENGJIAN LIU"],
        typerContent: ["ZHENGJIAN LIU",'a Full Stack Developer', 'a Problem Solver 🤔','Ready To Work With You'],
    },
    AboutPage: {
        name: 'About Me',
        intro: ["Hi, I'm Zhengjian Liu", "I'm a software engineer with demonstrated success in my ability to learn within a fast paced and hands-on environment. I am well versed in JavaScript, React.JS, Angular, Express.JS, and possess strong experience and a solid foundation in web development. I take pride in being a hands-on and driven engineer team member who can prototypes quickly and can arouse the passion and creativity of team members for innovation."],
        skillset:{
            desc: "Here are a few technologies I've been working with recently:",
            skills:['TypeScript','JavaScript','Angular','React.JS','CSS/SCSS','Affinity']
        }
    },
    ProjectsPage:{
        name: 'Projects',
        projects:[
            {
                name: 'Nanime',
                desc: 'An web application that allows users to watch animes and movies.',
                technologies: ['#React.JS', '#JavaScript', '#SCSS', '#ReactPlayer'],
                links:[
                    {
                        name:FRONTEND,
                        link:'',
                    },
                    {
                        name:BACKEND,
                        link:'',
                    },
                    {
                        name:WEBSITE,
                        link:'https://nanimes.netlify.app/',
                    }
                ],
                imgUrl: '../assets/images/nanimes.jpg',
                carouselItems:[
                    '../assets/Nanime/HomePage.png',
                    '../assets/Nanime/animeDetail.png',
                    '../assets/Nanime/anime.png',
                    '../assets/Nanime/recentRelease.png',
                    '../assets/Nanime/Search.png',
                    '../assets/Nanime/sideHistory.png',
                    '../assets/Nanime/historyPage.png',
                ],
                featured:true,
            },
            {
                name: 'Zip Trade',
                desc: 'An business marketing web app provides a connection for local flea market.',
                technologies: ['#React.JS', '#Redux', '#ROR', '#JavaScript'],
                links:[
                    {
                        name:FRONTEND,
                        link:'https://github.com/zhengjianliu/ziptrade-frontend',
                    },
                    {
                        name:BACKEND,
                        link:'https://github.com/zhengjianliu/ziptrade-backend',
                    },
                    {
                        name:WEBSITE,
                        link:'https://ziptrade.netlify.app/',
                    }
                ],
                imgUrl: '../assets/images/ziptrade.jpg',
                carouselItems:[
                    '../assets/ziptrade/HomePage.png',
                    '../assets/ziptrade/productPage.png',
                    '../assets/ziptrade/login.png',
                    '../assets/ziptrade/signup.png',
                    '../assets/ziptrade/editPage.png',
                    '../assets/ziptrade/createform.png',
                    '../assets/ziptrade/createform2.png',
                    '../assets/ziptrade/accountPage.png',
                ],
                featured:false,
            },
            {
                name: 'Best Bey',
                desc: 'An electronic e-commerce website that allows user to place order and search electronic products',
                technologies: ['#React.JS', '#Redux', '#ROR', '#JavaScript'],
                links:[
                    {
                        name:FRONTEND,
                        link: 'https://github.com/zhengjianliu/bestbey',
                    },
                    {
                        name:BACKEND,
                        link: 'https://github.com/zhengjianliu/bestbey-back',
                    },
                    {
                        name:WEBSITE,
                        link:'https://bestbey.netlify.app/',
                    }
                ],
                imgUrl: '../assets/images/bestbey.jpg',
                carouselItems:[
                    '../assets/BestBey/Home.png',
                    '../assets/BestBey/login.png',
                    '../assets/BestBey/signup.png',
                    '../assets/BestBey/product.png',
                    '../assets/BestBey/search.png',
                    '../assets/BestBey/checkout.png',
                    '../assets/BestBey/confirmation.png',
                ],
                featured:false,
            },
            {
                name: 'YouPlay',
                desc: 'An Web App that allows users to search, stream, and comment on videos online, and create and save new video playlists',
                technologies: ['#ROR', '#Affinity','#Heroku'],
                links:[
                    {
                        name:FRONTEND,
                        link: 'https://github.com/zhengjianliu/YouPlay',
                    },
                    {
                        name:BACKEND,
                        link: 'https://github.com/zhengjianliu/YouPlay',
                    },
                    {
                        name:WEBSITE,
                        link:'',
                    }
                ],
                imgUrl: '../assets/images/youplay.jpg',
                carouselItems:[
                    '../assets/images/youplay.jpg',
                ],
                featured:false,
            },
            {
                name: 'Portfolio Website',
                desc: 'Portfolio website implemented with dark & light mode feature.',
                technologies: ['#React.JS', '#Redux', '#HTML', '#CSS'],
                links:[
                    {
                        name:FRONTEND,
                        link: '',
                    },
                    {
                        name:BACKEND,
                        link: '',
                    },
                    {
                        name:WEBSITE,
                        link:'https://zhengjianliu.com',
                    }
                ],
                imgUrl: '../assets/images/portfolio.jpg',
                carouselItems:[
                    '../assets/images/portfolio.jpg',
                ],
                featured:false,
            }
        ]
    },
    BlogsPage:{
        name: 'Blogs',
        API: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@comezheng',
    },
    ContactPage:{
        name: 'Contact'
    },
    colors: {
        green: '#64ffda',
        navy: '#0a192f',
        darkNavy: '#020c1b',
    },
}