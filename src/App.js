import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs'; // Import the About Us page
import AccountTypes from './pages/AccountTypes'; // Import the About Us page
import Awards from './pages/Awards'; // Import the About Us page
import DemoAccount from './pages/DemoAccount'; // Import the About Us page
import LAndR from './pages/LAndR'; // Import the About Us page
import IslamicAccount from './pages/IslamicAccount'; // Import the About Us page
import AccuGo from './pages/AccuGo'; // Import the About Us page
import AccuConnect from './pages/AccuConnect'; // Import the About Us page
import MetaTrader5 from './pages/MetaTrader5'; // Import the About Us page
import Forex from './pages/Forex'; // Import the About Us page
import Stocks from './pages/Stocks'; // Import the About Us page
import Indices from './pages/Indices'; // Import the About Us page
import Crypto from './pages/Crypto'; // Import the About Us page
import Commodities from './pages/Commodities'; // Import the About Us page
import Login from './pages/Login'; // Import the About Us page
import Thanks from './pages/Thanks'; // Import the About Us page
import FundMnagaers from './pages/FundMan'; // Import the About Us page
import HomePartners from './pages/HomePartners'; // Import the About Us page
import IB from './pages/IB'; // Import the About Us page
import CorporateAccounts from './pages/CorporateAccounts'; // Import the About Us page
import Company from './pages/Company'; // Import the About Us page


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/account-types" element={<AccountTypes />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/demoAccount" element={<DemoAccount />} />
        <Route path="/landr" element={<LAndR />} />
        <Route path="/islamicaccount" element={<IslamicAccount />} />
        <Route path="/accugo" element={<AccuGo />} />
        <Route path="/accuconnect" element={<AccuConnect />} />
        <Route path="/metatrader" element={<MetaTrader5 />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/FundMnagers" element={<FundMnagaers />} />
        <Route path="/HomePartners" element={<HomePartners />} />
        <Route path="/IB" element={<IB />} />
        <Route path="/CorporateAccounts" element={<CorporateAccounts />} />
        <Route path="/Company" element={<Company />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
