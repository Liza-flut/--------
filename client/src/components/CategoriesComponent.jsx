import React from 'react';
import CategoriesCards from './CategoriesCards'

const CategoriesComponent = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center px-4 pb-10">
      <h1 className="text-3xl font-semibold text-center mb-4">Какие категории вас интересуют?</h1>
      <p className="text-center mb-4">Откройте для себя проекты специально для вас и получайте отличные рекомендации, выбирая свои интересы.</p>
      <p className="text-center mb-5">Изучите наши лучшие категории</p>
      <CategoriesCards />
    </div>
    </>
  );
};

export default CategoriesComponent;
