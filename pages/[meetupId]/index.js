// domain/meetupId

import MeetupDetail from '../../components/meetups/MeetupDetails';
import { MongoClient, ObjectId } from 'mongodb';

const MeetupDetails = (props) => {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            discription={props.meetupData.discription}
        />
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://hr:qkyHMpA2siN7q9hr@cluster0.lwic7.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://hr:qkyHMpA2siN7q9hr@cluster0.lwic7.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const seletctedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

    client.close();

    return {
        props: {
            meetupData: {
                id: seletctedMeetup._id.toString(),
                title: seletctedMeetup.title,
                address: seletctedMeetup.address,
                image: seletctedMeetup.image,
                description: seletctedMeetup.description,
            }
        },
    };
}

export default MeetupDetails;
