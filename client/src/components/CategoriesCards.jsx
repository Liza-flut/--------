//поменять картинки на свои
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bag from '../assets/bag.png';
import fitness from '../assets/fitness.png';
import audio from '../assets/audio.png';
import film from '../assets/film.png';
import Education from '../assets/Education.png';
import sport from '../assets/sport.png';
import creative from '../assets/creative.png';
import prototype from '../assets/prototype.png';
import fulfillment from '../assets/fulfillment.png';

const cardsData = [
    {
      image: Education,
      name: "Образование",
      description: "Проекты, ориентированные на обучение и образование.",
      link: "Посмотреть все",
      route: "/EducationCampaigns",
    },
    {
      image: fitness,
      name: "Здоровье и фитнес",
      description: "Проекты, направленные на улучшение здоровья и физической формы.",
      link: "Посмотреть все",
      route: "/HealthAndFitness",
    },
    {
      image: sport,
      name: "Спорт",
      description: "Проекты, связанные с инновационными спортивными технологиями.",
      link: "Посмотреть все",
      route: "/Technology",
    },
    {
      image: film,
      name: "Социальное воздействие",
      description: "Проекты с положительным социальным эффектом.",
      link: "Посмотреть все",
      route: "/SocialImpact",
    },
    {
      image: audio,
      name: "Искусство и культура",
      description: "Творческие и художественные проекты.",
      link: "Посмотреть все",
      route: "/ArtsAndCulture",
    },
    {
      image: bag,
      name: "Путешествия и активный отдых",
      description: "Проекты, связанные с путешествиями и отдыхом.",
      link: "Посмотреть все",
      route: "/TravelAndOutdoors",
    },
    {
      image: creative,
      name: "Творческие услуги",
      description: "Проекты, предлагающие инновационные и художественные услуги.",
      link: "Посмотреть все",
      route: "/CreativeServices",
    },
    {
      image: fulfillment,
      name: "Обеспечение",
      description: "Проекты, посвящённые предоставлению основных услуг.",
      link: "Посмотреть все",
      route: "/Fulfillment",
    },
    {
      image: prototype,
      name: "Прототипирование и производство",
      description: "Проекты, сосредоточенные на прототипах и продуктах.",
      link: "Посмотреть все",
      route: "/PrototypingandProduction",
    },
];

const Card = ({ image, name, description, link, route }) => {
  const navigate = useNavigate(); 
  
  return (
    <div
      className="w-72 h-72 max-w-xs rounded-[15px] overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24] m-4 hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(route)} 
    >
      <img
        className="w-full h-32 object-contain mx-auto"
        src={image}
        alt={name}
      />
      <div className="px-6 py-4 text-center">
        <div className="font-semibold text-xl mb-2">{name}</div>
        <p className="text-md">{description}</p>
        <p className="text-[#8c6dfd] pt-2">{link}</p>
      </div>
    </div>
  );
};

const CategoriesCards = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            name={card.name}
            description={card.description}
            link={card.link}
            route={card.route}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCards;
