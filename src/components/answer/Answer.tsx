import React, { useRef } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import {
  IconArrBottom,
  IconArrTop,
  IconArrNav,
  IconRedBorder,
  IconLike,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useWindowSize from "../../hooks/useWindowSize";

export const Answer = () => {
  const navigationPrevRef1 = useRef<any>(null);
  const navigationNextRef1 = useRef<any>(null);
  const size = useWindowSize();
  return (
    <div className={styles.answer}>
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.heading__left}>
            Need Attention to Customer brands?
          </span>
          <span className={styles.heading__right}>
            Need the most valuable currency of the 21st century?
          </span>
        </div>
      </div>
      <Swiper
        slidesPerView="auto"
        freeMode={true}
        pagination={true}
        spaceBetween={23}
        className={clsx(styles.slider, "workSlider  threeSlider--white")}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = navigationPrevRef1.current;
          swiper.params.navigation.nextEl = navigationNextRef1.current;
        }}
        navigation={{
          prevEl: navigationPrevRef1.current,
          nextEl: navigationNextRef1.current,
        }}
        modules={[Navigation, Autoplay, A11y, Pagination]}
      >
        <SwiperSlide>
          <div className={styles.steps}>
            <div className={styles["steps-one"]}>
              Register
              <span
                className={clsx(
                  styles["steps-arrow--top"],
                  styles["steps-arrow--white"],
                  styles.first
                )}
              >
                <IconArrTop />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.steps}>
            <div className={clsx(styles["steps-block"], styles["steps-two"])}>
              Get 14 days of free maximum functionality (free-trial) and pass
              onboarding
              <span
                className={clsx(
                  styles["steps-arrow--bottom"],
                  styles["steps-arrow--white"]
                )}
              >
                <IconArrBottom />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.steps}>
            <div className={clsx(styles["steps-block"], styles["steps-three"])}>
              Play games and learn how to build strategies for setuping games
              \raffles
              <span
                className={clsx(
                  styles["steps-arrow--top"],
                  styles["steps-arrow--white"]
                )}
              >
                <IconArrTop />
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.steps}>
            <div className={clsx(styles["steps-block"], styles["steps-four"])}>
              Invite your Clients to join the attention economy of the future
              and become part of a more fair socially oriented society.
              <IconLike />
            </div>
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
      <div className="container">
        <div className={styles["steps-wrap"]}>
          <div className={styles.steps}>
            <div className={styles["steps-one"]}>
              Register
              <span
                className={clsx(
                  styles["steps-arrow--top"],
                  styles["steps-arrow--white"],
                  styles.first
                )}
              >
                <IconArrTop />
              </span>
            </div>
            <div className={clsx(styles["steps-block"], styles["steps-two"])}>
              Get 14 days of free maximum functionality (free-trial) and pass
              onboarding
              <span
                className={clsx(
                  styles["steps-arrow--bottom"],
                  styles["steps-arrow--white"]
                )}
              >
                <IconArrBottom />
              </span>
            </div>
            <div className={clsx(styles["steps-block"], styles["steps-three"])}>
              Play games and learn how to build strategies for setuping games
              \raffles
              <span
                className={clsx(
                  styles["steps-arrow--top"],
                  styles["steps-arrow--white"]
                )}
              >
                <IconArrTop />
              </span>
            </div>
            <div className={clsx(styles["steps-block"], styles["steps-four"])}>
              Invite your Clients to join the attention economy of the future
              and become part of a more fair socially oriented society.
              <IconLike />
            </div>
          </div>
        </div>
        <div className={styles.heading2}>
          <h2 className={styles.heading2__title}>Answer yourself </h2>
        </div>

        <div className={styles.twoblocks}>
          <div
            className={clsx(
              styles["twoblocks-block"],
              styles["twoblocks-left"]
            )}
          >
            <div className={styles["twoblocks-block__count"]}>
              1 <IconRedBorder />
            </div>
            How much attention does your brand "hold" in that second?
          </div>
          <div className={styles["twoblocks-block"]}>
            <div className={styles["twoblocks-block__count"]}>
              2<IconRedBorder />
            </div>
            How many people have a dopamine release? (in any way related to your
            business)
          </div>
        </div>
      </div>
    </div>
  );
};
