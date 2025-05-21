import React, { useState, useEffect } from "react";
import { DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import CategoriesComponent from "../components/CategoriesComponent";
import ImageGallery from "../components/ImageGallery";
import BacktheProject from "../components/BacktheProject";

const Home = () => {
  const { address, contract, getCampaigns } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    try {
      const data = await getCampaigns();
      setCampaigns(data);
    } catch (error) {
      console.error("Ошибка при загрузке кампаний:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Даже если контракт моковый, он есть — вызываем fetchCampaigns
    if (contract) {
      fetchCampaigns();
    }
  }, [address, contract]);

  return (
    <>
      <DisplayCampaigns
        title="Все компании"
        isLoading={isLoading}
        campaigns={campaigns.filter((campaign) => {
          return (
            campaign.owner !== "0x0000000000000000000000000000000000000000"
          );
        })}
      />
      <ImageGallery />
      <BacktheProject />
      <CategoriesComponent />
    </>
  );
};

export default Home;
