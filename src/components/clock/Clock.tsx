import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
  icon15,
  icon16,
  icon17,
  icon18,
  icon19,
  icon20,
  icon21,
  icon22,
  icon23,
  icon24,
  icon25,
  icon26,
  icon27,
  icon28,
  icon29,
  icon30,
  icon31,
  icon32,
  icon33,
  IconAdvert,
  IconClock,
  IconHours,
  IconMinutes,
  IconRound,
  idea,
  uses1,
  uses2,
  uses3,
  uses4,
  uses5,
  IconLogoWhite2,
  hand,
  IconIdea,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "./Idea";

export const Clock = () => {
  const clock_min = useRef<any>(null);
  const clock_hour = useRef<any>(null);
  const [clickedIndex, setClickedIndex] = useState(0);
  useEffect(() => {
    let getMinutesAngleFromCurrentTime = () => {
      let currentTime = new Date();
      let minutes = currentTime.getMinutes() + currentTime.getSeconds() / 60;
      let angle = minutes * 6;
      return angle;
    };
    let getHoursAngleFromCurrentTime = () => {
      let currentTime = new Date();
      let hours =
        (currentTime.getHours() % 12) +
        currentTime.getMinutes() / 60 +
        currentTime.getSeconds() / 3600;
      let angle = (360 / 12) * hours;
      return angle;
    };

    let setMinuteArrowsAngle = () => {
      if (clock_min.current) {
        clock_min.current.style.transform =
          "rotate(" + getMinutesAngleFromCurrentTime() + "deg)";
      }
    };
    let setHourArrowsAngle = () => {
      if (clock_hour.current) {
        clock_hour.current.style.transform =
          "rotate(" + getHoursAngleFromCurrentTime() + "deg)";
      }
    };
    let interval: any;
    let makeClockWork = () => {
      interval = setInterval(() => {
        setMinuteArrowsAngle();
        setHourArrowsAngle();
      }, 1000);
    };

    makeClockWork();
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className="container container--mob-nopad">
        <div className={styles.heading}>
          <h2 className={clsx(styles.title, "animated wow fadeIn")}>
            Tactical benefits for advertising agencies when using SaaS JDL
            Marketing Platform:
          </h2>
        </div>
        <Swiper
          onClick={(swiper: any) => {
            setClickedIndex(swiper.clickedIndex);
          }}
          slidesPerView="auto"
          freeMode={true}
          pagination={false}
          spaceBetween={10}
          className={clsx(styles.slider, "clockSlider")}
        >
          <SwiperSlide>
            <div className={styles.slideClock}>
              Additional opportunities to create and retain large amounts of
              user attention
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideClock}>
              Forming a real emotional connection between the Brand and Users
              (increasing Brand awareness)
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideClock}>
              Improving lead generation and conversion rates
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={styles.clock}>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--one"],
              "animated wow slideInLeft"
            )}
          >
            Additional opportunities to create and retain large amounts of user
            attention
          </div>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--two"],
              "animated wow slideInLeft"
            )}
            data-wow-delay=".1s"
          >
            Forming a real emotional connection between the Brand and Users
            (increasing Brand awareness)
          </div>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--three"],
              "animated wow slideInLeft"
            )}
            data-wow-delay=".2s"
          >
            Improving lead generation and conversion rates
          </div>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--four"],
              "animated wow slideInUp"
            )}
            data-wow-delay=".3s"
          >
            Activation of neural activity in the Consumer's brain
          </div>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--five"],
              "animated wow slideInRight"
            )}
            data-wow-delay=".2s"
          >
            Activation of neural activity in the Consumer's brain
          </div>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--six"],
              "animated wow slideInRight"
            )}
            data-wow-delay=".1s"
          >
            Using game mechanics as the best way to engage the User
          </div>
          <div
            className={clsx(
              styles["text-block"],
              styles["text-block--seven"],
              "animated wow slideInRight"
            )}
          >
            Additional opportunities for converting attention volumes into mass
            targeted actions
          </div>
          <div className={styles.clock__clock}>
            <IconClock />
            <div className={styles.minutes} ref={clock_min}>
              <div className={styles.minutes__round}></div>
              <IconMinutes className={styles.minutes__line} />
            </div>
            <div className={styles.hours} ref={clock_hour}>
              <div className={styles.hours__round}></div>
              <IconHours className={styles.hours__line} />
            </div>
          </div>
          <div className={styles.clock__text}>TIME IS RUNNING OUT</div>
          <IconRound className={styles.clock__round} />
          {/* <IconHours className={styles.clock__hours} />
          <IconMinutes className={styles.clock__minutes} /> */}
        </div>

        <Swiper
          onClick={(swiper: any) => {
            setClickedIndex(swiper.clickedIndex);
          }}
          slidesPerView="auto"
          pagination={false}
          spaceBetween={10}
          className={clsx(styles.slider, "clockSlider")}
        >
          <SwiperSlide>
            <div className={styles.slideClock}>
              Activation of neural activity in the Consumer's brain
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideClock}>
              Using game mechanics as the best way to engage the User
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideClock}>
              Additional opportunities for converting attention volumes into
              mass targeted actions
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className={styles.target}>
          <div className={styles.target__h}></div>
          <div className={styles.target__v}></div>
        </div> */}
        <h2
          className={clsx(
            styles.title,
            styles["title--two"],
            "animated wow zoomIn"
          )}
        >
          Who uses Just do luck?
        </h2>
        <div className={styles.blocks}>
          <div
            className={clsx(styles["blocks-item"], "animated wow slideInUp")}
            data-wow-delay=".1s"
          >
            <img src={uses1} alt="" className={styles["blocks-item__img"]} />
            <p className={styles["blocks-item__text"]}>Advertising agencies</p>
          </div>
          <div
            className={clsx(styles["blocks-item"], "animated wow slideInUp")}
            data-wow-delay=".2s"
          >
            <img src={uses2} alt="" className={styles["blocks-item__img"]} />
            <p className={styles["blocks-item__text"]}>Bloggers</p>
          </div>
          <div
            className={clsx(styles["blocks-item"], "animated wow slideInUp")}
            data-wow-delay=".3s"
          >
            <img src={uses3} alt="" className={styles["blocks-item__img"]} />
            <p className={styles["blocks-item__text"]}>Сelebrities</p>
          </div>
          <div
            className={clsx(styles["blocks-item"], "animated wow slideInUp")}
            data-wow-delay=".4s"
          >
            <img src={uses4} alt="" className={styles["blocks-item__img"]} />
            <p className={styles["blocks-item__text"]}>Streamers</p>
          </div>
          <div
            className={clsx(styles["blocks-item"], "animated wow slideInUp")}
            data-wow-delay=".5s"
          >
            <img src={uses5} alt="" className={styles["blocks-item__img"]} />
            <p className={styles["blocks-item__text"]}>Brands</p>
          </div>
        </div>
      </div>
      <div className={styles.used}>
        <img
          src={hand}
          alt=""
          className={clsx(styles.hand, "animated wow slideInLeft")}
        />
        <h3 className={clsx(styles["used-head"], "animated wow slideInRight")}>
          Using interactive JUST DO LUCK games\raffles partners attract
          attention, increase sales and, most importantly, turn the user from a
          viewer into a participant
        </h3>
        <div className={styles["used-pinkContainer"]}>
          <div className={clsx(styles["used-pink"], "animated wow slideInUp")}>
            This makes it possible to implement national, time-related,
            geographical, cascade strategies of games\raffles involving more and
            more Participants.
          </div>
          <div className={styles.idea}>
            <div className={styles["idea-text"]}>
              <p
                className={clsx(styles["idea-text--one"], "wow animate ")}
                data-wow-delay="1.8s"
              >
                This is
              </p>
              <p
                className={clsx(styles["idea-text--two"], "wow animate ")}
                data-wow-delay="2s"
              >
                incredibly
              </p>
              <p
                className={clsx(styles["idea-text--three"], "wow animate ")}
                data-wow-delay="2.3s"
              >
                cool!
              </p>
            </div>
            <Icon />
          </div>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["text-with-images-mob"]}>
            JUST DO LUCK –<br /> a provider of &nbsp;
            <img src={icon31} alt="" />
            <img src={icon32} alt="" />
            <img src={icon33} alt="" />
            emotion liquidity
            <br />
            <img src={icon21} alt="" className={styles.icon} />
            <img src={icon22} alt="" className={styles.icon} />
            <img src={icon23} alt="" className={styles.icon} />
            <img src={icon24} alt="" className={styles.icon} />
            <img src={icon25} alt="" className={styles.icon} />
            <img src={icon26} alt="" className={styles.icon} />
            <img src={icon27} alt="" className={styles.icon} />
            <br />
            for effective marketing <img src={icon17} alt="" />
            <img src={icon18} alt="" />
            <img src={icon19} alt="" />
            <img src={icon20} alt="" />
          </div>
          <div className={styles["text-with-images"]}>
            <span>JUST DO LUCK – </span>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
            <img src={icon4} alt="" />
            <img src={icon5} alt="" />
            <img src={icon6} alt="" />
            <img src={icon7} alt="" />
            <img src={icon8} alt="" />
            <div className={styles["text-with-images-inner"]}>
              <div className={styles.icons}>
                <img src={icon9} alt="" />
                <img src={icon10} alt="" />
                <img src={icon11} alt="" />
                <img src={icon12} alt="" />
                <img src={icon13} alt="" />
                <img src={icon14} alt="" />
                <img src={icon15} alt="" />
                <img src={icon16} alt="" />
                <img src={icon17} alt="" />
                <img src={icon18} alt="" />
                <img src={icon19} alt="" />
                <img src={icon20} alt="" />
              </div>
              <div className={styles["text-with-images-column"]}>
                <p>a provider of emotion </p>
                <p>
                  liquidity <img src={icon21} alt="" className={styles.icon} />
                  <img src={icon22} alt="" className={styles.icon} />
                  <img src={icon23} alt="" className={styles.icon} />
                  <img src={icon24} alt="" className={styles.icon} />
                  <img src={icon25} alt="" className={styles.icon} />
                  <img src={icon26} alt="" className={styles.icon} />
                  <img src={icon27} alt="" className={styles.icon} />
                  <img src={icon28} alt="" className={styles.icon} />
                </p>
              </div>
            </div>
            <p>
              {" "}
              for effective marketing <img src={icon29} alt="" />
              <img src={icon30} alt="" />
              <img src={icon31} alt="" />
              <img src={icon32} alt="" />
              <img src={icon33} alt="" />
            </p>
          </div>
          <div className={styles.footer}>
            <p className={styles.footer__title}>
              CONSTANTLY EVOKE AN EMOTIONAL RESPONSE
            </p>
            <IconLogoWhite2 className={styles.footer__logo} />
          </div>
        </div>
      </div>
    </div>
  );
};
