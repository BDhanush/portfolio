import logo from '../assets/react.svg'

export function getLink(title:string):string {
    return title.split(' ').join('_');
}

// last sentence in description should not end with a '.'
export const projectItems=[
    { imageSrc: logo, title: 'AR Glasses', summary: 'AR app to try on glasses' , ytLink:'https://www.youtube.com/embed/QlHkJT6Zp1g', 
    description: "An app to help users view glasses in a 3D environment and try them on. Android app built in Kotlin using Sceneform and augmented faces feature in ARcore",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Streaks/",
    otherLinks:[{title:'',link:''}, ],
    },

    { imageSrc: logo, title: 'Nexum', summary: 'Companion app for students of a particular university' , ytLink:'', 
    description: "An android app built to help over 2000 students easily find events, opportunities/jobs, relevant resources, and a user location heatmap to help find hot spots across the university.Built in Kotlin with a Firebase backend.Features: event remainders; event gallery; open work/collaboration opportunities; location heatmap; shared file space",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Nexum/",
    otherLinks:[{title:'',link:''}, ],
    },

    { imageSrc: logo, title: 'Short form', summary: 'Short Video App for Educational content' , ytLink:'', 
    description: "Short Video Android App for Educational content. Vertical media content social media. Built in Kotlin with a Firebase backend.Features: login/sign up, surfing videos, upvote/downvote, viewing profiles, uploading videos, saving videos, follow/unfollow users, comments; sharing a video using deeplinks; tags; search",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Short-Video-App",
    otherLinks:[{title:'',link:''}, ],
    },

    { imageSrc: logo, title: 'Laptop price predictor', summary: 'Predicting a laptop\'s price given its specifications' , ytLink:'', 
    description: "Developed an end-to-end project for predicting a laptop\'s price given its specifications using several ML models with a R2 measure of 82% and performed EDA on the available data.Role involved scraping and cleaning (pre-processed) dataset collected from the Flipkart laptop catalog (raw data: 943 entries with 96 features)",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Laptop-price-prediction/tree/main/ML",
    otherLinks:[{title:'',link:''}, ],
    },

    { imageSrc: logo, title: 'Battleship bot', summary: 'Bot to play the game, Battleship using probability' , ytLink:'', 
    description: "Python and C++ programs to play and win the game, battleship using probability on an average of 48 moves.51% faster than using random strategy",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Battleship-Bot",
    otherLinks:[{title:'',link:''}, ],
    },

    { imageSrc: logo, title: 'Codeforces add friends automation', summary: 'Web automation to automate task' , ytLink:'', 
    description: "Adds a list of friends to a given codeforces handle with web automation.Saved 3 hrs to add 200 members.Programmed in Python using Selenium",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Codeforces-friends-automation",
    otherLinks:[{title:'',link:''}, ],
    },

    { imageSrc: logo, title: 'Streaks', summary: 'Maintain track of habits' , ytLink:'', 
    description: "Add, delete and reset streaks.An Android app to help track habits.Built in Kotlin along with Room database to store streaks",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Streaks/",
    otherLinks:[{title:'',link:''}, ],
    },


    
]