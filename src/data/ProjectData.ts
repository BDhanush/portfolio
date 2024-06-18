import { MdDescription } from 'react-icons/md'
import logo from '../assets/react.svg'

export function getLink(title:string):string {
    return title.split(' ').join('_');
}

// last sentence in description should not end with a '.'
export const projectItems=[
    { imageSrc: logo, title: 'Title 1', summary: 'Description 1' , ytLink:'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    description: "hi. hi",
    images: ["",]},
    { imageSrc: logo, title: 'Title 1', summary: 'Description 1' , ytLink:'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    description: "hi. hi",
    images: ["",]},
    { imageSrc: logo, title: 'Title 1', summary: 'Description 1' , ytLink:'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    description: "hi. hi",
    images: ["",]},
    { imageSrc: logo, title: 'Title 1', summary: 'Description 1' , ytLink:'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    description: "hi. hi",
    images: ["",]},
    { imageSrc: logo, title: 'Title 1', summary: 'Description 1' , ytLink:'https://www.youtube.com/embed/dQw4w9WgXcQ', 
    description: "hi. hi",
    images: ["",]},
]