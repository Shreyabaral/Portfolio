module.exports = {
  siteTitle: `Hi!  I\'m Shreya!
               `
     ,
  siteDescription: `I am passionate web developer 
  `,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Shreya Baral',
  twitterUsername: '_shreyooo',
  githubUsername: 'Shreyabaral',
  authorAvatar: '/images/profile.jpg',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    <br />
   <p>  I have worked with Python, C++, C#.Net, JavaScript, jQuery,
    ReactJS, GatsbyJS, and Wordpress. I've built web apps. <br /> <br />
     My goal is to secure
     a position where I can efficiently contribute my skills and abilities to the growth 
     of the organization and build my professional career.
   </p>
    `,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 70
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'React',
      level: 50
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  // jobs: [
  //   /* more jobs here */
  //   {
  //     company: "Gympass",
  //     begin: {
  //       month: 'sep',
  //       year: '2019'
  //     },
  //     duration: null,
  //     occupation: "Frontend developer",
  //     description: "I am part of the Corporate team, responsible for the development and maintenance of the employee management platform, giving more and more autonomy to partner companies."
  
  //   },  {
  //     company: "Lendico",
  //     begin: {
  //       month: 'apr',
  //       year: '2018'
  //     },
  //     duration: null,
  //     occupation: "Frontend developer",
  //     description: "I integrate the Frontend team responsible for developing and maintaining the online lending platform."
  
  //   }, {
  //     company: "Anapro",
  //     begin: {
  //       month: 'dec',
  //       year: '2016'
  //     },
  //     duration: '1 yr e 5 mos',
  //     occupation: "Fullstack developer",
  //     description: "Development and maintenance, corrective and preventive, of web applications for the real estate market."
  //   }, {
  //     company: "Anapro",
  //     begin: {
  //       month: 'set',
  //       year: '2012'
  //     },
  //     duration: '4 yrs e 3 mos',
  //     occupation: "Support Technician",
  //     description: "Responsible for the implementation and parameterization of the system, training and customer support. Acting also in person in real estate launches guaranteeing the success and good use of the tool."
  
  //   },
  // ],
  portifolio: [
    {
      image: "/images/CV-template.PNG",
      description: "My CV",
      url: "/images/resume.pdf"
    },
    {
      image: "/images/github.PNG",
      description: "Github",
      url: "https://github.com/Shreyabaral"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/shrbaral",
    linkedin: " ",
    github: "https://github.com/Shreyabaral",
    email: "shrbaral@gmail.com"
  },
  siteUrl: 'https://github.com/Shreyabaral/Portfolio.git',
  pathPrefix: '/Portfolio.git', // Note: it must *not* have a trailing slash.
  siteCover: '',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode:true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/whay11.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}