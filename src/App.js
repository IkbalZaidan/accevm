import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import SecondaryHeader from './components/Header/SecondaryHeader'; // A different header component
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import SecondaryFooter from './components/Footer/SecondaryFooter';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AccountTypes from './pages/AccountTypes';
import Awards from './pages/Awards';
import DemoAccount from './pages/DemoAccount';
import LAndR from './pages/LAndR';
import IslamicAccount from './pages/IslamicAccount';
import AccuGo from './pages/AccuGo';
import AccuConnect from './pages/AccuConnect';
import MetaTrader5 from './pages/MetaTrader5';
import Forex from './pages/Forex';
import Stocks from './pages/Stocks';
import Indices from './pages/Indices';
import Crypto from './pages/Crypto';
import Commodities from './pages/Commodities';
import Login from './pages/Login';
import Thanks from './pages/Thanks';
import FundMnagaers from './pages/FundMan';
import HomePartners from './pages/HomePartners';
import IB from './pages/IB';
import CorporateAccounts from './pages/CorporateAccounts';
import Company from './pages/Company';
import Promotion from './pages/Promotion';
import EconomicCalendar from './pages/EconomicCalendar';
import ContactUs from './pages/ContactUs';
import AccPay from './pages/AccPay';
import Faq from './pages/Faq';
import LegalDocuments from './pages/LegalDocuments';
import Register from './pages/Register';
import RegisterDemo from './pages/RegisterDemo';
import RegisterIb from './pages/RegisterIb';
import Webtrader from './pages/Webtrader';
import ContractSpecification from './pages/ContractSpecification';


function App() {
  return (
    <Router>
       <ScrollToTop />
      <HeaderSelector />
      <Routes>
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
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/EconomicCalendar" element={<EconomicCalendar />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AccPay" element={<AccPay />} />

        <Route path="/faq" element={<Faq />} />
        <Route path="/LegalDocuments" element={<LegalDocuments />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterDemo" element={<RegisterDemo />} />
        <Route path="/RegisterIb" element={<RegisterIb />} />
        <Route path="/Webtrader" element={<Webtrader />} />
        <Route path="/ContractSpecification" element={<ContractSpecification />} />

      </Routes>
      <FooterSelector />
    </Router>
  );
}

function HeaderSelector() {
  const location = useLocation();

  // Define routes that require the SecondaryHeader
  const secondaryHeaderRoutes = [
    '/IB',
    '/CorporateAccounts',
    '/FundMnagers',
    '/Company'
  ];

  // Check if the current route matches one of the secondary header routes
  const isSecondaryHeader = secondaryHeaderRoutes.includes(location.pathname);

  // Conditionally render the appropriate header
  return isSecondaryHeader ? <SecondaryHeader /> : <Header />;
}


function FooterSelector() {
  const location = useLocation();

  // Define routes that require the SecondaryHeader
  const secondaryFooterRoutes = [
    '/IB',
    '/CorporateAccounts',
    '/FundMnagers',
    '/Company'
  ];

  // Check if the current route matches one of the secondary header routes
  const isSecondaryFooter = secondaryFooterRoutes.includes(location.pathname);

  // Conditionally render the appropriate header
  return isSecondaryFooter ? <SecondaryFooter /> : <Footer />;
}


export default App;
