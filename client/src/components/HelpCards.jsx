import React from "react";
import { useNavigate } from 'react-router-dom';
import Backers from '../assets/Backers.png';
import Campaign from '../assets/Campaign.png';
import Payments from '../assets/Payments.png';
import TrustOperations from '../assets/TrustOperations.png';
import CampaignNextStep from '../assets/CampaignNextStep.png';
import Legal from '../assets/Legal.png';

const cardsData = [
    {
      image: Backers,
      name: "Инвесторы",
      description: "Узнайте, как оценивать и поддерживать краудфандинговые кампании, а также управлять своими заказами",
      link: "Посмотреть все",
      route: "/BackersDetail"
    },
    {
      image: Campaign,
      name: "Кампании",
      description: "Узнайте, как планировать, создавать и управлять своей краудфандинговой кампанией",
      link: "Посмотреть все",
      route: "/EducationCenter"
    },
    {
      image: Payments,
      name: "Платежи",
      description: "Узнайте, как подключить банковский счет и получать средства с вашей краудфандинговой кампании",
      link: "Посмотреть все",
      route: "/payments"
    },
    {
      image: TrustOperations,
      name: "Операции доверия",
      description: "Поймите политику Crowdfunding и как наша команда операций доверия защищает клиентов",
      link: "Посмотреть все",
      route: "/TrustOperationsDetail"
    },
    {
      image: CampaignNextStep,
      name: "Следующие шаги кампании",
      description: "Узнайте о Crowdfunding и других последующих шагах для вашей кампании",
      link: "Посмотреть все",
      route: "/CampaignNextStep"
    },
    {
      image: Legal,
      name: "Юридическая информация",
      description: "Читайте о юридической политике и процессах Crowdfunding",
      link: "Посмотреть все",
      route: "/LegalDetail"
    },
  ];

const Card = ({ image, name, description, link, route  }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xs rounded-[15px] overflow-hidden shadow-lg bg-white dark:bg-[#1c1c24]  m-4 hover:-translate-y-1" onClick={() => navigate(route)}>
        <a href="">
        <img className="mx-auto w-24" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        <p className="text-sm text-center">{description}</p>
        <p className="text-[#8c6dfd] text-center">{link}</p>
      </div>
      </a>
    </div>
  );
};

const HelpCards = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center ">
          {cardsData.map((card) => (
            <Card
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

export default HelpCards;
