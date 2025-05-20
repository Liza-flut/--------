import React from 'react';

const LegalDetail = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Юридические Политики и Процедуры</h1>
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Введение</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Добро пожаловать на юридическую страницу Crowdfunding. Здесь вы найдете информацию о наших юридических политиках, условиях обслуживания, политике конфиденциальности и других важных юридических документах. Мы стремимся поддерживать прозрачную и безопасную платформу для наших пользователей.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Условия Использования</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Наши Условия обслуживания описывают правила и нормы использования платформы Crowdfunding. Используя наши сервисы, вы соглашаетесь соблюдать эти условия. Условия обслуживания охватывают такие темы, как создание аккаунта, обязанности пользователей, запрещенные действия и многое другое.
          </p>
          <a href="/TermsOfUse" className="text-[#8c6dfd] underline mb-4 block">Прочитать наши Условия Использования</a>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Политика Конфиденциальности</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Наша Политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу личную информацию. Мы ценим вашу конфиденциальность и обязуемся защищать ваши данные. Политика конфиденциальности охватывает методы сбора данных, безопасность данных и многое другое.
          </p>
          <a href="/PrivacyPolicy" className="text-[#8c6dfd] underline mb-4 block">Прочитать нашу Политику Конфиденциальности</a>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Соблюдение Законов</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Crowdfunding соблюдает все применимые законы и нормативные акты. Мы гарантируем, что наша платформа используется в законных целях и принимаем меры против любых незаконных действий. Пользователи обязаны соблюдать все соответствующие законы при использовании наших сервисов.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Интеллектуальная Собственность</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Весь контент на платформе Crowdfunding, включая тексты, графику, логотипы и программное обеспечение, является собственностью Crowdfunding или его поставщиков контента. Несанкционированное использование нашей интеллектуальной собственности строго запрещено. Мы уважаем права интеллектуальной собственности других и ожидаем того же от наших пользователей.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Разрешение Споров</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            В случае спора Crowdfunding предлагает комплексный процесс разрешения конфликтов. Пользователи могут <a href="/contact" className="text-[#8c6dfd] cursor-pointer">связаться с нами</a> напрямую. Мы стремимся разрешать споры справедливо и оперативно, чтобы обеспечить положительный опыт для всех пользователей.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Изменения в Политиках</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Crowdfunding оставляет за собой право обновлять наши юридические политики в любое время. Мы уведомим пользователей о любых значительных изменениях в наших политиках. Ваша ответственность — регулярно просматривать наши юридические документы, чтобы быть в курсе условий и правил.
          </p>
        </div>
      </div>
    </>
  );
};

export default LegalDetail;
