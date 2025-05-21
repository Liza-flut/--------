import React, { useContext, createContext } from "react";

const StateContext = createContext();

const mockCampaigns = [
  {
    title: "Создание настольной игры «Космический Рейнджер»",
    description: "Авторская игра с миниатюрами и уникальной механикой. Помогите нам запустить производство!",
    target: "8",
    deadline: new Date("2025-12-01").getTime(),
    amountCollected: "3.2",
    image: ["https://sun9-63.userapi.com/impf/-BF-yPjtAK3GrUR3rCYwM18vgeoqSN2SntDgaA/p_mUP4v8w2o.jpg?size=1920x768&quality=95&crop=0,222,1280,511&sign=a9e707447563eab712c8f460df96953a&type=cover_group"],
    owner: "0xMockedAddress1",
    pId: 0,
    category: "Сбор средств",
  },
  {
    title: "Запись дебютного музыкального альбома",
    description: "Инди-группа из Санкт-Петербурга хочет записать свой первый студийный альбом.",
    target: "5",
    deadline: new Date("2025-11-15").getTime(),
    amountCollected: "1.7",
    image: ["https://i.pinimg.com/736x/d0/45/72/d04572181f756a5e79753db4baeacf6c.jpg"],
    owner: "0xMockedAddress2",
    pId: 1,
    category: "Family",
  },
  {
    title: "Документальный фильм о вымирающих языках России",
    description: "Фильм о культуре и языках малых народов России. Нужна поддержка на съёмки.",
    target: "12",
    deadline: new Date("2025-10-25").getTime(),
    amountCollected: "6.4",
    image: ["https://avatars.mds.yandex.net/i?id=46cdad8d214904b58e394d45727ee4acd91126f0-5234139-images-thumbs&n=13"],
    owner: "0xMockedAddress3",
    pId: 2,
    category: "Family",
  },
  {
    title: "Открытие мастерской керамики в Казани",
    description: "Собираем средства на оборудование и аренду творческого пространства.",
    target: "4",
    deadline: new Date("2025-09-30").getTime(),
    amountCollected: "2.1",
    image: ["https://i0.wp.com/www.vsyasol.ru/wp-content/uploads/2016/05/IMG_8066.jpg"],
    owner: "0xMockedAddress4",
    pId: 3,
    category: "Творческие услуги",
  },
  {
    title: "Разработка мобильного приложения для изучения татарского языка",
    description: "Образовательное приложение с уроками, аудио и мини-играми для всех возрастов.",
    target: "6",
    deadline: new Date("2025-12-20").getTime(),
    amountCollected: "2.8",
    image: ["https://sun9-41.userapi.com/jqU6ialQ9pCiAVo5AxEkeTX2qAKobmmzZ3YTCQ/WCl_WJM_vMU.jpg"],
    owner: "0xMockedAddress5",
    pId: 4,
    category: "Education",
  },
  {
    title: "Эко-ферма с образовательной программой",
    description: "Создаём ферму, где дети и взрослые смогут учиться выращивать продукты экологично.",
    target: "10",
    deadline: new Date("2025-12-10").getTime(),
    amountCollected: "3.9",
    image: ["https://sun9-15.userapi.com/impg/oQfGe_WAYLUXQbA7RVx_utWhbqzUhzWjUS4nMA/XOdM5ok-fFA.jpg?size=807x807&quality=95&sign=9384b0792577037fc17c64668d96d4d4&c_uniq_tag=UHuX6dHVJhAZzHePWIzO20xoWmgHxMObYJlqiAKoeLU&type=album"],
    owner: "0xMockedAddress6",
    pId: 5,
    category: "Окружающая среда",
  },
  {
    title: "Комикс «Легенды Подземелья»",
    description: "Иллюстрированный графический роман в стиле фэнтези. Поддержите издание первого тома!",
    target: "7",
    deadline: new Date("2025-11-05").getTime(),
    amountCollected: "2.6",
    image: ["https://avatars.mds.yandex.net/i?id=8ed3d290e2ac6ebfc41b391d248a98bc_l-2033887-images-thumbs&n=13"],
    owner: "0xMockedAddress7",
    pId: 6,
    category: "Творческие услуги",
  },
  {
    title: "Запуск подкаста «На грани науки»",
    description: "Еженедельный научно-популярный подкаст с гостями — учёными, исследователями, инженерами.",
    target: "3",
    deadline: new Date("2025-10-01").getTime(),
    amountCollected: "1.4",
    image: ["https://mastera.academy/uploads/og-images/photo_2022-04-05_13-54-35.jpg"],
    owner: "0xMockedAddress8",
    pId: 7,
    category: "Education",
  },
  {
    title: "Мобильное приложение для учёта финансов студентов",
    description: "Простой и понятный инструмент для бюджетирования и планирования трат в университете.",
    target: "4.5",
    deadline: new Date("2025-12-30").getTime(),
    amountCollected: "0.9",
    image: ["https://f.sravni.ru/cms/Material/10-besplatnykh-android-prilozhenij-dlja-kontrolja-raskhodov/coin-keeper-%D0%B2%D0%BD%D1%83%D1%82%D1%80%D1%8C0%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8.jpg"],
    owner: "0xMockedAddress9",
    pId: 8,
    category: "Сбор средств",
  },
  {
    title: "Крауд-издание книги «Истории переселенцев»",
    description: "Сборник реальных историй людей, переехавших из деревень в города в XX веке.",
    target: "6.5",
    deadline: new Date("2025-10-18").getTime(),
    amountCollected: "3.1",
    image: ["https://avatars.mds.yandex.net/i?id=cfc781c5c6e43a186894c7edc096e062_l-9026739-images-thumbs&n=13"],
    owner: "0xMockedAddress10",
    pId: 9,
    category: "Education",
  },
];



export const StateContextProvider = ({ children }) => {
  const address = "0xMockedAddress1";

  const contract = {
    mock: true,
  };

  const connect = async () => {
    console.log("Connect called, but no wallet connection in mock");
  };

  const getCampaigns = async () => {
    console.log("МОК getCampaigns вызван");
    return mockCampaigns;
  };

  const getUserCampaigns = async () => {
    return [mockCampaigns[0]];
  };

  const publishCampaign = async (form) => {
    console.log("publishCampaign called but does nothing");
  };

  const updateCampaign = async (form) => {
    console.log("updateCampaign called but does nothing");
  };

  const deleteCampaign = async (pId) => {
    console.log("deleteCampaign called but does nothing");
  };

  const donate = async (pId, amount) => {
    console.log("donate called but does nothing");
  };

  const payOutToCampaignTeam = async (pId) => {
    console.log("payOutToCampaignTeam called but does nothing");
  };

  const getDonations = async (pId) => {
    return [];
  };

  const getNumberOfCampaignsDonatedTo = async (donatorAddress) => {
    return 0;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        payOutToCampaignTeam,
        updateCampaign,
        deleteCampaign,
        getNumberOfCampaignsDonatedTo,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
