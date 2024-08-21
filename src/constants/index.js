import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    kodego,
    freecodecamp,
    youtube,
    cinemasync,
    responsiveportfolio,
    nextjsportfolio
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front-End Developer",
        company_name: "KodeGo",
        icon: kodego,
        iconBg: "#accbe1",
        date: "July 2023 - September 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Back-End Developer",
        company_name: "KodeGo",
        icon: kodego,
        iconBg: "#fbc3bc",
        date: "October 2023 - November 2023",
        points: [
            "Developed and maintained server-side logic and databases using Laravel, ensuring robust and scalable web applications.",
            "Collaborated with front-end developers, designers, and product managers to integrate user-facing elements with server-side logic.",
            "Optimized application performance by managing data storage solutions and enhancing query efficiency.",
            "Conducted code reviews and provided valuable feedback to improve the back-end architecture and overall system performance.",
        ],
    },
    {
        title: "Responsive Web Design",
        company_name: "freeCodeCamp",
        icon: freecodecamp,
        iconBg: "#b7e4c7",
        date: "June 2024 - July 2024",
        points: [
            "Completed hands-on projects to master responsive web design principles, ensuring websites are visually appealing and functional across various devices.",
            "Gained expertise in HTML, CSS, and Flexbox, utilizing these technologies to create fluid layouts and adaptive interfaces.",
            "Focused on mobile-first design approaches, optimizing user experiences for smaller screens and progressively enhancing for larger devices.",
            "Validated and refined web designs through rigorous testing for cross-browser compatibility and adherence to web accessibility standards.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "YouTube",
        icon: youtube,
        iconBg: "#a2d2ff",
        date: "Aug 2024 - Present",
        points: [
            "Developing and maintaining full-stack web applications using a variety of technologies, including Django , Next.js, and React.js, .",
            "Actively engaging in self-directed learning through YouTube, constantly expanding knowledge in emerging technologies such as Three.js,Laravel and the MERN stack.",
            "Implementing responsive design and optimizing application performance to create seamless user experiences across multiple devices.",
            "Striving to master new tech stacks and frameworks, continuously refining skills to stay updated with the latest industry trends and best practices.",
        ],

    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/LemuelVelez',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lemuel-velez-a38a7a238/',
    }
];

export const projects = [
    {
        iconUrl: cinemasync,
        theme: 'btn-back-red',
        name: 'CinemaSync',
        description: 'Developed a web application that synchronizes movie trailer watching experiences, allowing users to watch trailers together in real-time, no matter where they are located.',
        link: 'https://cinema-sync.vercel.app/',
    },
    {
        iconUrl: responsiveportfolio,
        theme: 'btn-back-green',
        name: 'Responsive Portfolio',
        description: 'Developed a multi-page responsive portfolio website showcasing various projects, skills, and experiences, designed to provide a seamless user experience across devices.',
        link: 'https://multi-page-responsive-website-mp-1.vercel.app/',
    },
    {
        iconUrl: nextjsportfolio,
        theme: 'btn-back-blue',
        name: 'NextJs Portfolio',
        description: 'Designed and developed a modern portfolio website using Next.js, showcasing personal projects, skills, and experiences with optimized performance and SEO.',
        link: 'https://my-portfolio-eight-xi-85.vercel.app/work',
    },
];