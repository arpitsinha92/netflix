import React from 'react'
import Headers from './Header';
const Login = () => {
  return (
    <div>
        <Headers />
        <div className="h-screen w-full">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_small.jpg 959w"
            alt=""
            aria-hidden="true"
            className="w-full h-screen object-cover"
          />
        </div>
        <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
            <input type="text" placeholder='Email Address' className='p-2 m-2 rounded-md outline-none' />
            <input type="password" placeholder='Password' className='p-2 m-2 rounded-md outline-none' />  
            <button className='p-4 m-4'>Sign In</button>  
        </form>
    </div>
  )
}

export default Login
