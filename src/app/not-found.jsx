import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='text-red-600 text-5xl flex justify-center mt-[400] font-bold w-[1600] mx-auto'>
      <h2>This Page is not found!</h2>
      <Link href={'/'}><button className='btn btn-primary'>Back to Home</button></Link>
    </div>
  );
};

export default NotFoundPage;