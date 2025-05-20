import React, { useContext, createContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const address = null; // или "" если надо
  const connect = async () => {
    console.log("Connect called, but no wallet connection in mock");
  };

  // Заглушка: всегда возвращаем пустой массив кампаний
  const getCampaigns = async () => {
    return [];
  };

  // Заглушка: всегда возвращаем пустой массив кампаний пользователя
  const getUserCampaigns = async () => {
    return [];
  };

  // Пустые функции для остальных методов, чтобы не ломались вызовы
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
