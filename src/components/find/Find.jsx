import React from "react";

// Card component
import Card from "./Card";

// swiperJS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
// styles
import styles from "./Find.module.css";

const Find = () => {
  return (
    <div className={styles.find}>
      <div className={styles.heading}>
        <h1>Find your drive</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Explore the world's largest car sharing marketplace</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Card image="https://cdn.nettiauto.com/live/2022/08/02/cc0a112ec82e798e-large.jpg" make="Volvo" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://images.customwheeloffset.com/web-compressed/1572100-5-2018-accord-honda-sport-godspeed-project-coilovers-aodhan-aff1-bronze.jpg" make="Honda" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://hips.hearstapps.com/hmg-prod/images/2022-kia-stinger-gt-209-1615916144.jpg?crop=0.694xw:0.521xh;0.163xw,0.149xh&resize=1200:*" make="Kia" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80" make="Audi" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image="https://cdn11.bigcommerce.com/s-ux3o9miy8b/images/stencil/1280x1280/products/9368/15263/blob__94396.1655086712.jpg?c=1" make="Jeep" />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image="https://editorials.autotrader.ca/media/200724/2023-nissan-z-one-letter-says-it-all-again-1.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=132737164646530000"
              make="Nissan"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={"https://i0.wp.com/practicalmotoring.com.au/wp-content/uploads/2021/05/2021-Subaru-Outback-AWD-Sport-669938.jpg?resize=1200%2C560&ssl=1"} make="Subaru" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
