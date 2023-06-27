import React from 'react';
import "./diningOut.css";
import Collection from '../collection';
import Filters from '../filters';
import { diningOut } from '../../data/diningOut';
import TuneIcon from '@mui/icons-material/Tune';
import ExploreSection from '../exploreSection';


const collectionList = [
  {
    id:"1",
    title:"Live Sports Screenings",
    cover:"https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674844132.jpg",
    places:"12 places",
  },
  {
    id:"2",
    title:"Newly Opened",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg",
    places:"14 places",
  },
  {
    id:"3",
    title:"Veggie Friendly",
    cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674845423.jpg",
    places:"16 places",
  },
  {
    id:"4",
    title:"trending this week",
    cover:"https://b.zmtcdn.com/data/collections/4d8bbdfe1fe2b4cfa8aad710676fcb61_1674847218.jpg",
    places:"15 places",
  },
  {
    id:"5",
    title:"Best og Bengaluru",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg",
    places:"11 places",
  },
  {
    id:"6",
    title:"Outdoor Seating",
    cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054286.jpg",
    places:"20 places",
  },
  {
    id:"7",
    title:"Brilliant Biryanis",
    cover:"https://b.zmtcdn.com/data/collections/bae72a1db8edd0e325a9f8d0f40af692_1674844226.jpg",
    places:"24 places",
  },
  {
    id:"8",
    title:"Best Pizza Places In Town",
    cover:"https://b.zmtcdn.com/data/collections/888af0efb05704bb3fcb19b14977b5b9_1685700710.png",
    places:"13 places",
  },
];

const diningFilters = [
  {
    id:1,
    title: "Filters",
    icon: <TuneIcon />,
  },
  {
    id:2,
    title:"Rating:4.0+",
  },
  {
    id:3,
    title:"Safe and Hygenic",
  },
  {
    id:4,
    title:"Pure Veg",
  },
  {
    id:5,
    title:"Delivery Time",
  },
  {
    id:6,
    title:"Great Offers",
  },
];

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Dine-Out Restaurant in Bangalore"
      />  
    </div>
  );
}; 

export default DiningOut;
