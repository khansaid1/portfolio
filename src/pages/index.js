import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import JoinUs from '@/components/JoinUs';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description"/>
      </Head>
      <TransitionEffect/>
      <main className='flex items-center w-full min-h-screen text-dark dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} 
              alt="Nexus Medical Research Group" 
              className="w-full h-auto lg:hidden md:inline-block md:w-full "
              priority
              sizes='(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw'
              />
            </div>
            <div className='flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center'>
              <AnimatedText text="Turning Vision Into Reality With Code and Design." 
              className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='self-start my-4 text-base font-medium md:text-sm sm:text-xs'>
              As Jr Front-End developer, I am dedicated to turning ideas into innovative web application.
              Explore my latest projects, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="mailto:khansaid2223@gmail.com" 
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                hover:text-dark border-2 border-solid border-transparent hover:border-dark
                 dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                 md:p-2 md:px-4 md:text-base'
                target={"_blank"}>Resume</Link>
                <Link href="tel:+923467575455" target={"_blank"} 
                className='ml-4 text-lg font-medium underline capitalize underline-offset-4 text-dark dark:text-light md:text-base'>
                 +92 346 7575455
                  </Link>
              </div>
            </div>
          </div>
        </Layout>
        <JoinUs/>
        <div className='absolute inline-block w-24 right-8 bottom-8 lg:hidden'>
          <Image src={lightBulb} className='w-full h-auto' alt='Nexus'/>
        </div>
      </main>
    </>
  )
}
