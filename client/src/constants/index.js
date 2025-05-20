import { MdDashboard, MdCampaign, MdAccountCircle, MdPayment, MdExitToApp } from 'react-icons/md';

export const navlinks = [
  {
    name: 'главная',
    iconLight: MdDashboard,
    iconDark: MdDashboard,
    link: '/',
  },
  {
    name: 'кампания',
    iconLight: MdCampaign,
    iconDark: MdCampaign,
    link: '/create-campaign',
  },
  {
    name: 'оплата',
    iconLight: MdPayment,
    iconDark: MdPayment,
    link: '/Withdraw',
  },
 
  {
    name: 'профиль',
    iconLight: MdAccountCircle,
    iconDark: MdAccountCircle,
    link: '/profile',
  },
];
