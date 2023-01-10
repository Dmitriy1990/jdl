import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { White } from "../ui/white/White";
import {
  IconAttention,
  IconCurved,
  piramid,
  weHelp,
  IconArrNav,
  graph,
  key,
  lock,
  line1,
  line2,
  line3,
  piramidMob,
  IconPiramid,
  IconAtten,
  IconPiramidPC,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { OfferModal } from "./OfferModal";
import { SuccesModal } from "./SuccesModal";

export const Customers = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigationPrevRef1 = useRef<any>(null);
  const navigationNextRef1 = useRef<any>(null);

  const openSuccess = () => {
    setSuccess(true);
  };

  return (
    <div className="container container--mob-nopad">
      <OfferModal
        open={open}
        onClose={() => setOpen(false)}
        openSuccess={openSuccess}
      />
      <SuccesModal open={success} onClose={() => setSuccess(false)} />
      <White>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2 className={styles.title}>What value do our Customers get?</h2>
          </div>
          <div className={styles.qua}>
            <div className={styles["qua-inner"]}>
              <div className={styles["qua-item"]}>
                <h3 className={styles["qua-item__title"]}>
                  Quantitative values
                </h3>
                <ol className={styles["qua-item__list"]}>
                  <li>
                    Increase the amount of attention directed to the brand,
                    product or service
                  </li>
                  <li>Increase brand, product or service recognition</li>
                  <li>Increase conversion metrics.</li>
                  <li>Increase sales (directly and indirectly)</li>
                  <li>Expand the potential target audience</li>
                  <li>Expand the attention trap range (long-term benefits)</li>
                </ol>
              </div>
              <div className={styles["qua-item"]}>
                <h3 className={styles["qua-item__title"]}>Quality values</h3>
                <ol className={styles["qua-item__list"]}>
                  <li>
                    The company's commitment to the global trend commitment to
                    the world trend of mitigating social and economic inequality
                  </li>
                  <li>
                    the Company's conscious involvement in value distribution,
                    based on the principles of absolute fairness for people
                  </li>
                  <li>
                    Additional opportunities for building loyalty programs
                  </li>
                  <li>
                    Friendship with the principles of behavioral economics
                  </li>
                  <li>
                    Increased opportunities in the organization of an
                    interactive dialogue with the target audience
                  </li>
                </ol>
              </div>
            </div>
            <IconCurved className={styles.qua__curved} />
          </div>
          <div className={styles.offer}>
            <h3 className={styles.offer__title}>
              WIN THE COMPETITION FOR ATTENTION
            </h3>
            <button onClick={() => setOpen(true)} className={styles.offer__btn}>
              GET A COMMERCIAL OFFERе
            </button>
          </div>
          <div className={styles.heading2}>
            <h2 className={styles.title}>
              The dynamics of growth and volume of the game group participating
              in draws determines the degree of value of mutually{" "}
              <span> beneficial cooperation</span>
            </h2>
          </div>

          <IconPiramidPC className={styles.piramid} />
          <IconPiramid className={styles["piramid--mob"]} />
          <img src={weHelp} alt="" className={styles.weHelp} />

          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            navigation={{
              prevEl: navigationPrevRef1.current,
              nextEl: navigationNextRef1.current,
            }}
            pagination={true}
            modules={[Navigation, Autoplay, A11y, Pagination]}
            className={clsx(styles.slider, "threeSlider graphSlide")}
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
              <div className={styles.slide}>
                <img src={lock} alt="" className={styles.slide__img} />
                <img
                  src={line1}
                  alt=""
                  className={clsx(
                    styles.slide__line,
                    styles["slide__line--one"]
                  )}
                />
                <h3 className={styles.slide__title}>Attention Capture</h3>
                <p className={styles.slide__desc}>
                  Occurs through PREVENTION, a special working state of
                  consciousness, a selective increase in sensitivity to
                  "inclusion.
                  <br />
                  <br />
                  In Just do luck it occurs: - involuntarily in response to a
                  stimulus - on the person's own initiative - As a consequence
                  of an external instruction.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img src={key} alt="" className={styles.slide__img} />
                <img src={line3} alt="" className={styles.slide__line} />
                <h3 className={styles.slide__title}>Attention management</h3>
                <p className={styles.slide__desc}>
                  The social engineering of Just do luck game mechanics models
                  motivated behavior
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <img
                  src={graph}
                  alt=""
                  className={clsx(
                    styles.slide__img,
                    styles["slide__img--three"]
                  )}
                />
                <img src={line2} alt="" className={styles.slide__line} />
                <h3 className={styles.slide__title}>Attention Scaling</h3>
                <p className={styles.slide__desc}>
                  The constant growth of your gaming group (target audience)
                  participating in your pranks comes from people understanding
                  that not using Just do luck means unnecessarily limiting their
                  OPPORTUNITY.
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

          <div className={styles.heading3}>
            <h2 className={styles.title}>
              We will create a powerful attention magnet for your business!{" "}
            </h2>
            <p>
              Interaction of cognitive and emotional neural mechanisms of the
              brain determine modern behavioral patterns of society
            </p>
          </div>

          <div className={styles.icon}>
            <IconAtten className={styles.icon__atten} />
            <IconAttention className={styles.icon__round} />
          </div>
          <a href="/" className={styles.btn}>
            Go to the main site
          </a>
        </div>
      </White>
    </div>
  );
};
