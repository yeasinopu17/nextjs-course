//home
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
        address: '37/1 Khilgaon, Dhaka.',
        description: 'This is a first meetup',
    },
    {
        id: 'm2',
        title: '2nd Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
        address: '37/1 Khilgaon, Dhaka.',
        description: 'This is a first meetup',
    },
];

function Homepage(props) {
    return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 600
    };
}

export default Homepage;
