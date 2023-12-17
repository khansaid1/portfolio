import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

// images imports
import journal from '../../public/images/admindashboard.png'
import pubplusmntr from '../../public/images/netflix.png'
import pub from '../../public/images/yums.png'
import sys from '../../public/images/calculator.png'
import cases from '../../public/images/weatherapp.png'
import casprm from '../../public/images/crudoperation.png'
import scondlast from '../../public/images/aiproject.JPG'
import last from '../../public/images/last.jpg'
import { motion } from 'framer-motion'

const FramerImage= motion(Image);

const FeaturedServices= ({img, title,type, summary, price})=>{
  return (
    <article className='relative flex items-center justify-between w-full p-6 border border-solid shadow-2xl rounded-br-2xl rounded-3xl dark:border-light border-dark bg-light dark:bg-dark dark:text-light lg:flex-col lg:p-5 xs:rounded-2xl xs:rounded-br-3xl xs:p-3 '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      '/>
      <div className='w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full'>
        <FramerImage 
        whileHover={{
          scale:1.05
        }}
        transition={{
          duration:0.2
        }}
        src={img} 
        alt='title' 
        className='w-full h-auto'
        priority
        sizes='(max-width:768px) 100vw,
        (max-width:1200px) 50vw,
        50vw'
        />
      </div>

      <div className='flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6'>

        <span className='text-2xl font-medium text-primary xs:text-base'>{type}</span>

        <h1 className='w-full my-2 text-4xl font-bold text-left sm:text-sm'>{title}</h1>

        <div className='flex flex-row flex-wrap text-lg font-semibold cursor-pointer'>
          <span className='underline underline-offset-2'>Tags:</span> &nbsp;
          <h2 className='text-lg font-semibold'>{price}</h2> &nbsp;- &nbsp;
        </div>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

      </div>

    </article>
  )
}

const ServiceNormal=({img, title, price})=>{
  return(
    <article className='relative flex flex-col items-center justify-center w-full p-3 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-2 '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'/>
      <div className='w-full overflow-hidden rounded-lg cursor-pointer '>
      <FramerImage 
        whileHover={{
          scale:1.05
        }}
        transition={{
          duration:0.2
        }} 
        src={img} 
        alt='title' 
            className='w-full h-auto'/>
      </div>

      <div className='flex flex-col items-start justify-between w-full mt-4'>

        <h1 className='w-full my-2 text-3xl font-bold text-left lg:text-2xl'>{title}</h1>

        <div className='flex flex-row text-lg font-semibold cursor-pointer'>
          <span className='underline underline-offset-2'>Tags:</span> &nbsp;- &nbsp;
          <h2 className='text-lg font-semibold'>{price}</h2>
        </div>

      </div>
    </article>
  )
}

const services = () => {
  return (
    <>
        <Head>
            <title>Nexus MRG | Services</title>
            <meta name="description"/>
        </Head>
        
        <TransitionEffect/>

        <main className='flex flex-col items-center justify-center w-full mb-16 dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="My projects" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>

                  <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-10 '>

                    <div className='col-span-12'>
                      <FeaturedServices 
                      type="Featured Service"
                      title="Reactjs Dashboard Application"
                      summary=" Developed an interactive dashboard utilizing React.js and Bootstrap for a visually appealing front end. Employed CSS3 for seamless styling, integrated RESTful APIs for dynamic data retrieval, resulting in a responsive and user-friendly web application"
                       price="Reactjs, Bootstrap, CSS3, RESTful API's"
                       img={journal}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                      <ServiceNormal
                      img={pubplusmntr}
                      price="Reactjs,"
                      title="Netflix"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={pub}
                      price="Reactjs, tailwind, Apis, CSS3"
                      title="Yums Eat"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={cases}
                      price="HTML/CSS & JS"
                      title="Weather App"
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={sys}
                      price="React.js bootstrap"
                      title="Calculator App"
                      />
                    </div>

                    <div className='col-span-12'>
                      <FeaturedServices 
                        // type="Prom"
                        title="CRUD OPERATION"
                        summary="In React, I led the implementation of CRUD operations, seamlessly enabling users to create, read, update, and delete data. Leveraging the capabilities of React.js, I focused on optimizing the user experience through efficient data manipulation. This experience significantly enhanced my proficiency in building dynamic and interactive React applications."
                        price="React.js, Bootstrap, APIs"
                        img={casprm}
                      />
                    </div>

                     <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={scondlast}
                      price="React.js, Tailwind,  CSS"
                      title="React AI project"
                      />
                    </div> 
{/* 
                    <div className='col-span-6 sm:col-span-12'>
                    <ServiceNormal
                      img={last}
                      price="150$"
                      title="Systematic Review No Publication-Only Mentoring"
                      />
                    </div> */}

                  </div>

                </Layout>
        </main>

    </>
  )
}

export default services