import {
  BanknotesIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Money",
    value: "Rp. 53.000",
    footer: {
      color: "text-green-500",
      value: "-",
      label: "AutCome",
    },
  },
  {
    color: "gray",
    icon: CurrencyDollarIcon,
    title: "Money",
    value: "Rp. 53.000",
    footer: {
      color: "text-green-500",
      value: "-",
      label: "Income",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "Rp. 53.000",
    footer: {
      color: "text-green-500",
      value: "-",
      label: "Savings",
    },
  },
];

export default statisticsCardsData;
