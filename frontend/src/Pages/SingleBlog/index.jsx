import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleBlog, reset } from '../../features/blog/blogSlice';
import { Helmet } from 'react-helmet-async';
import RenderText from '../../components/RenderText';
import { toast } from 'react-toastify';

const SingleBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const [initial, setInitial] = useState(true);
  const [countdown, setCountdown] = useState(null);

  const { isSingleBlog, blog, isError, isLoading, message } = useSelector((state) => state.blog);

  useEffect(() => {
    if (initial) {
      setInitial(false);
      dispatch(getSingleBlog(id));
    } else if (isError) {
      toast.error(message);
      dispatch(reset());
      setCountdown(5);
    } else if (isSingleBlog) {
      dispatch(reset());
    }
  }, [initial, dispatch, id, isError, isSingleBlog, message, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSingleBlog && countdown > 1) {
        setCountdown(countdown - 1);
      } else if (!isSingleBlog && countdown === 1) {
        clearInterval(interval);
        navigate('/blog');
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, navigate, isSingleBlog]);


  return (
    <div className='h-full'>
      <Helmet>
        <title>BeeWell - {blog ? blog?.title : ''}</title>
        <link rel='canonical' href='' />
      </Helmet>
      <div className='max-w-7xl mx-auto px-2 min-h-[250px] flex'>
        {countdown && (
          <div className='flex-1 flex justify-center items-center'>
            Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
          </div>
        )}
        {isLoading && (
          <p className='flex-1 flex justify-center items-center'>
            Please 🐝 patient! Time is honey.
          </p>
        )}
        {blog?.title && (
          <div className="flex flex-col gap-5 py-5">
            <h1 className='text-center py-5 font-bold text-lg md:text-2xl lg:text-3xl'>{blog?.title}</h1>
            <div className="flex justify-center px-3 md:px-7 xl:px-10 py-3">
              <img src={blog?.source} className='w-full h-auto' alt='source' />
            </div>
            <div className="px-1">
            <RenderText htmlContent={blog?.description ? blog.description : ''} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
