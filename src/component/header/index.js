import React from 'react';
import "./header.css";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Header = () => {
    return (
        <div className="max-width header">
            <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="Zomato-logo"
                className="header-logo"
            />
            <div className='header-right'>
                <div className='header-loaction-search-container'>
                    <div className='location-wrapper'>
                        <div className='location-icon-name'>
                            <div className='absolute-center location-icon'>
                                <LocationOnOutlinedIcon />
                            </div>
                            <div>Bangalore</div>
                            <div className='absolute-center'><ArrowDropDownIcon /></div>
                            <div className='location-search-separator'></div>
                        </div>
                        <div className='header-searchbar absolute-center search icon'>
                            <SearchIcon />
                            <input
                                placeholder='Search for restaurant, cuisine or a dish'
                                className='search-input'
                            />
                        </div>
                    </div>
                </div>
                <div className='profile-wrapper'>
                    <AccountBalanceIcon />
                    <span className='header-username'>Akshay</span>
                    <div className='absolute-center profile-options-icon' >
                        <ArrowDropDownIcon />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
