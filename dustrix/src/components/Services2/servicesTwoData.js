import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/service1.jpg';
import thumb2 from '../../assets/img/service2.jpg';
import thumb3 from '../../assets/img/service3.jpg';
import thumb4 from '../../assets/img/service4.jpg';
import thumb5 from '../../assets/img/service5.jpg';
import thumb6 from '../../assets/img/service6.jpg';

const servicesTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaDraftingCompass />,
        heading: 'Metal Forming',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        icon: <FaRegBuilding />,
        heading: 'Manufacturing',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        icon: <FaTruckMoving />,
        heading: 'Welding & Laser',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb4,
        icon: <FaRegBuilding />,
        heading: 'Construction Management',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb5,
        icon: <FaCity />,
        heading: 'Apartment Design',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb6,
        icon: <FaHardHat />,
        heading: 'Architecture & Building',
        text: 'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod.',
    },
];

export default servicesTwoData;
