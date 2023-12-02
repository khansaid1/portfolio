import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion'
import LiIcon from './LiIcon'

const Details= ({title, description, price})=>{
    const ref= useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
        md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div
            initial={{
                y:50
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:0.5,
                type:"spring"
            }}
            >
                <h3 className='text-4xl font-bold capitalize sm:text-2xl xs:text-xl'>{title} &nbsp;</h3>
                <h4 className='text-xl font-semibold capitalize text-dark dark:text-light/75 xs:text-base'>{price}</h4>
                <p className='w-full font-medium md:text-sm'>{description}</p>
            </motion.div>
        </li>
    )
}

const Pricing = () => {

    const ref= useRef(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start center", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
            />

            <ul className='flex flex-col items-start justify-between w-full ml-4 xs:ml-2'>
                {/* <Details 
                    title="Publication Only" 
                    price="2" 
                    description={`
                    Welcome to our Publication Service! Are you looking for a reliable and professional
                    platform to publish your content? Look no further! Our Publication Service offers
                    you the opportunity to showcase your writing skills to a global audience.
                `}/> */}
                <Details 
                    title="worked with IOTICS " 
                    price="" 
                    description={`
     
                During my time at IOTIC, I led impactful projects that required a mix of technical expertise and creative problem-solve.


                 I utilized a versatile tech stack, including React.js for dynamic user interfaces, and maintained code integrity with GitHub.


                Within React.js, I developed modular components, overcoming challenges such as [specific challenges faced].


                 Collaboration through Figma ensured alignment with design vision, resulting in visually appealing and robust user interfaces.


                My time at IOTIC enriched my technical proficiency and collaborative skills. Contributing to impactful projects has been a defining chapter in my professional journey.
                    
                `}/>
               
               
            </ul>
        </div>
    </div>
  )
}

export default Pricing