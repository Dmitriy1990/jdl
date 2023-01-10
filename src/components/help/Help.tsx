import React, { useRef } from "react";
import {
  like,
  view,
  sskoo,
  like1,
  view1,
  sskoo1,
  looker,
  IconArrNav,
} from "../../assets";
import { White } from "../ui/white/White";
import styles from "./style.module.scss";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Help = () => {
  const navigationPrevRef1 = useRef<any>(null);
  const navigationNextRef1 = useRef<any>(null);
  return (
    <div className="container container--mob-nopad">
      <White>
        <div className={styles.container}>
          <h2 className={clsx(styles.title, "animated wow fadeInUpBig")}>
            How will Just Do Luck help you?
          </h2>
          <div className={styles.blocks}>
            <div
              className={clsx(
                styles.block,
                styles["block--one"],
                "animated wow bounce"
              )}
              data-wow-delay=".2s"
            >
              <img src={like1} alt="" className={styles.icon} />
              <div className={styles["block-img"]}>
                <img src={like} alt="" className={styles.block__img} />
              </div>
              <h4 className={styles.block__title}>
                Increase the effectiveness of advertising campaigns
              </h4>
              <p className={styles.block__desc}>
                By strengthening associative ties and increasing involvement in
                social networks, websites, sales platforms
              </p>
            </div>
            <div
              className={clsx(
                styles.block,
                styles["block--two"],
                "animated wow bounce"
              )}
              data-wow-delay="0"
            >
              <img src={sskoo1} alt="" className={styles.icon} />
              <div className={styles["block-img"]}>
                <img src={sskoo} alt="" className={styles.block__img} />
              </div>
              <h4 className={styles.block__title}>
                Reduce the cost of attracting customers
              </h4>
              <p className={styles.block__desc}>
                Reduce the cost of attracting a client by having gamification
                and interactivity tools
              </p>
            </div>
            <div
              className={clsx(
                styles.block,
                styles["block--three"],
                "animated wow bounce"
              )}
              data-wow-delay=".5s"
            >
              <img src={view1} alt="" className={styles.icon} />
              <div className={styles["block-img"]}>
                <img src={view} alt="" className={styles.block__img} />
              </div>
              <h4 className={styles.block__title}>
                Build the system viral marketing
              </h4>
              <p className={styles.block__desc}>
                Build a viral marketing system using emotional response and
                audience loyalty
              </p>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: navigationPrevRef1.current,
              nextEl: navigationNextRef1.current,
            }}
            pagination={true}
            modules={[Navigation, Autoplay, A11y, Pagination]}
            className={clsx(styles.slider, "threeSlider")}
            onBeforeInit={(swiper: any) => {
              swiper.params.navigation.prevEl = navigationPrevRef1.current;
              swiper.params.navigation.nextEl = navigationNextRef1.current;
            }}
            centeredSlides
            loop
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
          >
            <SwiperSlide>
              <div className={clsx(styles.block, styles["block--one"])}>
                <img src={like1} alt="" className={styles.icon} />
                <div className={styles["block-img"]}>
                  <img src={like} alt="" className={styles.block__img} />
                </div>
                <h4 className={styles.block__title}>
                  Increase the effectiveness of advertising campaigns
                </h4>
                <p className={styles.block__desc}>
                  By strengthening associative ties and increasing involvement
                  in social networks, websites, sales platforms
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={clsx(styles.block, styles["block--two"])}>
                <img src={sskoo1} alt="" className={styles.icon} />
                <div className={styles["block-img"]}>
                  <img src={sskoo} alt="" className={styles.block__img} />
                </div>
                <h4 className={styles.block__title}>
                  Reduce the cost of attracting customers
                </h4>
                <p className={styles.block__desc}>
                  Reduce the cost of attracting a client by having gamification
                  and interactivity tools
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={clsx(styles.block, styles["block--three"])}>
                <img src={view1} alt="" className={styles.icon} />
                <div className={styles["block-img"]}>
                  <img src={view} alt="" className={styles.block__img} />
                </div>
                <h4 className={styles.block__title}>
                  Build the system viral marketing
                </h4>
                <p className={styles.block__desc}>
                  Build a viral marketing system using emotional response and
                  audience loyalty
                </p>
              </div>
            </SwiperSlide>
            <div className={styles.nav}>
              <button className={styles["nav-arrow"]} ref={navigationPrevRef1}>
                <IconArrNav />
              </button>
              <div className={styles["nav-count"]}></div>
              <button
                className={clsx(styles["nav-arrow"], styles["nav-arrow--left"])}
                ref={navigationNextRef1}
              >
                <IconArrNav />
              </button>
            </div>
          </Swiper>
          <div className={styles.heading}>
            <h2 className={clsx(styles.title, "animate wow zoomIn")}>
              The modern science of neuroeconomics provides a solid explanation
              of the mechanisms of decision-making and human behavior
            </h2>
          </div>
          <img src={looker} alt="" className={styles.looker} />
          <h4 className={styles.principes__title}>BASIC PRINCIPLES</h4>
          <div className={styles.principes}>
            <div
              className={clsx(styles["principes-item"], "animate wow zoomIn")}
            >
              <div className={styles["principes-item__count"]}>1</div>
              <p className={styles["principes-item__desc"]}>
                Human activities function simultaneously on three interrelated
                levels: <span className={styles.green}>unconscious</span>,{" "}
                <span className={styles.red}>subconscious</span>, and
                <span className={styles.blue}> conscious</span>
              </p>
            </div>
            <div
              className={clsx(styles["principes-item"], "animate wow zoomIn")}
              data-wow-delay=".2s"
            >
              <div className={styles["principes-item__count"]}>2</div>
              <p className={styles["principes-item__desc"]}>
                Recognition of the primary influence of the unconscious and
                subconscious on human consciousness and behavior
              </p>
            </div>
            <div
              className={clsx(styles["principes-item"], "animate wow zoomIn")}
              data-wow-delay=".4s"
            >
              <div className={styles["principes-item__count"]}>3</div>
              <p className={styles["principes-item__desc"]}>
                Recognition of the human emotional sphere as the most important
                after the subconscious, in terms of its influence on the psyche
                and motivation of human behavior
              </p>
            </div>
          </div>
        </div>
      </White>
    </div>
  );
};
