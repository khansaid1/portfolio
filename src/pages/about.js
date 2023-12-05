import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import PPic from '../../public/images/profile/khanS.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import SmallServices from '@/components/SmallServices'
import Pricing from '@/components/Pricing'
import Education from '@/components/Education'

const AnimatedNumbers=({value})=>{

    const ref= useRef(null);
    const montionValue= useMotionValue(0);
    const springValue= useSpring(montionValue, {duration: 3000})
    const isInView= useInView(ref,{once:true});

    useEffect(()=>{
        if(isInView){
            montionValue.set(value);
        }
    },[isInView, value, montionValue]);

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title> Portfolio | About</title>
            <meta name="description"/>
        </Head>
        <TransitionEffect/>
        <main className='flex flex-col items-center justify-center w-full dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" 
                className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 md:self-center md:text-4xl'>About Me</h2>
                        <p className='font-medium'>
                       {` Hello there! I'm an aspiring front-end developer eager to contribute my skills and creativity to the ever-evolving world of web development. Here's a glimpse into what I bring to the table:
                        I've built a strong foundation in HTML and CSS, turning static designs into vibrant and user-friendly web interfaces. Ensuring clean and semantic code, I strive to create visually appealing layouts that resonate with users.`}
                        </p>
                        <p className='my-4 font-medium'>
                        {`I'm in the process of mastering responsive design techniques. While I'm navigating this learning curve, I'm dedicated to creating websites that adapt seamlessly to different screen sizes, ensuring a consistent experience for users across devices.
                        I'm eager to explore front-end frameworks like React, Nextjs, or Vue.js. While I'm in the early stages of incorporating these into my projects, I'm excited about the potential they offer for streamlined and feature-rich web development.`}
                        </p>
                        <p className='my-4 font-medium'>
                        {`As a junior developer, I understand the importance of collaboration. I'm enthusiastic about learning from experienced designers, developers, and mentors to enhance my skills and contribute effectively to team projects.
                        I thrive on challenges and approach problem-solving with a growth mindset. Every coding hurdle is an opportunity to learn and improve, and I'm excited about the journey of continuous growth in this dynamic field.`}
                        </p>
                        <p className='mt-4 font-medium'>
                        {`While I'm early in my career, I've already had the chance to work on e-commerce website. These experiences have allowed me to apply my skills, learn from real-world scenarios, and showcase my passion for crafting engaging user experiences.
                        I'm on the lookout for opportunities to contribute, learn, and grow as a front-end developer. Let's connect and explore the possibilities of creating impactful web solutions together!
                        Feel free to adapt this template to reflect your unique experiences, skills, and aspirations. The key is to convey your eagerness to learn, your current skill set, and your commitment to growth in the field.`}
                        </p>
                    </div>
                    <div className='relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image 
                        src={PPic} 
                        alt="Nexus" 
                        className="w-full h-auto rounded-2xl"
                        priority
                        sizes='(max-width:768px) 100vw,
                        (max-width:1200px) 50vw,
                        33vw'
                        />
                    </div>
                    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-5xl sm:text-4xl xd:text-3xl'>
                                <AnimatedNumbers value={20}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Completed Projects</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-5xl sm:text-4xl xd:text-3xl'>
                            <AnimatedNumbers value={25}/>+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Costumers</h2>
                        </div>
                    </div>
                </div>
                <SmallServices/>
                <Pricing/>
                <Education/>
            </Layout>
        </main>
   </>
  )
}

export default about