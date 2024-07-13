import arThumbnail from '../assets/projects/AR/thumbnail.png'
import nexumThumbnail from '../assets/projects/Nexum/thumbnail.jpg'
import shortVideoThumbnail from '../assets/projects/ShortVideo/thumbnail.jpg'
import laptopThumbnail from '../assets/projects/Laptop/thumbnail.png'
import battleshipThumbnail from '../assets/projects/Battleship/thumbnail.png'
import codeforcesThumbnail from '../assets/projects/CodeforcesFriends/thumbnail.png'
import streaksThumbnail from '../assets/projects/Streaks/thumbnail.png'
import easyShareThumbnail from '../assets/projects/EasyShare/thumbnail.jpg'
import parkThumbanil from '../assets/projects/Park/thumbnail.png'
import plagiarismThumbanil from '../assets/projects/PlagiarismChecker/thumbnail.png'



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
        {title:'Project report',link:'https://1drv.ms/w/s!AmvH0VCG4AMoh6Jvn2OXuBae7r8bGA?e=ctc9fg'}, 
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

    { imageSrc: parkThumbanil, title: 'Park', summary: 'Automatically save parking location when phone disconnects from Android Auto' , ytLink:'', 
        description: "Automatically save parking space location when phone disconnects from Android Auto or Android Automative OS.Manually save parking location for users not using Android Auto.Parking space notes.Needs notification and precise location permissions.App does not require internet access.Built in Kotlin using CarConnection api, location services and Room database",
        images: ["",],
        githubLink:"https://github.com/BDhanush/Park/",
        otherLinks:[
            {title:'apk link',link:'https://1drv.ms/f/s!AmvH0VCG4AMoh6RPFJHZqKf38WfHyQ?e=hcQaJg'},
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
    { imageSrc: easyShareThumbnail, title: 'Easy Share', summary: 'Share links quickly using NFC or QRcode' , ytLink:'https://www.youtube.com/embed/hrgVMZHlzCE', 
        description: "Use NFC or QR codes to share saved links.Built in Kotlin along with Room database to store links.Uses Host Card Emulation for NFC and a QR code generator",
        images: ["",],
        githubLink:"https://github.com/BDhanush/Easy-Share/",
        otherLinks:[
            {title:'apk link',link:'https://1drv.ms/f/s!AmvH0VCG4AMoh6QgCfANqM-bwjt1jA?e=O9LsJB'}, 
        ],
    },
    { imageSrc: plagiarismThumbanil, title: 'Plagiarism Checker', summary: 'Plagiarism checking using edit distance and tri-grams' , ytLink:'', 
        description: "Plagiarism checking using edit distance and tri-grams",
        images: ["",],
        githubLink:"https://github.com/BDhanush/Plagiarism-Checker/",
        otherLinks:[
            {title:'report',link:'https://1drv.ms/w/s!AmvH0VCG4AMo1h36MUQ-7uw1j_eT?e=7bousw'}, 
        ],
    },



    
]