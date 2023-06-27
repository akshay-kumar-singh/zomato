import React, { useState } from 'react'
import Header from '../../component/header';
import TabOptions from '../../component/tabOptions';
import Footer from '../../component/footer';
import Delivery from '../../component/delivery';
import DiningOut from '../../component/diningOut';
import NightLife from '../../component/nightlife';

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");

    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />

            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
};

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />;
        case "Dining Out":
            return <DiningOut />;
        case "Nightlife":
            return <NightLife />;
        default:
            return <Delivery />;
    }
}

export default HomePage;
