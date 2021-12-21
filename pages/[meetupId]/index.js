// domain/meetupId

import MeetupDetail from '../../components/meetups/MeetupDetails';

const MeetupDetails = (props) => {
    return (
        <MeetupDetail
            image={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg'
            }
            title={'this is title'}
            address={'37/1 Khilgaon, Dhaka'}
            discription={'Degree finds ere scape hellas from name, and all to.'}
        />
    );
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
                title: 'this is title',
                address: '37/1 Khilgaon 1219, Dhaka',
                discription: 'Degree finds ere scape hellas from name, and all to.',
            },
        },
    };
}

export default MeetupDetails;
