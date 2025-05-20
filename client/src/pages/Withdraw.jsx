
import React, { useState, useEffect } from "react";

import { AllCampaigns, DisplayCampaigns } from "../components";
import { useStateContext } from "../context";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <div className="flex">
      {campaigns.length === 0 ? (
        <div>Кампании не найдены.</div>
      ) : (
        <AllCampaigns
          campaigns={campaigns.filter(
            (campaign) => campaign.amountCollected >= campaign.target
          )}
        />
      )}
    </div>
  );
};

export default Profile;
