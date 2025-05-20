import React from 'react';

const PaymentsDetail = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-semibold mb-14 text-center text-gray-900 dark:text-gray-100">Платежи</h1>
      <div className="bg-white dark:bg-[#1c1c24] shadow-md rounded-lg p-8 max-w-5xl w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Подключение кошелька MetaMask</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          MetaMask — популярный криптовалютный кошелек, который позволяет взаимодействовать с блокчейном Ethereum. Следуйте этим шагам, чтобы подключить ваш кошелек MetaMask к Block Fund:
        </p>
        <ol className="list-decimal list-inside space-y-6 text-gray-800 dark:text-gray-200">
          <li>
            <strong>Установите MetaMask:</strong> 
            <p className="mt-1">Если вы еще не сделали этого, <a href="https://metamask.io/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">установите MetaMask</a>. Он доступен как расширение для браузера и мобильное приложение.</p>
          </li>
          <li>
            <strong>Создайте или импортируйте кошелек:</strong> 
            <p className="mt-1">Откройте MetaMask и создайте новый кошелек или импортируйте существующий, используя вашу seed-фразу.</p>
          </li>
          <li>
            <strong>Подключитесь к основной сети Ethereum:</strong> 
            <p className="mt-1">Убедитесь, что вы подключены к основной сети Ethereum (Ethereum Mainnet).</p>
          </li>
          <li>
            <strong>Войдите на Crowdfunding:</strong> 
            <p className="mt-1">Перейдите на платформу Crowdfunding и войдите в ваш аккаунт MetaMask.</p>
          </li>
          <li>
            <strong>Подтвердите подключение:</strong> 
            <p className="mt-1">Ваш кошелек MetaMask теперь подключен к вашему аккаунту Crowdfunding. Вы можете получать средства напрямую на ваш кошелек.</p>
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100">Получение средств</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Как только ваша кампания будет профинансирована, обещанные средства будут переведены на ваш подключенный кошелек MetaMask. Вы можете просматривать и управлять этими средствами прямо в MetaMask.
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Для обеспечения плавного процесса транзакций убедитесь, что в вашем кошельке MetaMask есть немного эфира (ETH) для оплаты комиссии за газ.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900 dark:text-gray-100">Устранение проблем с платежами</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">
          Если вы столкнулись с проблемами при оплате, вот несколько распространенных шагов по их устранению:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-800 dark:text-gray-200">
          <li>Убедитесь, что ваш кошелек MetaMask правильно подключен и вы вошли в систему.</li>
          <li>Проверьте, что вы подключены к основной сети Ethereum.</li>
          <li>Убедитесь, что в кошельке достаточно ETH для оплаты комиссии за газ.</li>
          <li>Если транзакция не проходит, попробуйте отправить её повторно после проверки состояния сети на <a href="https://etherscan.io/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Etherscan</a>.</li>
          <li>Для дополнительной помощи свяжитесь с поддержкой Crowdfunding или посетите <a href="https://metamask.io/faqs.html" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">FAQ MetaMask</a>.</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentsDetail;
