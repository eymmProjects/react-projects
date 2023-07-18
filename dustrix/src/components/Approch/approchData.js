import { FaDraftingCompass, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';

const approchData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <FaDraftingCompass />,
        heading: 'Our Vision',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <FaPencilRuler />,
        heading: 'Our Mission',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod',
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        icon: <FaHardHat />,
        heading: 'Our Approch',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod',
        btnText: 'Read More',
        pageLink: '/project-details',
    },
];

export default approchData;
