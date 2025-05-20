//изменила боковую панель
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navlinks } from '../constants';
import { HiMenu } from 'react-icons/hi'; 
import { IoClose } from 'react-icons/io5'; 

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Кнопка гамбургера */}
      <button 
        onClick={toggleSidebar} 
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-200 hover:bg-gray-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Панель */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg rounded-r-lg
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ width: '280px', zIndex: 40 }}
      >

        <nav className="flex flex-col p-4 space-y-4 pt-16">
          {navlinks.map((link) => {
            const IconComponent = link.iconLight;
            return (
              <div
                key={link.name}
                className={`flex items-center gap-4 p-2 rounded-md cursor-pointer
                  ${isActive === link.name ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}
                `}
                onClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                    setIsOpen(false); // Закрыть панель при выборе
                  }
                }}
              >
                <IconComponent size={24} />
                <span>{link.name}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Полупрозрачный фон при открытой панели */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30 z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
