import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const ImageGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto text-center py-10 pt-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Найдите это первым на Crowdfunding.</h1>
        <p>Crowdfunding — место, где первопроходцы и искатели инноваций находят живые и оригинальные технологии до того, как они станут популярными.</p>
      </div>
      <div className="container mx-auto pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/TopFinds")}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-red-700 to-red-300 hover:from-red-800 hover:to-red-400 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>10 крутых и умных находок</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginLeft: '4px', color: 'white' }} />
            </div>
          </div>

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/Competition")}
          >
            <div className='absolute inset-0 bg-gradient-to-l from-red-700 to-red-300 hover:from-red-800 hover:to-red-400 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>Некоммерческие проекты</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginLeft: '4px', color: 'white' }} />
            </div>
          </div>

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/WhatWeDo")}
          >
            <div className='absolute inset-0 bg-gradient-to-l from-red-300 to-red-700 hover:from-red-400 hover:to-red-800 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>Что мы делаем</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginLeft: '4px', color: 'white' }} />
            </div>
          </div>

          <div 
            className="relative overflow-hidden flex items-center justify-center bg-white dark:bg-[#1c1c24] rounded-lg shadow-xl cursor-pointer h-64" 
            onClick={() => navigate("/Memorial")}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-red-300 to-red-700 hover:from-red-400 hover:to-red-800 flex items-center justify-center'>
              <p className='font-semibold text-4xl text-white'>Мемориал</p>
              <HiArrowRight style={{ transform: 'rotate(-45deg)', marginLeft: '4px', color: 'white' }} />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
