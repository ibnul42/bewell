import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from '../../features/blog/blogSlice';
import RenderText from '../../components/RenderText';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  // Function to convert ISO8601 date to "day month year" format
  const formatCreatedAt = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className='h-full'>
      <Helmet>
        <title>Blog</title>
        <link rel='canonical' href='' />
      </Helmet>
      <div className='max-w-7xl mx-auto px-2'>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.title}
              className='grid grid-cols-1 md:grid-cols-2 my-5 gap-10 py-3 px-5 border border-[#90C3BB] rounded-md mx-2 shadow-[0_4px_3px_3px_rgba(0,0,0,0.1)]'
            >
              <div className='border-4 border-[#90C3BB] rounded-md overflow-hidden shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] flex justify-center items-center'>
                <img
                  src={blog.source}
                  alt={blog.title}
                  className='w-full aspect-video object-cover object-center'
                />
              </div>
              <div className='space-y-2 h-auto flex flex-col justify-between'>
                <p className='font-bold text-xs'>{formatCreatedAt(blog.createdAt)}</p>
                <p className='text-lg md:text-2xl font-bold'>{blog.title}</p>
                <p className='line-clamp-4 h-[100px] overflow-hidden'>
                  {<RenderText htmlContent={blog.description} />}
                  {/* {blog.description} */}
                </p>
                {/* <p className='font-bold'>by Beewell</p> */}
                <div className="flex justify-end">
                  <Link to={`/blog/${blog._id}`} className='border border-[#90C3BB] px-3 py-2 rounded hover:bg-[#90C3BB] hover:text-white'>See Details ...</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='py-10 text-center'>
            Coming Soon! Please 🐝 patient! Time is honey.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
