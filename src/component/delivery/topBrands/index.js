import React from 'react';
import "./topBrands.css";
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import Slider from 'react-slick';

const topBrandsList = [
  {
    id: 1,
    time: "21min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b33aaf8c14823c85b0470fdce138fa81_1617931389.png",
  },
  {
    id: 2,
    time: "25min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806923.png",
  },
  {
    id: 3,
    time: "29min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017785.png",
  },
  {
    id: 4,
    time: "26min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c505604a9a42be5e6d3644e4a28acd84_1678081788.png",
  },
  {
    id: 5,
    time: "42min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433965.png",
  },
  {
    id: 6,
    time: "22min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1005fb0c9e31b63b7c3f9e825d62a3d8_1605103758.png",
  },
  {
    id: 7,
    time: "44min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2f32014b8ff892ba75217e3ef050e1bd_1648017751.png",
  },
  {
    id: 8,
    time: "27min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1dc9563533730bc3829922fa50c9814b_1654533773.png",
  },
  {
    id: 9,
    time: "58min",
    cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389351.png",
  }

];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you </div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div>
              <div className='top-brands-cover'>
                <img
                  src={brand.cover}
                  className='top-brands-image'
                  alt={brand.time}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  )
};

export default TopBrands;
