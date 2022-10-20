import { getCommunityWithSlug, communityToJSON, memberToJSON, postToJSON } from '../../../lib/firebaseConfig/init';
import {firestore} from '../../../lib/firebaseConfig/init';
import CommunityProfilePage from '../../../components/communities/CommunityProfilePage';
import { useEffect, useState } from 'react';
import { query, doc, getDoc, collection, getDocs, where, collectionGroup} from 'firebase/firestore';

export async function getServerSideProps(context:any){
    const {query:qr} = context;
    const {slug} = qr;
    return {
        props: {slug}
    }
}



export default function Community(props:any) {
    const [community, setCommunity] = useState<any>(null);
    const realSlug = props.slug;
    console.log(realSlug)
    //get community document 

    useEffect(() => {
        const getCommunityData = async () => {
            const communityRef = doc(firestore, 'communities', realSlug);
            const communityDoc = await getDoc(communityRef);
            const communityData = communityDoc.data();
            console.log("communityData is", communityData);
            setCommunity(communityData);
        }
        getCommunityData();
    }, []);

    return (
        <main>
            <div className="container pt-10 pl-10 pr-10 md:pt-20 md:pt-20 md:pt-20 lg:pt-20 lg:pl-32 lg:pr-32">
            <img src='/community/card.png' alt="banner" />
            </div>

            {community && <CommunityProfilePage community={community} />}
            {/* <CommunityProfilePage community={community}/> */}

        </main>
    );
}