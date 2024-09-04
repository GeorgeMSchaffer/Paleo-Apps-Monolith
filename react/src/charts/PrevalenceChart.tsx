import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const prevalenceData = [
  {
    "taxon_no": "84931",
    "taxon_name": "Ammonitida",
    "taxon_rank": "order",
    "image_no": "500",
    "n_occs": 27766
  },
  {
    "taxon_no": "402",
    "taxon_name": "Nassellaria",
    "taxon_rank": "order",
    "image_no": "1723",
    "n_occs": 20843
  },
  {
    "taxon_no": "71228",
    "taxon_name": "Foraminifera (other)",
    "taxon_rank": "phylum",
    "image_no": "909",
    "n_occs": 18459
  },
  {
    "taxon_no": "81178",
    "taxon_name": "Pectinida",
    "taxon_rank": "order",
    "image_no": "347",
    "n_occs": 17670
  },
  {
    "taxon_no": "5",
    "taxon_name": "Spumellaria",
    "taxon_rank": "order",
    "image_no": "1723",
    "n_occs": 17652
  },
  {
    "taxon_no": "6108",
    "taxon_name": "Scleractinia",
    "taxon_rank": "order",
    "image_no": "2036",
    "n_occs": 14105
  },
  {
    "taxon_no": "83707",
    "taxon_name": "Ostreida",
    "taxon_rank": "order",
    "image_no": "347",
    "n_occs": 13847
  },
  {
    "taxon_no": "14000",
    "taxon_name": "Ceratitida",
    "taxon_rank": "order",
    "image_no": "1750",
    "n_occs": 11961
  },
  {
    "taxon_no": "8304",
    "taxon_name": "Gastropoda (unclassified)",
    "taxon_rank": "order",
    "image_no": "167",
    "n_occs": 10582
  },
  {
    "taxon_no": "28340",
    "taxon_name": "Rhynchonellida",
    "taxon_rank": "order",
    "image_no": "156",
    "n_occs": 9626
  }
];

const data = {
  labels: prevalenceData.map(item => item.taxon_name),
  datasets: [
    {
      label: 'Number of Occurrences',
      data: prevalenceData.map(item => item.n_occs),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Taxon Occurrences',
    },
  },
};

export const PrevalenceChart: React.FC = () => {
  return <Bar data={data} options={options} />;
};

export default PrevalenceChart;