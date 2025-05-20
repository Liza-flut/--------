import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-8 min-h-screen">
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Политика конфиденциальности</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Собираемая информация</h2>
          <p className="mb-2 text-lg text-justify text-gray-800 dark:text-gray-200">
            Поскольку мы используем блокчейн-технологию, некоторая информация, такая как адрес вашего кошелька, суммы транзакций и временные метки, является общедоступной. Мы не контролируем эти данные, так как они являются частью блокчейна.
          </p>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            Кроме того, мы собираем данные об использовании, включая IP-адрес, тип браузера, операционную систему, просмотренные страницы, время, проведённое на каждой странице, и сайты-источники переходов. Мы также используем куки и похожие технологии отслеживания для улучшения пользовательского опыта.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Как мы используем вашу информацию</h2>
          <ul className="list-disc pl-6 mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            <li className="pb-2"><strong>Для предоставления и улучшения наших услуг</strong>: мы используем вашу информацию для работы и поддержки нашей платформы, обеспечения её функциональности и улучшения пользовательского опыта.</li>
            <li className="pb-2"><strong>Для безопасности и предотвращения мошенничества</strong>: мы можем использовать вашу информацию для обнаружения, предотвращения и реагирования на инциденты безопасности или мошенническую активность.</li>
            <li className="pb-2"><strong>Для соблюдения юридических обязательств</strong>: мы можем использовать вашу информацию для выполнения применимых законов и нормативных требований.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Ваши права и выбор</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            В зависимости от вашей юрисдикции, у вас могут быть определённые права в отношении информации о вашей кампании, включая доступ, обновление и удаление данных.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Безопасность данных</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            Мы применяем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, раскрытия, изменения или уничтожения.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Конфиденциальность детей</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
          Crowdfunding не предназначен для детей младше 18 лет. Мы сознательно не собираем личную информацию от детей. Если мы обнаружим, что собрали информацию от ребёнка младше 18 лет, мы удалим её.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Изменения в этой политике конфиденциальности</h2>
          <p className="mb-10 text-lg text-justify text-gray-800 dark:text-gray-200">
            Мы можем время от времени обновлять эту Политику конфиденциальности. При этом мы уведомим вас, разместив уведомление на нашем сайте или отправив письмо на электронную почту. Пожалуйста, периодически просматривайте эту политику на предмет изменений.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Свяжитесь с нами</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Если у вас есть вопросы или нужна помощь, мы <a href="/contact" className="text-[#8c6dfd] underline mb-4">здесь</a>, чтобы помочь.
          </p>
        </section>
      </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
