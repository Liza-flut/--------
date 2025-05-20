import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { Loader } from "../components";
import { useNavigate } from "react-router-dom";
import FundCard from "../components/FundCard";

const SearchCampaigns = ({ searchQuery }) => {
  const { contract, getCampaigns } = useStateContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data || []);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [contract]);

  useEffect(() => {
    const filtered = campaigns.filter(
      (campaign) =>
        campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        campaign.category.toLowerCase() === searchQuery.toLowerCase()
    );
    setFilteredCampaigns(filtered);
  }, [searchQuery, campaigns]);

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl lg:text-3xl font-semibold text-center mt-6 mb-20">
        {searchQuery ? `Результаты поиска по запросу "${searchQuery}"` : "Кампании Crowdfunding"}
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {filteredCampaigns.length === 0 ? (
          <div>Кампании не найдены.</div>
        ) : (
          filteredCampaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchCampaigns;
