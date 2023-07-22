import React from 'react'
import { Helmet } from 'react-helmet-async'

const BlogPage = () => {
    return (
        <div className='flex-1'>
            <Helmet>
                <title>Blog</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className=" w-full h-full flex justify-center items-center">
                <p>No content right now, please come later</p>
            </div>
        </div>
    )
}

export default BlogPage