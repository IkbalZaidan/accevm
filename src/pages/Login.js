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
import '../styles/contact.css';
import slideImg1 from '../assets/img/aboutus/ourstory/SLIDE-IMG-1.png';
import slideImg3 from "../assets/img/aboutus/ourstory/SLIDE-IMG-3.png";
import slideImg4 from '../assets/img/aboutus/ourstory/SLIDE-IMG-4.png';
import slideImg5 from '../assets/img/aboutus/ourstory/SLIDE-IMG-5.png';
const Login = () => {
  const { t } = useTranslation();
  const countriesWithCodes = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Antigua and Barbuda", code: "+1-268" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" },
    { name: "Bahamas", code: "+1-242" },
    { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" },
    { name: "Barbados", code: "+1-246" },
    { name: "Belarus", code: "+375" },
    { name: "Belgium", code: "+32" },
    { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" },
    { name: "Bhutan", code: "+975" },
    { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" },
    { name: "Botswana", code: "+267" },
    { name: "Brazil", code: "+55" },
    { name: "Brunei", code: "+673" },
    { name: "Bulgaria", code: "+359" },
    { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" },
    { name: "Cabo Verde", code: "+238" },
    { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" },
    { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" },
    { name: "China", code: "+86" },
    { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" },
    { name: "Congo (Congo-Brazzaville)", code: "+242" },
    { name: "Congo (DRC)", code: "+243" },
    { name: "Costa Rica", code: "+506" },
    { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" },
    { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" },
    { name: "Denmark", code: "+45" },
    { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1-767" },
    { name: "Dominican Republic", code: "+1-809" },
    { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" },
    { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" },
    { name: "Eswatini", code: "+268" },
    { name: "Ethiopia", code: "+251" },
    { name: "Fiji", code: "+679" },
    { name: "Finland", code: "+358" },
    { name: "France", code: "+33" },
    { name: "Gabon", code: "+241" },
    { name: "Gambia", code: "+220" },
    { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" },
    { name: "Ghana", code: "+233" },
    { name: "Greece", code: "+30" },
    { name: "Grenada", code: "+1-473" },
    { name: "Guatemala", code: "+502" },
    { name: "Guinea", code: "+224" },
    { name: "Guinea-Bissau", code: "+245" },
    { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" },
    { name: "Honduras", code: "+504" },
    { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" },
    { name: "Iran", code: "+98" },
    { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" },
    { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" },
    { name: "Jamaica", code: "+1-876" },
    { name: "Japan", code: "+81" },
    { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" },
    { name: "Kiribati", code: "+686" },
    { name: "Korea (North)", code: "+850" },
    { name: "Korea (South)", code: "+82" },
    { name: "Kuwait", code: "+965" },
    { name: "Kyrgyzstan", code: "+996" },
    { name: "Laos", code: "+856" },
    { name: "Latvia", code: "+371" },
    { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" },
    { name: "Liberia", code: "+231" },
    { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" },
    { name: "Lithuania", code: "+370" },
    { name: "Luxembourg", code: "+352" },
    { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" },
    { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" },
    { name: "Marshall Islands", code: "+692" },
    { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" },
    { name: "Mexico", code: "+52" },
    { name: "Micronesia", code: "+691" },
    { name: "Moldova", code: "+373" },
    { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" },
    { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" },
    { name: "Myanmar (Burma)", code: "+95" },
    { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" },
    { name: "Netherlands", code: "+31" },
    { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" },
    { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" },
    { name: "North Macedonia", code: "+389" },
    { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" },
    { name: "Palau", code: "+680" },
    { name: "Palestine", code: "+970" },
    { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" },
    { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" },
    { name: "Poland", code: "+48" },
    { name: "Portugal", code: "+351" },
    { name: "Qatar", code: "+974" },
    { name: "Romania", code: "+40" },
    { name: "Russia", code: "+7" },
    { name: "Rwanda", code: "+250" },
    { name: "Saint Kitts and Nevis", code: "+1-869" },
    { name: "Saint Lucia", code: "+1-758" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784" },
    { name: "Samoa", code: "+685" },
    { name: "San Marino", code: "+378" },
    { name: "Sao Tome and Principe", code: "+239" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" },
    { name: "Seychelles", code: "+248" },
    { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" },
    { name: "Slovakia", code: "+421" },
    { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" },
    { name: "Somalia", code: "+252" },
    { name: "South Africa", code: "+27" },
    { name: "South Sudan", code: "+211" },
    { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" },
    { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" },
    { name: "Syria", code: "+963" },
    { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" },
    { name: "Tanzania", code: "+255" },
    { name: "Thailand", code: "+66" },
    { name: "Togo", code: "+228" },
    { name: "Tonga", code: "+676" },
    { name: "Trinidad and Tobago", code: "+1-868" },
    { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" },
    { name: "Turkmenistan", code: "+993" },
    { name: "Tuvalu", code: "+688" },
    { name: "Uganda", code: "+256" },
    { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "United Kingdom", code: "+44" },
    { name: "United States", code: "+1" },
    { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" },
    { name: "Vanuatu", code: "+678" },
    { name: "Vatican City", code: "+39" },
    { name: "Venezuela", code: "+58" },
    { name: "Vietnam", code: "+84" },
    { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" },
    { name: "Zimbabwe", code: "+263" }
  ];

  const [selectedCountry, setSelectedCountry] = useState("United Arab Emirates");
  const [selectedCode, setSelectedCode] = useState("+971");
  const handleCountryChange = (event) => {
    const country = event.target.value;
    const selectedCountryData = countriesWithCodes.find(
      (item) => item.name === country
    );
    setSelectedCountry(country);
    setSelectedCode(selectedCountryData ? selectedCountryData.code : "");
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    <div>
      <section className="main-contact-form-area">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div className="col-xl-12">
              <div className="contact-info-box-style1">
                <div className="box1"></div>
                <div className="title">
                  <h2>{t('contact.title')}</h2>
                  <p>{t('contact.description')}</p>
                </div>
                <div className="contact-form">
                  <form id="contact-form" className="default-form2">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>{t('contact.firstName')}</label>
                          <div className="input-box">
                            <input type="text" name="form_name" placeholder="" required />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>{t('contact.lastName')}</label>
                          <div className="input-box">
                            <input type="text" name="form_name" placeholder="" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <label>{t('contact.country')}</label>
                      <div className="input-box">
                        <select name="country" required>
                          <option value="" disabled selected>
                            {t('contact.selectCountry')}
                          </option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div> */}

                    <div className="form-group">
                      <label>Country</label>
                      <div className="input-box">
                        <select value={selectedCountry} onChange={handleCountryChange} required>
                          <option value="" disabled selected>
                            Select your country
                          </option>
                          {countriesWithCodes.map((country) => (
                            <option key={country.code} value={country.name}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* <label>Phone Number</label>
                      <div className="input-box d-flex">
                        <span className="country-code">{selectedCode}</span>
                        <input
                          type="text"
                          name="form_phone"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div> */}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>{t('contact.phoneLabel')}</label>
                          <div className="input-box">
                            <div className="d-flex">
                              <span className="country-code">{selectedCode}</span>
                              <input type="text" name="form_phone" placeholder="" required />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>{t('contact.emailLabel')}</label>
                          <div className="input-box">
                            <input type="email" name="form_email" placeholder="" required />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Password</label>
                          <div className="input-box d-flex">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="form_password"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="toggle-password-btn"
                              onClick={togglePasswordVisibility}
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} eye-sty`}></i>
                            </button>
                          </div>

                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group ">
                          <label>Confirm Password</label>
                          <div className="input-box d-flex ">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="form_confirm_password"
                              placeholder="Confirm your password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                            />
                            <button
                              type="button"
                              className="toggle-password-btn"
                              onClick={togglePasswordVisibility}
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} eye-sty`}></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='d-flex'>
                      <input type="checkbox" id="agree" name="agree" className='agreesty' required />
                      <label htmlFor="agree" className='agreeText'>
                        {t("contact.agree")}
                      </label>
                    </div>
                    <div className="button-box">

                      <button className="btn-one" type="submit">
                        <span className="txt">{t('contact.signup')}</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="bottom-box">
                  {/* <div className="btn-box">
                    <a href="#">
                      <i className="fas fa-arrow-down"></i> {t('contact.customerCare')}
                    </a>
                  </div>
                  <div className="footer-social-link-style1">
                    <ul className="clearfix">
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};


export default Login;
