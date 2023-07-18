import { v4 as uuidv4 } from 'uuid';
import member1 from '../../assets/img/team/team1.png';
import member2 from '../../assets/img/team/team2.png';
import member3 from '../../assets/img/team/team3.png';
import member4 from '../../assets/img/team/team4.png';
import member5 from '../../assets/img/team/team5.png';
import member6 from '../../assets/img/team/team6.png';

const teamData = [
    {
        id: uuidv4(),
        img: member1,
        name: 'SALMAN AHMED',
        position: 'Founder',
        fbLink: '/',
        twitterLink: '/',
        behanceLink: '/',
        youtubeLink: '/',
    },

    {
        id: uuidv4(),
        img: member2,
        name: 'MIRANDA H. HALIM',
        position: 'CEO',
        fbLink: '/',
        twitterLink: '/',
        behanceLink: '/',
        youtubeLink: '/',
    },

    {
        id: uuidv4(),
        img: member3,
        name: 'ALEX D. DENZILAN',
        position: 'Designer',
        fbLink: '/',
        twitterLink: '/',
        behanceLink: '/',
        youtubeLink: '/',
    },

    {
        id: uuidv4(),
        img: member4,
        name: 'KILMON L. LIMONA',
        position: 'Support Engineer',
        fbLink: '/',
        twitterLink: '/',
        behanceLink: '/',
        youtubeLink: '/',
    },

    {
        id: uuidv4(),
        img: member5,
        name: 'MALLU RAHUL DAS',
        position: 'Support Engineer',
        fbLink: '/',
        twitterLink: '/',
        behanceLink: '/',
        youtubeLink: '/',
    },

    {
        id: uuidv4(),
        img: member6,
        name: 'PRINDOL Y. YNKEES',
        position: 'Developer',
        fbLink: '/',
        twitterLink: '/',
        behanceLink: '/',
        youtubeLink: '/',
    },
];

export default teamData;
