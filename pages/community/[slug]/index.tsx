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
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    const [community, setCommunity] = useState<any>(null);
    const realSlug = props.slug;
    console.log(realSlug)

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
        <main className='overflow-x-hidden'>
            <div className="min-h-screen bg-white overflow-x-hidden">
            <div className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 pt-10 pl-10 pr-10 pb-10 md:pt-20  lg:pt-20 lg:pl-32 lg:pr-32">
                {isMobile ? (
                    <img className="w-5/6 absolute justify-center" src='/community/card-mobile.png' alt="banner" />
                ) : (
                    <img className="lg:w-5/6  absolute justify-center" src='/community/card.png' alt="banner" />

                )}
            {community && <CommunityProfilePage community={community} />}

            </div>
            </div>
            {/* {community && <CommunityProfilePage community={community} />} */}
        </main>
    );
}