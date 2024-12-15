import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import '../styles/Style.css';
import '../styles/Contact-sty.css';
import '../styles/Responsive-sty.css';

const ContactUs = () => {
    const { t } = useTranslation();



    return (
        // <div>
            <section className="main-contact-form-area">
                <div className="container">
                    <div className="row">
                        {/* Contact Info Section */}
                        <div className="col-xl-6 ">
                            <div className="contact-info-box-style1">
                                <div className="box1"></div>
                                <div className="title">
                                    <h2>
                                        {t("contactus.titleLine1")}
                                        <br />
                                        {t("contactus.titleLine2")}
                                    </h2>
                                    <p>{t("contactus.subtitle")}</p>
                                </div>

                                <ul className="contact-info-1">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-map"></span>
                                        </div>
                                        <div className="text">
                                            <p>{t("contactus.officeTitle")}</p>
                                            <h3>{t("contactus.officeAddress")}</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-clock"></span>
                                        </div>
                                        <div className="text">
                                            <p>{t("contactus.hoursTitle")}</p>
                                            <h3>{t("contactus.hours")}</h3>
                                            <span>{t("contactus.note")}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <div className="text">
                                            <p>{t("contactus.phoneTitle")}</p>
                                            <h3>
                                                <a href="tel:123456789">{t("contactus.phoneNumber")}</a>
                                            </h3>
                                            <h3>
                                                <a href="mailto:support@accuindex.com">
                                                    {t("contactus.email")}
                                                </a>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>

                                <div className="bottom-box">
                                    <div className="btn-box">
                                        <a href="#">
                                            <i className="fas fa-arrow-down"></i> {t("contactus.customerCare")}
                                        </a>
                                    </div>
                                    <div className="footer-social-link-style1">
                                        <ul className="clearfix">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="col-xl-6 ">
                            <div className="contact-form background-black">
                                <form
                                    id="contact-form"
                                    name="contact_form"
                                    className="default-form2"
                                    action="#"
                                    method="post"
                                >
                                    <div className="form-group">
                                        <label className="white">{t("contactus.form.name")}</label>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="form_name"
                                                id="formName"
                                                placeholder={t("contactus.form.namePlaceholder")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="white">{t("contactus.form.email")}</label>
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="form_email"
                                                id="formEmail"
                                                placeholder={t("contactus.form.emailPlaceholder")}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="white">{t("contactus.form.phone")}</label>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="form_phone"
                                                id="formPhone"
                                                placeholder={t("contactus.form.phonePlaceholder")}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="white">{t("contactus.form.subject")}</label>
                                        <div className="input-box">
                                            <input
                                                type="text"
                                                name="form_subject"
                                                id="formSubject"
                                                placeholder={t("contactus.form.subjectPlaceholder")}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="white">{t("contactus.form.message")}</label>
                                        <div className="input-box">
                                            <textarea
                                                name="form_message"
                                                id="formMessage"
                                                placeholder={t("contactus.form.messagePlaceholder")}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="button-box">
                                        <input
                                            id="form_botcheck"
                                            name="form_botcheck"
                                            className="form-control"
                                            type="hidden"
                                            value=""
                                        />
                                        <button
                                            className="btn-one"
                                            type="submit"
                                            data-loading-text={t("contactus.form.loadingText")}
                                        >
                                            <span className="txt">{t("contactus.form.submitButton")}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        // </div>

    );
};


export default ContactUs;
