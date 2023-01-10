import React, { useRef } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { White } from "../ui/white/White";
import { IconArrBottom, IconArrTop, IconText, IconArrNav } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Work = () => {
  const navigationPrevRef1 = useRef<any>(null);
  const navigationNextRef1 = useRef<any>(null);
  return (
    <div className="container container--mob-nopad">
      <White>
        <div className={styles.container}>
          <h2 className={styles.title}>How does JUST DO LUCK work?</h2>
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            pagination={true}
            spaceBetween={10}
            className={clsx(
              styles.slider,
              "workSlider threeSlider threeSlider--pag"
            )}
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
              <div className={styles["slide-inner"]}>
                <div className={clsx(styles.block, styles["block--one"])}>
                  <div className={styles.block__count}>1</div>
                  <p className={styles.block__text}>
                    Choose a prize and the method of awarding/ receiving the
                    prize
                  </p>
                  <span className={styles["block-arrow--bottom"]}>
                    <IconArrBottom />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-inner"]}>
                <div className={clsx(styles.block, styles["block--two"])}>
                  <span className={styles["block-arrow--top"]}>
                    <IconArrTop />
                  </span>
                  <p className={styles.block__text}>
                    Create a game group, create a game\raffle and link it to the
                    game group + connect analytics
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-inner"]}>
                <div className={clsx(styles.block, styles["block--three"])}>
                  <p className={styles.block__text}>
                    Accept the game and set up the advertising look of the game
                    page
                  </p>
                  <span className={styles["block-arrow--bottom"]}>
                    <IconArrBottom />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-inner"]}>
                <div className={clsx(styles.block, styles["block--four"])}>
                  <p className={styles.block__text}>
                    Choose game interfaces, you can add a widget, connect bots
                    in messengers
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className={styles.nav}>
              {/* <button className={styles["nav-arrow"]} ref={navigationPrevRef1}>
                <IconArrNav />
              </button> */}
              <div className={styles["nav-count"]}></div>
              {/* <button
                className={clsx(styles["nav-arrow"], styles["nav-arrow--left"])}
                ref={navigationNextRef1}
              >
                <IconArrNav />
              </button> */}
            </div>
          </Swiper>
          <Swiper
            slidesPerView="auto"
            freeMode={true}
            pagination={true}
            spaceBetween={10}
            className={clsx(
              styles.slider,
              "workSlider threeSlider threeSlider--pag"
            )}
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
              <div className={styles["slide-inner"]}>
                <div
                  className={clsx(
                    styles.block,
                    styles["block--one"],
                    styles["block--pink"]
                  )}
                >
                  <div
                    className={clsx(
                      styles.block__count,
                      styles["block__count--pink"]
                    )}
                  >
                    2
                  </div>
                  <p className={styles.block__text}>
                    Get QR codes and short links in your personal account
                  </p>
                  <span
                    className={clsx(
                      styles["block-arrow--bottom"],
                      styles["block-arrow--pink"]
                    )}
                  >
                    <IconArrBottom />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-inner"]}>
                <div
                  className={clsx(
                    styles.block,
                    styles["block--two"],
                    styles["block--pink"]
                  )}
                >
                  <span
                    className={clsx(
                      styles["block-arrow--top"],
                      styles["block-arrow--pink"]
                    )}
                  >
                    <IconArrTop />
                  </span>
                  <p className={styles.block__text}>
                    Invite the participants to the game by connecting the social
                    network and other communication channels
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-inner"]}>
                <div
                  className={clsx(
                    styles.block,
                    styles["block--three"],
                    styles["block-arrow--grad"]
                  )}
                >
                  <p className={styles.block__text}>
                    Running the game - determining the winner
                  </p>
                  <span
                    className={clsx(
                      styles["block-arrow--bottom"],
                      styles["block-arrow--pink"]
                    )}
                  >
                    <IconArrBottom />
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-inner"]}>
                <div
                  className={clsx(
                    styles.block,
                    styles["block--four"],
                    styles["block--pink"]
                  )}
                >
                  <p className={styles.block__text}>
                    Get analytics on the draw and award the prize to the Winner
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className={styles.nav}>
              {/* <button className={styles["nav-arrow"]} ref={navigationPrevRef1}>
                <IconArrNav />
              </button> */}
              <div className={styles["nav-count"]}></div>
              {/* <button
                className={clsx(styles["nav-arrow"], styles["nav-arrow--left"])}
                ref={navigationNextRef1}
              >
                <IconArrNav />
              </button> */}
            </div>
          </Swiper>
          {/* <div className={styles.blocks}>
            <div className={clsx(styles.block, styles["block--one"])}>
              <div className={styles.block__count}>1</div>
              <p className={styles.block__text}>
                Choose a prize and the method of awarding/ receiving the prize
              </p>
              <span className={styles["block-arrow--bottom"]}>
                <IconArrBottom />
              </span>
            </div>

            <div className={clsx(styles.block, styles["block--two"])}>
              <span className={styles["block-arrow--top"]}>
                <IconArrTop />
              </span>
              <p className={styles.block__text}>
                Create a game group, create a game\raffle and link it to the
                game group + connect analytics
              </p>
            </div>
            <div className={clsx(styles.block, styles["block--three"])}>
              <p className={styles.block__text}>
                Accept the game and set up the advertising look of the game page
              </p>
              <span className={styles["block-arrow--bottom"]}>
                <IconArrBottom />
              </span>
            </div>
            <div className={clsx(styles.block, styles["block--four"])}>
              <p className={styles.block__text}>
                Choose game interfaces, you can add a widget, connect bots in
                messengers
              </p>
            </div>
          </div>

          <div className={styles.blocks}>
            <div
              className={clsx(
                styles.block,
                styles["block--one"],
                styles["block--pink"]
              )}
            >
              <div
                className={clsx(
                  styles.block__count,
                  styles["block__count--pink"]
                )}
              >
                2
              </div>
              <p className={styles.block__text}>
                Get QR codes and short links in your personal account
              </p>
              <span
                className={clsx(
                  styles["block-arrow--bottom"],
                  styles["block-arrow--pink"]
                )}
              >
                <IconArrBottom />
              </span>
            </div>

            <div
              className={clsx(
                styles.block,
                styles["block--two"],
                styles["block--pink"]
              )}
            >
              <span
                className={clsx(
                  styles["block-arrow--top"],
                  styles["block-arrow--pink"]
                )}
              >
                <IconArrTop />
              </span>
              <p className={styles.block__text}>
                Invite the participants to the game by connecting the social
                network and other communication channels
              </p>
            </div>
            <div
              className={clsx(
                styles.block,
                styles["block--three"],
                styles["block-arrow--grad"]
              )}
            >
              <p className={styles.block__text}>
                Running the game - determining the winner
              </p>
              <span
                className={clsx(
                  styles["block-arrow--bottom"],
                  styles["block-arrow--pink"]
                )}
              >
                <IconArrBottom />
              </span>
            </div>
            <div
              className={clsx(
                styles.block,
                styles["block--four"],
                styles["block--pink"]
              )}
            >
              <p className={styles.block__text}>
                Get analytics on the draw and award the prize to the Winner
              </p>
            </div>
          </div> */}
          <div className={styles.svgtext}>
            <IconText />
          </div>
        </div>
      </White>
    </div>
  );
};
