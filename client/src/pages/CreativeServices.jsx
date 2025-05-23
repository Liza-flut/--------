import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { AllCampaigns, Loader } from '../components';
import { useNavigate } from 'react-router-dom';

const CreativeServices = () => {
  const { contract, getCampaigns } = useStateContext();
  const navigate = useNavigate(); 

  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const fetchCampaigns = async () => {
    setIsLoading(true); 
    const data = await getCampaigns(); 
    setCampaigns(data || []); 
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
      <h1 className="text-2xl font-bold mb-6 text-center">Творческие услуги</h1>
      <div className="flex"> 
        {campaigns.length === 0 ? (
          <div>No campaigns found.</div> 
        ) : (
          <AllCampaigns
          campaigns={campaigns.filter((campaign) => campaign.category === 'Творческие услуги')}
          />
        )}
      </div>
    </div>
  );
};

export default CreativeServices;
