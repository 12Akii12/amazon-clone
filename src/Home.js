import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from 'infinite-react-carousel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      {/* const Banner = () => ( */}
  <Slider autoplay={true} autoplaySpeed={5000} duration={500} className="banner" prevArrow={<ArrowBackIosIcon />} nextArrow={<ArrowForwardIosIcon />}>
    <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner Amazon Prime Video" className="banner-image" />
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt="Banner Amazon" className="banner-image" />
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="Banner Amazon" className="banner-image" />
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG_2_en_US_1x._CB412146952_.jpg" alt="Amazon wrap gift" className="banner-image" />
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_1500x600_CV4._CB403243042_.jpg" alt="Banner Amazon Music" className="banner-image" />
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg" alt="Banner Amazon Prime Video" className="banner-image" />
  </Slider>

        <div className="home__row">
          <Product
            id="12321341"
            title="Apple Watch Series 5 (GPS, 40mm) - Gold Aluminum Case with Pink Sport Band"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71jOvjATfPL._AC_SL1500_.jpg"
          />

          <Product
            id="123457"
            title="Dearfoams Women's Mama Bear Slipper"
            price={2567}
            rating={4}
            image="https://m.media-amazon.com/images/I/91KEjTvXSiL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="eufy by Anker, BoostIQ RoboVac 11S (Slim), Robot Vacuum Cleaner"
            price={239.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71TmTj7HjNL._AC_SL1500_.jpg"
          />
          
          <Product
            id="123456"
            title="adidas Women's Cloudfoam Pure Running Shoe"
            price={499.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81zc8i+8qfL._AC_UL480_FMwebp_QL65_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
             <Product
            id="90829333"
            title="Hisense 40-Inch Class H4 Series LED Roku Smart TV with Alexa Compatibility (40H4F, 2020 Model)"
            price={2999.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/71wq7qNoBLL._AC_UY327_FMwebp_QL65_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="221"
            title="Razer Book 13 Laptop: Intel Core i7-1165G7 4 Core, Intel Iris Xe, 13.4 UHD+ Touch"
            price={5200}
            rating={5}
            image="https://m.media-amazon.com/images/I/714G+LKgowL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="223"
            title="Tablet 10 Inch Android 9.0 3G Phone Tablets with 32GB Storage Dual Sim Card 5MP Camera"
            price={2567}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NfcHUmxBL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="224"
            title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep"
            price={999.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71jiGaztijL._AC_UL480_FMwebp_QL65_.jpg"
          />
          
          <Product
            id="225"
            title="Essential Oil Diffuser Bracelet, Aromatherapy Bracelet Jewelry"
            price={499.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/611xSmTZAIL._AC_UL480_FMwebp_QL65_.jpg"
          />

        </div>

        <div className="home__row">
          <Product
            id="331"
            title="Flatware Set, 20-piece Silverware Cutlery Set with Serving Pieces"
            price={5200}
            rating={3}
            image="https://m.media-amazon.com/images/I/61QqLPZGONL._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="332"
            title="AmazonBasics 18-Piece Kitchen Dinnerware Set, Plates, Dishes"
            price={599.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51XgesBWXRL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="333"
            title="Home Hero Kitchen Utensil Set - 23 Nylon Cooking Utensils"
            price={1999.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81VeIhMPNKL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3998"
            title="Rdruko Men's Tracksuit Athletic Full Zip Casual Sports Jogging Gym Sweatsuit"
            price={5200}
            rating={5}
            image="https://m.media-amazon.com/images/I/712MM5Ye9bL._AC_UL480_FMwebp_QL65_.jpg"
          />

          <Product
            id="442"
            title="5 Pack:Men's Dry-Fit Sweat Resistant Active Athletic Performance Shorts"
            price={3299}
            rating={4}
            image="https://m.media-amazon.com/images/I/81jiEBpP6wL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="443"
            title="Wevez Women's Long Indian Wrap Sari Skirt, One Size, Assorted"
            price={999.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/91GURvEKY8L._AC_UL480_FMwebp_QL65_.jpg"
          />
          
          <Product
            id="444"
            title="Indian Western Girls Evening Party dress Designer Lehenga Chaniya"
            price={898.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61IA1A719EL._AC_UL480_FMwebp_QL65_.jpg"
          />

        </div>

      </div>
    </div>
  );
}

export default Home;