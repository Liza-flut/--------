import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { AllCampaigns, Loader } from '../components';
import { useNavigate } from 'react-router-dom';

const TopFinds = () => {
  const { contract, getCampaigns } = useStateContext();
  const navigate = useNavigate(); 

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true); 
    const data = await getCampaigns(); 

    const sortedCampaigns = (data || [])
      .filter(campaign => campaign.category === 'Fundraiser')
      .sort((a, b) => b.goal - a.goal)
      .slice(0, 10);

    setCampaigns(sortedCampaigns); 
    setIsLoading(false); 
  };

  useEffect(() => {
    if (contract) fetchCampaigns(); 
  }, [contract]);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">10 классных и умных находок</h1>
      <div className="flex">
        {campaigns.length === 0 ? (
          <div>Кампании не найдены.</div>
        ) : (
          <AllCampaigns campaigns={campaigns} />
        )}
      </div>
    </div>
  );
};

export default TopFinds;