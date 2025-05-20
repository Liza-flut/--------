import React from 'react';
import { useNavigate } from 'react-router-dom';

const BacktheProject = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col md:flex-row items-center justify-center my-20 px-1 bg-white dark:bg-[#1c1c24]">
            <div className="w-full md:w-1/4 flex md:mb-0 justify-center">
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
                <div className="text-center md:text-left">
                    <a href="#" className="text-3xl font-semibold mb-8">
                        Поддержи проект — отправляйся в путь
                    </a>
                </div>
                <p className="text-justify text-md pt-8 px-2">
                Crowdfunding — это ваше место для умных инноваций в технологиях, дизайне и многом другом, часто с особыми бонусами и ценами для первых участников. Поддерживайте кампанию, делитесь идеями и отзывами с командой проекта — и получайте награды за появление новых продуктов.
                </p>
                <div className='hover:text-[#808191] text-md block text-center mt-4 md:text-left cursor-pointer'>
                    <a href='/WhatWeDo'>УЗНАТЬ О КРАУДФАНДИНГЕ</a>
                </div>
            </div>
            <div className="w-full md:w-1/4 flex lg:justify-end md:justify-end justify-center mt-6 md:mt-0">
            </div>
        </div>
    )
}

export default BacktheProject;
