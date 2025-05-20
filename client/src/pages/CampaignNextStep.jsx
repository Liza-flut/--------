import React from 'react';

const CampaignNextStep = () => {
  return (
    <>
      <div className="flex flex-col items-center py-10 px-4 min-h-screen">
        <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Следующие шаги кампании</h1>
        <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Поздравляем с запуском вашей кампании!</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Вы сделали первый шаг к реализации своей идеи. Вот следующие шаги, которые помогут обеспечить успех вашей кампании:
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">1. Поделитесь своей кампанией</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Расскажите о своей кампании в соцсетях, по электронной почте и устно. Чем больше людей узнает, тем выше шансы достичь цели по финансированию.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">2. Взаимодействуйте с вашими спонсорами</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Регулярно информируйте спонсоров о ходе кампании. Делитесь прогрессом, новостями и достигнутыми этапами. Взаимодействие укрепляет доверие и стимулирует дальнейшую поддержку.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">3. Продвигайте свою кампанию</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Используйте рекламные стратегии, чтобы привлечь больше спонсоров. Рассмотрите возможность запуска рекламы, сотрудничества с инфлюенсерами и использования медийного охвата. Чем заметнее ваша кампания, тем больше поддерживающих вы привлечёте.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">4. Отслеживайте ход кампании</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Следите за результатами кампании. Контролируйте поступления, учитывайте отзывы и при необходимости корректируйте стратегии.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">5. Планируйте действия после кампании</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Заблаговременно продумайте, что будете делать после окончания кампании. Планируйте выполнение вознаграждений, информирование спонсоров и поддержание связи с вашим новым сообществом. Хорошо продуманный план обеспечит долгосрочный успех.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">6. Обращайтесь за помощью при необходимости</h3>
          <p className="mb-4 text-gray-800 dark:text-gray-200">
            Если возникнут проблемы или понадобится совет, не стесняйтесь обращаться. Мы <a className="text-[#8c6dfd] underline cursor-pointer" onClick={() => navigate("/Contact")}>здесь</a>, чтобы помочь вам добиться успеха.
          </p>
        </div>
      </div>
    </>
  );
};

export default CampaignNextStep;
