import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/home3/service1.jpg';
import thumb2 from '../../assets/img/home3/service2.jpg';
import thumb3 from '../../assets/img/home3/service3.jpg';

const servicesThreeData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '01',
        heading: 'Metal Forming',
        text: 'Enim ut tellus elementum sagittis vitae et leo id uisu ut. Amet dictum sit amet justo donec eni um diames vulputate. Arcu felis bibendum',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        index: '02',
        heading: 'Our Visions',
        text: 'Enim ut tellus elementum sagittis vitae et leo id uisu ut. Amet dictum sit amet justo donec eni um diames vulputate. Arcu felis bibendum',
    },
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '03',
        heading: 'Work in More Than 5k',
        text: 'Enim ut tellus elementum sagittis vitae et leo id uisu ut. Amet dictum sit amet justo donec eni um diames vulputate. Arcu felis bibendum',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        index: '04',
        heading: 'Our History',
        text: 'Enim ut tellus elementum sagittis vitae et leo id uisu ut. Amet dictum sit amet justo donec eni um diames vulputate. Arcu felis bibendum',
    },
];

export default servicesThreeData;
