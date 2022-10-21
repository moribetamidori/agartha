import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { useAuth } from '../lib/authContext'
import { useRouter } from 'next/router';


export default function Home(): any {
  const { user} = useAuth();
  const router = useRouter();
  const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

  const enterUnite = async() => {
    await sleep(500);
    router.push('/unite');
  };

  const enterEarth = async() => {
    await sleep(500);
    router.push('/earth');
  };

  const enterPersonal = async() => {
    await sleep(500);
    router.push('/personal');
  };

  const enterPlayful= async() => {
    await sleep(500);
    router.push('/playful');
  };

  const enterTech= async() => {
    await sleep(500);
    router.push('/tech');
  };
  return (
    <>
      <Head>
        <title>Home</title>
        
      </Head>
      {/* <div className="bg-[#FFF8F1]"> */}

      <main className=" min-h-screen  bg-white">
              <div className="sm:text-center lg:text-center">
                <div className="px-4  pt-32 ">
                    <div className="pl-48 items-left pr-24">
                        <h1 className="text-5xl pb-4 pt-4 font-mono tracking-wider font-medium text-[#0000FF]  text-left">
                        <span className="block xl:inline pb-4">Community Centered</span>
                        </h1>
                        <div className='text-left font-mono text-[#0000FF] leading-loose pr-10'>
                        <p >We believe in the power of networks, and humans are born to support and help each others. 
                        </p>
                        <p>We’re rallying a community of freedom seekers, critical thinkers and regenerative leaders to meet, support and learn from each others, to team up and explore solutions together.
                        </p>
                        <p>
                        {"We offer cohorts and host events quite often, you can also just join our Discord to chat with us ;)"}
                        </p>
                </div>
                </div>
                <div className="flex justify-center gap-x-20 pt-14">
                  <a style={{ cursor: "pointer" }}>
                    <img onMouseEnter={enterUnite}  className="h-16 w-16 hover:scale-125" src='/balls/unite.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onMouseEnter={enterEarth} className="h-16 w-16 hover:scale-125" src='/balls/earth.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onMouseEnter={enterPersonal} className="h-16 w-16 hover:scale-125" src='/balls/personal.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onMouseEnter={enterPlayful} className="h-16 w-16 hover:scale-125" src='/balls/playful.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onMouseEnter={enterTech} className="h-16 w-16 hover:scale-125" src='/balls/technical.png'  />
                  </a>
                </div>

                <div className=" pt-6 sm:mt-8 sm:flex justify-center gap-x-14 sm:justify-center lg:justify-center">
                  {!user && (<>
                  <div>
                    <Link href='/map'>
                    <a style={{ cursor: "pointer" }}>

                      <img className="h-14 " src='/buttons/explore.png'/>
                    </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href='https://discord.gg/UAjzAx62Ug' target="_blank" rel="noreferrer">
                      <img className="h-14" src='/buttons/join.png'/>
                    </a>
                  </div>
                  </>
                  )}
                </div>
                </div>
              </div>
          </main>
    </>
  )
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//       <FrontPage>{page}</FrontPage>
//       // <Layout>{page}</Layout>

//   )
// }