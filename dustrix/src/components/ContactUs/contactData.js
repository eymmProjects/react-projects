import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email Address',
        text: 'Sent mail asap anytime',
        item1: 'info@example.com',
        item2: 'jobs@example.com',
    },

    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: 'call us asap anytime',
        item1: '098-098-098-09',
        item2: '+(098) 098-098-765',
    },

    {
        id: uuidv4(),
        icon: <FaMapMarkerAlt />,
        heading: 'Office Address',
        text: 'Sent mail asap anytime',
        item1: 'B2, Miranda City Tower',
        item2: 'New York, US',
    },
];

export default contactData;
