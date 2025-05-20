import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Explore from "../assets/Explore.png";
import inspired from "../assets/inspired.png";
import perk from "../assets/perk.png";
import Journey from "../assets/Journey.png";

const WhatWeDo = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Подписка успешна");
        setEmail("");
      } else {
        alert("Ошибка при подписке");
      }
    } catch (error) {
      console.error("Ошибка при подписке:", error);
      alert("Ошибка при подписке");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-5xl lg:text-7xl font-semibold text-center mt-20 mb-10">
          Чем мы занимаемся?
        </h1>

        {/* Раздел "Финансируйте следующий большой проект" */}
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold pb-3">Финансируйте следующий большой проект</h2>
          <p className="text-justify">
            Краудфандинговые кампании Crowdfunding — это место, где новые и
            прорывные продукты начинают свой путь, иногда задолго до того,
            как они становятся доступны массовому рынку. Каждую неделю запускаются
            тысячи кампаний, предлагающих отличные технологии, дизайн и многое другое —
            часто с ограниченными по времени бонусами и специальными ценами для
            первых участников. Пока это не повсюду, это уже на Crowdfunding.
          </p>
        </div>

        {/* Раздел "Присоединяйтесь к путешествию от идеи до рынка" */}
        <div className="text-center my-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold pb-10">
            Присоединяйтесь к путешествию от идеи до рынка
          </h2>
          <div className="flex justify-center ">
            <img
              src={Journey}
              alt="Путешествие"
              className="object-contain h-auto max-w-full"
            />
          </div>
          <p className="text-justify pt-8">
            С Crowdfunding у вас есть возможность поддержать предпринимателей
            и новые технологии с самых ранних этапов разработки. Обязательно
            внимательно оценивайте каждую кампанию и вносите вклад в пределах
            ваших возможностей на случай, если команда не сможет выполнить проект
            согласно плану.
          </p>
          <p className="text-justify">
            Просматривайте кампании, читайте истории от самих предпринимателей,
            оценивайте этап разработки и возможные риски производства —
            и финансируйте проекты, которым хотите помочь добиться успеха.
          </p>
          <button
            className="bg-[#ff0000] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded mt-4 mb-4 text-white"
            onClick={() => navigate("/ExploreProjects")}
          >
            Изучить проекты
          </button>
          <p className="text-center">
            Или{" "}
            <span className="text-[#808191] cursor-pointer">
              <a href="/Crowdfunding">узнайте больше</a>
            </span>{" "}
            о краудфандинге и вашей роли как инвестора.
          </p>
        </div>

        {/* Раздел "Отличные находки, доставляемые ежедневно" */}
        <div className="text-center my-8 mx-auto bg-white dark:bg-[#1c1c24] py-20 w-full">
          <h2 className="text-2xl font-bold pb-3">
            Отличные находки, доставляемые ежедневно
          </h2>
          <div className="max-w-3xl lg:mx-auto px-4">
            <p>
              Мы отбираем лучшее и самое яркое из Crowdfunding в нашей рассылке.
              Узнавайте о новейших технологиях, дизайне, кино и многом другом —
              еще до того, как это станет популярным.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center my-4">
            <input
              type="email"
              required
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Введите ваш email"
              className="outline-none px-4 py-2 rounded-l mb-2 md:mb-0 md:mr-2 bg-[#dad6d6] dark:bg-[#0e0e11]"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#ff0000] hover:bg-[#9691aa] text-white font-semibold py-2 px-4 rounded-r ml-0 md:ml-2"
            >
              Подписаться
            </button>
            </div>
              <label className="flex flex-col md:flex-row items-center justify-center px-4">
                <input type="checkbox" className="form-checkbox mr-2" />
                <span className="mb-2 md:mb-0 justify-center ">
                  Я согласен с{" "}
                  <span className="text-red-600 cursor-pointer">
                    <a href="/TermsOfUse">Условиями использования</a>
                  </span>{" "}
                  и прочитал(а) и понял(а){" "}
                  <span className="text-red-600 cursor-pointer">
                    <a href="/PrivacyPolicy">Политику конфиденциальности.</a>
                  </span>
                </span>
              </label>
            </div>


        {/* Раздел "Что такое бонус?" */}
        <div className="flex flex-col md:flex-row justify-center items-center my-4 max-w-6xl mx-auto pt-10">
          <img
            src={perk}
            alt="бонус"
            className="w-96 h-86 object-contain rounded-lg"
          />
          <div className="text-center md:text-left md:pl-8">
            <h2 className="text-2xl font-bold pb-3">Что такое бонус?</h2>
            <p className="lg:pr-10">
              Бонус — это награда или стимул, предлагаемый владельцами кампаний
              для тех, кто поддерживает их проект. Бонусы могут быть как материальными,
              например, мерч или ограниченные по выпуску продукты, так и нематериальными,
              такими как эксклюзивный доступ, цифровые загрузки или персонализированные
              впечатления. Они используются, чтобы привлечь и мотивировать потенциальных
              инвесторов.
            </p>
          </div>
        </div>

        {/* Раздел "Готовы? Исследуйте и вдохновляйтесь" */}
        <div className="text-center lg:my-8">
          <div className="flex flex-col lg:flex-row justify-center items-center my-4">
            <div className="flex flex-col items-center lg:mr-56 mb-10 md:mb-0">
              <img
                src={Explore}
                alt="Исследовать"
                className="w-24 md:w-32 h-auto object-cover"
              />
              <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">
                Готовы? Исследуйте
              </h1>
              <button
                className="bg-[#ff0000] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded"
                onClick={() => navigate("/ExploreProjects")}
              >
                Откройте проекты
              </button>
            </div>

            <div className="hidden lg:block lg:h-80 border-l border-gray-400 mx-6"></div>
            <div className="block lg:hidden w-96 border-t border-gray-400 my-20"></div>

            <div className="flex flex-col items-center lg:ml-56 mb-4 md:mb-0 ">
              <img
                src={inspired}
                alt="Вдохновение"
                className="w-24 md:w-32 h-auto object-cover"
              />
              <h1 className="text-3xl font-semibold py-4 md:mb-4 lg:pt-10">
                Чувствуете вдохновение?
              </h1>
              <button className="bg-[#ff0000] hover:bg-[#9691aa] font-semibold py-2 px-4 rounded">
                <a href="/create-campaign">Станьте предпринимателем</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
