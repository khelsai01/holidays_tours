"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TourCard from '@/components/TourCard';
// import URL  from '../lib/utils';


interface Tour {
  _id: string;
  title: string;
  place: string;
  price: number;
  images: string[];
}

const ToursList: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    fetch(`https://holidays-backend.onrender.com/api/tours`)
      .then((res) => res.json())
      .then((data) => setTours(data.tours))
      .catch((error) => console.error('Error fetching tours:', error));
  }, []);

    console.log(tours)
  return (
    <div className=" w-full mx-auto px-4 py-8">
      <div className='flex flex-col items-center'>
        <h1 className="text-2xl sm:text-4xl text-gray-400 font-bold text-center ">Experience Our Unique Packages</h1>
        <p className='text-gray-400 my-6 '>Reflecting the warm and welcomeiing nature of people</p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-auto">
      {tours.length > 0 ? (
          tours.map((tour) => (
            <Link key={tour._id} href={`/tours/${tour._id}`} legacyBehavior>
              <div className="cursor-pointer">
                <TourCard tour={tour} />
              </div>
            </Link>
          ))
        ) : (
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-3xl text-pink-400 hover:scale-105'>..No tours available..</p>
        )}
      </div>
    </div>
  );
};

export default ToursList;
