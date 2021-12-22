//home
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';
import React from 'react';

function Homepage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="This is demo meetups app with react and next js" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    );
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
    const client = await MongoClient.connect(
        'mongodb+srv://hr:qkyHMpA2siN7q9hr@cluster0.lwic7.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 600,
    };
}

export default Homepage;
