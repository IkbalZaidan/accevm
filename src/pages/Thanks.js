import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

// import 'swiper/css';
import '../styles/about-section.css';
import '../styles/blog-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';
import '../styles/Contact-sty.css';
import slideImg1 from '../assets/img/aboutus/ourstory/SLIDE-IMG-1.png';


const Thanks = () => {
  const { t } = useTranslation();
 

  return (
    <div>
      <section className="error-page-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-content text-center">
              {/* Big Title */}
              <div
                className="big-title wow fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h2>{t('thanks.bigTitle')}</h2>
              </div>
              {/* Main Title */}
              <div
                className="title wow fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <h2>{t('thanks.mainTitle')}</h2>
              </div>
              {/* Error Text */}
              <div className="text">
                <p>{t('thanks.description')}</p>
              </div>
             
              {/* Button */}
              <div
                className="btns-box wow slideInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <a className="btn-one" href="/">
                  <span className="txt">
                    {t('thanks.backToHome')}
                    <i className="icon-refresh arrow"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  );
};


export default Thanks;
