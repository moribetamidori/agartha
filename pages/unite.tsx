import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link'
import { useAuth } from '../lib/authContext'
import { useRouter } from 'next/router';

import ParticlesCustom from '../components/layout/particles'

export default function Home(): any {
  const { user} = useAuth();
  const router = useRouter();
  const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

  const enterUnite = async() => {
    router.push('/unite');
  };

  const enterEarth = async() => {
    router.push('/earth');
  };

  const enterPersonal = async() => {
    router.push('/personal');
  };

  const enterPlayful= async() => {
    router.push('/playful');
  };

  const enterTech= async() => {
    router.push('/tech');
  };
  return (
    <>
      <Head>
        <title>Home</title>
        
      </Head>
      <ParticlesCustom />

      <main className=" min-h-screen mx-auto bg-white">
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
                <div className="flex justify-center pt-4 lg:gap-x-20 md:pt-10 lg:pt-14 sm:gap-x-4">
                  <a style={{ cursor: "pointer" }}>
                    <img onClick={enterUnite}  className="shrink-0 h-16 w-16 hover:scale-125" src='/balls/unite.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onClick={enterEarth} className="shrink-0 h-16 w-16 hover:scale-125" src='/balls/earth.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onClick={enterPersonal} className="shrink-0 h-16 w-16 hover:scale-125" src='/balls/personal.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onClick={enterPlayful} className="shrink-0 h-16 w-16 hover:scale-125" src='/balls/playful.png'  />
                  </a>
                  <a style={{ cursor: "pointer" }}>
                  <img onClick={enterTech} className="shrink-0 h-16 w-16 hover:scale-125" src='/balls/technical.png'  />
                  </a>
                </div>

                <div className=" pt-6 flex gap-x-6 sm:mt-8 sm:flex  justify-center lg:gap-x-14 justify-center">
                  {!user && (<>
                  <div>
                    <Link href='/map'>
                    <a style={{ cursor: "pointer" }}>

                      <img className="h-10 sm:h-14 md:h-14 lg:h-14 " src='/buttons/explore.png'/>
                    </a>
                    </Link>
                  </div>
                  <div>
                    <a href='https://discord.gg/UAjzAx62Ug' target="_blank" rel="noreferrer">
                      <img className="h-10 sm:h-14 md:h-14 lg:h-14" src='/buttons/join.png'/>
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