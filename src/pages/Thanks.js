import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from "react-toastify";
import '../styles/about-section.css';
import '../styles/blog-section.css';
import '../styles/Style.css';
import '../styles/Responsive-sty.css';
import '../styles/Contact-sty.css';


const Thanks = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // toast.success("You are now being redirected to the login page.");

    // const timer = setTimeout(() => {
    //   window.location.href = "https://my.accuindex.com/login";
    // }, 3000);

    // return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
