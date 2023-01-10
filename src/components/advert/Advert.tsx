import React, { useRef } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { IconAdvert, IconArrNav } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Advert = () => {
  const navigationPrevRef1 = useRef<any>(null);
  const navigationNextRef1 = useRef<any>(null);

  return (
    <section className={styles.container}>
      <div className="container container--mob-nopad">
        <div className={styles.white}>
          <h2 className={clsx(styles.h2, "animated wow fadeInUp")}>
            Advertising agencies using SaaS JDL Marketing Platform can get
            strategic benefits:
          </h2>
          <div className={styles.boxes}>
            <div className={clsx(styles.box, "wow animate fadeInUp")}>
              <div className={styles["box-head"]}>
                <span className={styles.box__count}>1</span>
                <h4 className={styles.box__title}>Recognition</h4>
              </div>
              <p className={styles.box__desc}>
                Recognition of the primary influence of the unconscious and
                subconscious on human consciousness and behavior{" "}
              </p>
            </div>
            <div
              className={clsx(
                styles.box,
                styles.gradient,
                "wow animate fadeInUp"
              )}
              data-wow-delay=".2s"
            >
              <div className={styles["box-head"]}>
                <span className={styles.box__count}>2</span>
                <h4 className={styles.box__title}>Affordable innovations</h4>
              </div>
              <p className={styles.box__desc}>
                Affordable innovations to create new more efficient combinations
                of services for Clients
              </p>
            </div>
            <div
              className={clsx(styles.box, "wow animate fadeInUp")}
              data-wow-delay=".3s"
            >
              <div className={styles["box-head"]}>
                <span className={styles.box__count}>3</span>
                <h4 className={styles.box__title}>Profits</h4>
              </div>
              <p className={styles.box__desc}>
                Obtaining additional income and increasing company profits
              </p>
            </div>
            <div
              className={clsx(styles.box, "wow animate fadeInUp")}
              data-wow-delay=".4s"
            >
              <div className={styles["box-head"]}>
                <span className={styles.box__count}>4</span>
                <h4 className={styles.box__title}>Gamification</h4>
              </div>
              <p className={styles.box__desc}>
                Increasing the effectiveness of existing marketing and
                traditional types of advertising through gamification
              </p>
            </div>
            <div
              className={clsx(styles.box, "wow animate fadeInUp")}
              data-wow-delay=".1s"
            >
              <div className={styles["box-head"]}>
                <span className={styles.box__count}>5</span>
                <h4 className={styles.box__title}>Marketing strategies</h4>
              </div>
              <p className={styles.box__desc}>
                Ability to create and sell new unique, interactive long-term
                marketing strategies
              </p>
            </div>
            <div
              className={clsx(styles.box, "wow animate fadeInUp")}
              data-wow-delay=".2s"
            >
              <div className={styles["box-head"]}>
                <span className={styles.box__count}>6</span>
                <h4 className={styles.box__title}>New mechanism</h4>
              </div>
              <p className={styles.box__desc}>
                A new mechanism for obtaining new customers and retaining old
                ones
              </p>
            </div>
          </div>
          <div>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              navigation={{
                prevEl: navigationPrevRef1.current,
                nextEl: navigationNextRef1.current,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Navigation, Autoplay, A11y, Pagination]}
              className={clsx(styles.slider, "twoSlider")}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef1.current;
                swiper.params.navigation.nextEl = navigationNextRef1.current;
              }}
              centeredSlides
              loop={false}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
            >
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles["box-head"]}>
                    <span className={styles.box__count}>1</span>
                    <h4 className={styles.box__title}>Recognition</h4>
                  </div>
                  <p className={styles.box__desc}>
                    Recognition of the primary influence of the unconscious and
                    subconscious on human consciousness and behavior{" "}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={clsx(styles.box, styles.gradient)}>
                  <div className={styles["box-head"]}>
                    <span className={styles.box__count}>2</span>
                    <h4 className={styles.box__title}>
                      Affordable innovations
                    </h4>
                  </div>
                  <p className={styles.box__desc}>
                    Affordable innovations to create new more efficient
                    combinations of services for Clients
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles["box-head"]}>
                    <span className={styles.box__count}>3</span>
                    <h4 className={styles.box__title}>Profits</h4>
                  </div>
                  <p className={styles.box__desc}>
                    Obtaining additional income and increasing company profits
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles["box-head"]}>
                    <span className={styles.box__count}>4</span>
                    <h4 className={styles.box__title}>Gamification</h4>
                  </div>
                  <p className={styles.box__desc}>
                    Increasing the effectiveness of existing marketing and
                    traditional types of advertising through gamification
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={styles.box}>
                  <div className={styles["box-head"]}>
                    <span className={styles.box__count}>5</span>
                    <h4 className={styles.box__title}>Marketing strategies</h4>
                  </div>
                  <p className={styles.box__desc}>
                    Ability to create and sell new unique, interactive long-term
                    marketing strategies
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.box}>
                  <div className={styles["box-head"]}>
                    <span className={styles.box__count}>6</span>
                    <h4 className={styles.box__title}>New mechanism</h4>
                  </div>
                  <p className={styles.box__desc}>
                    A new mechanism for obtaining new customers and retaining
                    old ones
                  </p>
                </div>
              </SwiperSlide>
              <div className={styles.nav}>
                <button
                  className={styles["nav-arrow"]}
                  ref={navigationPrevRef1}
                >
                  <IconArrNav />
                </button>
                <div className={styles["nav-count"]}></div>
                <button
                  className={clsx(
                    styles["nav-arrow"],
                    styles["nav-arrow--left"]
                  )}
                  ref={navigationNextRef1}
                >
                  <IconArrNav />
                </button>
              </div>
            </Swiper>
          </div>
          <div className={clsx(styles.slogan, "wow animate slideInUp")}>
            <IconAdvert />
          </div>
        </div>
      </div>
    </section>
  );
};
