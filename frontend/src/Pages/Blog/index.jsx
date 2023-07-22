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
                <p className=''>No content right now, please come later</p>
            </div>
        </div>
    )
}

export default BlogPage