export const menu = [
  {id:1,name: 'About me', section: 'about'},
  {id:2,name: 'Skills', section: 'skills'},
  {id:3,name: 'Experiences', section: 'experiences'},
  {id:4,name: 'Projects', section: 'projects'},
  {id:5,name: 'Get in touch', section: 'contact'},
];

export const work=[
  [{id:2,link: "https://github.com/JanaKhanji/e-track-web", name:"E-Track" , desc:"An online-customized bullet journal", imgSrc:"assets/images/work01.jpg"},
  {id:1,link: "https://watchy-movies-app.vercel.app/", name:"Watchy" , desc:"Find your movies", imgSrc:"assets/images/work02.jpg"},
  {id:3,link: "https://janakhanji.github.io/ArtGallery/home", name:"Art Gallery" , desc:"My Art Portfolio", imgSrc:"assets/images/work04.jpg"}  
]];

export const skills = [
  {id:1, icon:"html", title:"HTML & CSS"},
  {id:2, icon:"js", title:"JavaScript"},
  {id:3, icon:"angular", title:"Angular"},
  {id:4, icon:"java", title:"Java"},
  {id:5, icon:"postgres", title:"PostgreSQL"},
  {id:6, icon:"git", title:"Git & Github"},

].sort((a,b) => a.id - b.id);

export const experiences = [
  {id:5, link: "https://www.arcusscale.com/", name:"ArcusScale",
  desc: `ArcusScale is a prominent leader in software engineering and technology consulting, dedicated to transforming your concepts into reliable software solutions.`,
  responsibilities: [],
  imgSrc:"assets/images/experience05.png",
  date:"August 2023 - Present",
  technologies: [],
  left: false,
  },
  {id:4, link: "https://thrivable.app/", name:"Thrivable",
  desc: `The largest, most comprehensive, and clinically representative diabetes patient database in the USA.`,
  responsibilities: [
    'Participate in team-based activities for architecture design and creation of requirements.',
    'Create robust, scalable, and highly available application.',
    'Evaluate new and emerging technologies for implementation.'
  ],
  imgSrc:"assets/images/experience04.png",
  date:"August 2023 - Present",
  technologies: ['Java - SpringBoot', 'PostgreSQL', 'Angular', 'Tailwind', 'DaisyUI'],
  left: true,
  },
  {id:3, link: "https://supportful.world/", name:"Supportful",
  desc: `Supportful helps companies grow their software engineering teams by providing outstanding talents in staff augmentation mode.`,
  responsibilities: [ ],
  imgSrc:"assets/images/experience03.png",
  date:"May 2021 - April 2023",
  technologies: [],
  left: false,
  },
  {id:2, link: "https://echo360.com/", name:"Echo360",
  desc: `EchoPoll - Dynamic polling tool that facilitates real-time interaction and engagement in educational settings.`,
  responsibilities: [
    'Participate in all aspects of the software development lifecycle (designing, planning, developing, testing, deploying).',
    'Maintain, modify, expand, and enhance existing applications.',
    'Collaborate with the backend team to plan and create tasks for new features'
  ],
  imgSrc:"assets/images/experience02.png",
  date:"May 2021 - April 2023",
  technologies: ['Angular', 'Bootstrap'],
  left: true,
  },
  {id:1, link: "https://www.binayati.com/", name:"Binayati",
  desc: `Digital building assistant – Binayati, to facilitate all operations related to the building management.`,
  responsibilities: [
    'Use all the available tools to build a user-friendly and an easy to navigate website with complex functionalities.',
    'Maintain readable and understandable code.'
  ],
  imgSrc:"assets/images/experience01.jpg",
  date:"March 2021 - August 2021",
  technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Knockout JS', 'Datatables'],
  left: true,
  },
].sort((a,b) => b.id - a.id);