import { BsAward, BsTrophy } from 'react-icons/bs';
import { FaDollarSign, FaRegBuilding, FaToolbox, FaWordpress } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const timeLineData = [
    {
        id: uuidv4(),
        year: 2000,
        icon: <BsAward />,
        heading: 'Starting Our Journey',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2005,
        icon: <BsTrophy />,
        heading: 'We win best IT Startup Award',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 2007,
        icon: <FaToolbox />,
        heading: 'Starting Plugin Business Journey',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2008,
        icon: <FaWordpress />,
        heading: 'Started WordPress Solution Service',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 2010,
        icon: <BsTrophy />,
        heading: 'Best IT Compnay of 2010',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 2015,
        icon: <FaRegBuilding />,
        heading: 'Starting Our Conystruction Journey',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 2020,
        icon: <FaDollarSign />,
        heading: 'Our industry business started',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        transform: '',
    },
];

export default timeLineData;
