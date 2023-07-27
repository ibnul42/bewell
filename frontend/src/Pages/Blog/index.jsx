import React from 'react'
import { Helmet } from 'react-helmet-async'

const BlogPage = () => {
    return (
        <div className='h-full'>
            <Helmet>
                <title>Blog</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className=" w-full h-full flex justify-center items-center">
                <p className='py-10'>Coming Soon! Please 🐝 patient! Time is honey.</p>
            </div>
        </div>
    )
}

export default BlogPage