import React from "react";
import { useNavigate } from 'react-router-dom';
import Help from '../assets/Help.png';
import HelpFooter from '../assets/HelpFooter.png';
import HelpCards from '../components/HelpCards';

const HelpAndSupport = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="relative mb-20">
       <img src={Help} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 object-cover" />
       <div className="absolute inset-0 flex flex-col justify-center items-center">
         <div className="max-w-3xl mx-auto text-center">
           <h1 className="text-3xl lg:text-5xl font-bold ">
           Чем мы можем вам помочь?
           </h1>
         </div>
       </div>
     </div>
      <HelpCards />
      <div className="relative">
        <img src={HelpFooter} alt="Help" className="w-full h-auto lg:h-96 h-108 mb-8 mt-20 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold ">
            Всё ещё не нашли, что нужно?
            </h1>
            <button className="bg-[#ff0000] text-white py-2 px-4 rounded mt-10 mb-4" onClick={() => navigate("/Contact")}>CONTACT SUPPORT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
