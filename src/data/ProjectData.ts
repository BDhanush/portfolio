import arThumbnail from '../assets/projects/AR/thumbnail.png'
import nexumThumbnail from '../assets/projects/Nexum/thumbnail.jpg'
import shortVideoThumbnail from '../assets/projects/ShortVideo/thumbnail.jpg'
import laptopThumbnail from '../assets/projects/Laptop/thumbnail.png'
import battleshipThumbnail from '../assets/projects/Battleship/thumbnail.png'
import codeforcesThumbnail from '../assets/projects/CodeforcesFriends/thumbnail.png'
import streaksThumbnail from '../assets/projects/Streaks/thumbnail.png'




export function getLink(title:string):string {
    return title.split(' ').join('_');
}

// last sentence in description should not end with a '.'
export const projectItems=[
    { imageSrc: arThumbnail, title: 'AR Glasses', summary: 'AR app to try on glasses' , ytLink:'https://www.youtube.com/embed/QlHkJT6Zp1g', 
    description: "An app to help users view glasses in a 3D environment and try them on. Android app built in Kotlin using Sceneform and augmented faces feature in ARcore",
    images: ["",],
    githubLink:"https://github.com/BDhanush/ARShopping/",
    otherLinks:[
        {title:'Project report',link:'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbEdOaGxpcEsyOXNqMHRvcHNMVlJxWDYtV2xEZ3xBQ3Jtc0tsaTNwN0JtRThQR3dIQ2VFN3JZSmV3VDJ2VVYyVll0RUdjdVlnRkNNVkFPQ0FYWjFyeFpBbVphMk12a190aEMyamtkUTNFZWRmLWdkaHJZNVFsSUtFNEk1SU84SHhPZ3ltR21jNnh4Y1lhSHpxMF94WQ&q=https%3A%2F%2F1drv.ms%2Fw%2Fs%21AmvH0VCG4AMoh6Jvn2OXuBae7r8bGA%3Fe%3Dctc9fg&v=QlHkJT6Zp1g'}, 
        {title:'apk link',link:'https://onedrive.live.com/?id=2803E08650D1C76B%21119190&resid=2803E08650D1C76B%21119190&ithint=folder&authkey=%21AARvrBeZMvrSSNE&cid=2803e08650d1c76b'}, 

    ],
    },

    { imageSrc: nexumThumbnail, title: 'Nexum', summary: 'Companion app for students of a particular university' , ytLink:'https://www.youtube.com/embed/IbV2Tf7KyFo', 
    description: "An android app built to help over 2000 students easily find events, opportunities/jobs, relevant resources, and a user location heatmap to help find hot spots across the university.Built in Kotlin with a Firebase backend.Features: event remainders; event gallery; open work/collaboration opportunities; location heatmap; shared file space",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Nexum/",
    otherLinks:[
        {title:'apk link',link:'https://1drv.ms/f/s!AmvH0VCG4AMo1y37OntHysds84yR?e=pYs0fZ'}, 

    ],
    },

    { imageSrc: shortVideoThumbnail, title: 'Short form', summary: 'Short Video App for Educational content' , ytLink:'https://www.youtube.com/embed/EUqm-KHB07E', 
    description: "Short Video Android App for Educational content. Vertical media content social media. Built in Kotlin with a Firebase backend.Features: login/sign up, surfing videos, upvote/downvote, viewing profiles, uploading videos, saving videos, follow/unfollow users, comments; sharing a video using deeplinks; tags; search",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Short-Video-App",
    otherLinks:[
        {title:'apk link',link:'https://1drv.ms/f/s!AmvH0VCG4AMo10HjbaZu1WaYOfWK?e=gazG1u'}, 
    
    ],
    },

    { imageSrc: laptopThumbnail, title: 'Laptop price predictor', summary: 'Predicting a laptop\'s price given its specifications' , ytLink:'', 
    description: "Developed an end-to-end project for predicting a laptop\'s price given its specifications using several ML models with a R2 measure of 82% and performed EDA on the available data.Role involved scraping and cleaning (pre-processed) dataset collected from the Flipkart laptop catalog (raw data: 943 entries with 96 features)",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Laptop-price-prediction/tree/main/ML",
    otherLinks:[
        {title:'Unprocessed dataset',link:'https://www.kaggle.com/datasets/dhanushbommavaram/laptop-dataset'},
        {title:'Processed dataset',link:'https://www.kaggle.com/datasets/dhanushbommavaram/laptop-ranked-dataset'}, 
    ],
    },

    { imageSrc: battleshipThumbnail, title: 'Battleship bot', summary: 'Bot to play the game, Battleship using probability' , ytLink:'', 
    description: "Python and C++ programs to play and win the game, battleship using probability on an average of 48 moves.51% faster than using random strategy",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Battleship-Bot",
    
    },

    { imageSrc: codeforcesThumbnail, title: 'Codeforces add friends automation', summary: 'Web automation to automate task' , ytLink:'https://www.youtube.com/embed/tT6bHrPPE7E', 
    description: "Adds a list of friends to a given codeforces handle with web automation.Saved 3 hrs to add 200 members.Programmed in Python using Selenium",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Codeforces-friends-automation",
    
    },

    { imageSrc: streaksThumbnail, title: 'Streaks', summary: 'Maintain track of habits' , ytLink:'https://www.youtube.com/embed/78uXWx5niR0', 
    description: "Add, delete and reset streaks.An Android app to help track habits.Built in Kotlin along with Room database to store streaks",
    images: ["",],
    githubLink:"https://github.com/BDhanush/Streaks/",
    otherLinks:[
        {title:'apk link',link:'https://1drv.ms/f/s!AmvH0VCG4AMoh6NSjlAvMLH7H0SwRQ?e=twmcXT'}, 
    ],
    },


    
]