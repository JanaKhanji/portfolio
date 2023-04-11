export const menu = [
  {id:1,name: 'About me', section: 'about'},
  {id:2,name: 'Skills', section: 'skills'},
  {id:3,name: 'Projects', section: 'projects'},
  {id:3,name: 'Experiences', section: 'experiences'},
  {id:3,name: 'Get in touch', section: 'contact'},
];

export const work=[
  [{id:2,link: "https://github.com/JanaKhanji/e-track-web", name:"E-Track" , desc:"An online-customized bullet journal", imgSrc:"assets/images/work01.jpg"},
  {id:1,link: "https://6gxzi.csb.app/", name:"Watchy" , desc:"Find your movies", imgSrc:"assets/images/work02.jpg"},
  ],
  [{id:3,link: "http://www.futurecompany.info/", name:"Future Company" , desc:"Future Company Exhibition Website", imgSrc:"assets/images/work03.jpg"},
  {id:4,link: "https://janakhanji.github.io/ArtGallery/home", name:"Art Gallery" , desc:"My Art Portfolio", imgSrc:"assets/images/work04.jpg"}
]];

export const skills = [
  {id:1, icon:"html", title:"HTML & CSS"},
  {id:2, icon:"js", title:"JavaScript"},
  {id:3, icon:"git", title:"Git & Github"},
  {id:4, icon:"angular", title:"Angular"},
  {id:5, icon:"react", title:"React"},
  {id:6, icon:"ionic", title:"Ionic"},
].sort((a,b) => a.id - b.id);

export const experiences = [
  {id:1, link: "https://www.binayati.com/", name:"Binayati",
  desc: `Digital building assistant – Binayati, to facilitate all operations related to the building management.`,
  responsibilities: [
    'Use all the available tools to build a user-friendly and an easy to navigate website with complex functionalities.',
    'Maintain readable and understandable code.'
  ],
  imgSrc:"assets/images/experience01.jpg",
  date:"March 2021 - August 2021"
},
]