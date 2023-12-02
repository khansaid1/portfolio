import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base'>
        <Layout className='flex items-center justify-between py-6 xl:py-3 lg:flex-col lg:py-4 md:py-3 sm:py-3'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div>
                My Email <Link href="mailto:khansaid2223@gmail.com" className='underline underline-offset-2 text-emerald-500'>khansaid2223@gmail.com</Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer