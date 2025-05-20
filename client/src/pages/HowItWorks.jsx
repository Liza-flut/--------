import React from "react";
import { useNavigate } from 'react-router-dom';
import ReadyToGo from '../components/ReadyToGo';
import HowItWork from '../assets/HowItWork.jpg';
import WORLDWIDE from '../assets/WORLDWIDE.png';

const HowItWorks = () => {
    const navigate = useNavigate();
    return(
        <>
            <div className="px-4 sm:px-6 lg:px-8 pt-12">
                <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-1">Мечтай. Финансируй. Создавай. Отправляй.</h1>
                <h1 className="text-2xl lg:text-3xl font-semibold text-center">Мы помогаем на каждом этапе — от идеи до рынка.</h1>
            </div>

            <div className="relative mt-10">
                <img src={HowItWork} alt="Помощь" className="w-full h-auto lg:h-96 h-108 mb-2 object-cover rounded-[15px]" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-white ">
                            Как это работает?
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-5xl mx-auto mt-20">
                <img src={WORLDWIDE} alt="По всему миру" className="w-1/4 mb-4 md:mb-0" />
                <div className="text-center md:text-left md:pl-8">
                    <h2 className="text-xl font-bold pb-3 text-[#8c6dfd]">Гибкость и глобальный охват</h2>
                    <p className="text-3xl font-bold pb-3">Свобода привлекать финансирование на что угодно и из любой точки мира</p>
                </div>
            </div>
            <div className="text-center my-8 max-w-3xl mx-auto">
                <p className="text-justify text-lg pb-8">
                    Crowdfunding воплощает гибкость и глобальный охват, предоставляя создателям свободу привлекать средства на любой проект из любой точки мира. Независимо от того, запускаете ли вы локальную инициативу или ориентируетесь на международную аудиторию, наша платформа позволяет использовать силу краудфандинга без ограничений. Благодаря удобному доступу к разнообразной базе спонсоров и безграничному подходу к сбору средств, Crowdfunding помогает реализовать вашу идею на по-настоящему международном уровне, разрушая барьеры и открывая новые возможности для успеха.
                </p>
            </div>

            <div className="bg-white dark:bg-[#2c2f32] shadow-lg rounded-lg mb-20">
                <div className="px-4 sm:px-6 lg:px-48 py-12 ">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-1">Готовы начать?</h1>
                    <p className="text-center text-lg ">
                        Вы всего в одном шаге от того, чтобы начать свое предпринимательское путешествие на Crowdfunding. Вот, что делать дальше:
                    </p>
                </div>
                <ReadyToGo />
            </div>
        </>
    )
}

export default HowItWorks;
