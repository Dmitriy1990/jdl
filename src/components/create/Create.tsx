import React, { useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import {
  IconAttention2,
  IconLogoWhite3,
  IconMan,
  IconPeople,
  IconRedArrow,
  IconStep,
  people,
  IconArrNav,
} from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper";
import "swiper/css";
import { ModalComponent } from "./Modal";

const content = [
  {
    id: 1,
    texts: [
      { ship: "just", text: "Simple choice: heads or tails?" },
      {
        ship: "understandable",
        text: "Choice of one of two equally possible and equally probable options",
      },
      {
        ship: "honestly",
        text: "Always equal probability - 50% to 50%",
      },
      {
        ship: "Fair",
        text: "100% equal conditions for everyone all the time",
      },
    ],
  },
  {
    id: 2,
    texts: [
      {
        ship: "Micro-attention",
        text: `Short selective concentration of consciousness (short-term neural activity) - "algorithmic" value `,
      },
      {
        ship: "Micro-choice",
        text: "Hundreds of times we make it, expressing our free will, thereby determining our lives. It's language of freedom.",
      },
      {
        ship: "Micro-time",
        text: "The world is accelerating, time is shrinking, seconds are valuable today!",
      },
      {
        ship: "Micro-action",
        text: "Does not cause fatigue, fatigue, satiety",
      },
    ],
  },
  {
    id: 3,
    texts: [
      {
        ship: "TOTALLY TRANSPARENT",
        text: "All participants know and see their choice, they realize that if they guessed, you move on, if they don't guess, you're out. Manipulation and misunderstanding - excluded.",
      },
      {
        ship: "TESTED",
        text: `Everyone can check "why did you get heads or tails? by going to the JDL algorithm site. Any value can be double-checked and you can do the calculations yourself.`,
      },
      {
        ship: "INDEPENDENT",
        text: "No one can influence the work of the JDL algorithm and the mechanism for determining the winner, except for the choice of the participant",
      },
      {
        ship: "PUBLIC",
        text: "Everything is out in the open. Everyone, everything can see.",
      },
    ],
  },
  {
    id: 4,
    texts: [
      {
        ship: "THE IMPOSSIBLE IS POSSIBLE",
        text: "Yesterday there was no JDL, but today, relying only on your right to choose, you can win any prize that will be drawn.",
      },
      {
        ship: "THE INACCESSIBLE IS ACCESSIBLE",
        text: "Yesterday the dream was far away and inaccessible, today a few clicks of the mouse or pokes in the monitor are enough to make the desired reality.",
      },
      {
        ship: "COMPLEX - SIMPLE",
        text: "The world is constantly becoming more complex, and we simplify by making the complex simple.",
      },
      {
        ship: "EXPENSIVE – FREE",
        text: "The world is upside down. Luck and intuition determine what is free and what is unavailable.",
      },
    ],
  },
];

type Obj = {
  id: number;
  texts: { ship: string; text: string }[];
};

export const Create = () => {
  const [modal, setModal] = useState<number | null>(null);
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      <div className="container">
        <ModalComponent
          open={typeof modal === "number"}
          onClose={() => setModal(null)}
          content={modal !== null ? content[modal] : null}
        />
        <div className={styles.wrap}>
          <div className={styles.head}>
            <IconLogoWhite3 />
          </div>
        </div>
        <div className={styles["wrap--slider"]}>
          <div className="swiper-button-prev">
            <IconArrNav />
          </div>
          <div className="swiper-button-next">
            <IconArrNav />
          </div>
          <Swiper
            className={clsx(styles.slider, "mySwiper")}
            spaceBetween={30}
            mousewheel={{
              invert: true,
            }}
            // navigation={{
            //   prevEl: navigationPrevRef.current,
            //   nextEl: navigationNextRef.current,
            // }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Mousewheel, Navigation, Pagination]}
            // onBeforeInit={(swiper: any) => {
            //   swiper.params.navigation.prevEl = navigationPrevRef.current;
            //   swiper.params.navigation.nextEl = navigationNextRef.current;
            // }}
          >
            {/* <button className={styles["nav-arrow"]} ref={navigationPrevRef}>
              <IconArrNav />
            </button>
            <button
              className={clsx(styles["nav-arrow"], styles["nav-arrow--left"])}
              ref={navigationNextRef}
            >
              <IconArrNav />
            </button> */}
            <SwiperSlide>
              <div className={styles["slide-wrap"]}>
                <div className={styles["slide-left"]}>
                  <h3 className={styles.slide__title}>
                    What creates subconscious and emotional attention?
                  </h3>
                  <span className={styles.slide__count}>1</span>
                  <p className={styles.slide__desc}>
                    Growing volumes of attention generate free online draws JUST
                    DO LUCK in which winning depends solely on the Participant
                    himself{" "}
                  </p>
                  <div
                    className={styles.slide__read}
                    onClick={() => setModal(0)}
                  >
                    READ MORE
                  </div>
                </div>
                <div className={styles["slide-right"]}>
                  <div className={styles.slide__ship}>just</div>
                  <div className={styles.slide__ship}>understandable</div>
                  <div className={styles.slide__ship}>honestly</div>
                  <div className={styles.slide__ship}>Fair</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-wrap"]}>
                <div className={styles["slide-left"]}>
                  <h3 className={styles.slide__title}>
                    What creates subconscious and emotional attention?
                  </h3>
                  <span className={styles.slide__count}>2</span>
                  <p className={styles.slide__desc}>
                    <a
                      href="/"
                      className={clsx(styles.slide__link, styles.block)}
                    >
                      JUST DO LUCK
                    </a>{" "}
                    вengages an ever-increasing mass of people by identifying
                    with the changes that are shaping new values:
                  </p>
                  <div
                    className={styles.slide__read}
                    onClick={() => setModal(1)}
                  >
                    READ MORE
                  </div>
                </div>
                <div className={styles["slide-right"]}>
                  <div className={styles.slide__ship}>micro - attention</div>
                  <div className={styles.slide__ship}>micro - choice</div>
                  <div className={styles.slide__ship}>micro - time</div>
                  <div className={styles.slide__ship}>micro – action</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-wrap"]}>
                <div className={styles["slide-left"]}>
                  <h3 className={styles.slide__title}>
                    What creates subconscious and emotional attention?
                  </h3>
                  <span className={styles.slide__count}>3</span>
                  <p className={styles.slide__desc}>
                    <a href="/" className={clsx(styles.slide__link)}>
                      JUST DO LUCK
                    </a>{" "}
                    draws are held in conditions of transparency and impeccable
                    honesty of gameplay processes contributing to the formation
                    of long-term unshakable confidence of Participants:
                  </p>
                  <div
                    className={styles.slide__read}
                    onClick={() => setModal(2)}
                  >
                    READ MORE
                  </div>
                </div>
                <div className={styles["slide-right"]}>
                  <div className={styles.slide__ship}>TOTALLY TRANSPARENT</div>
                  <div className={styles.slide__ship}>TESTED</div>
                  <div className={styles.slide__ship}>INDEPENDENT</div>
                  <div className={styles.slide__ship}>PUBLIC</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles["slide-wrap"]}>
                <div className={styles["slide-left"]}>
                  <h3 className={styles.slide__title}>
                    What creates subconscious and emotional attention?
                  </h3>
                  <span className={styles.slide__count}>4</span>
                  <p className={styles.slide__desc}>
                    Here and now{" "}
                    <a href="/" className={clsx(styles.slide__link)}>
                      JUST DO LUCK
                    </a>{" "}
                    shenanigans create additional favorable opportunities for
                    people
                  </p>
                  <div
                    className={styles.slide__read}
                    onClick={() => setModal(3)}
                  >
                    READ MORE
                  </div>
                </div>
                <div className={styles["slide-right"]}>
                  <div className={styles.slide__ship}>
                    THE IMPOSSIBLE IS POSSIBLE{" "}
                  </div>
                  <div className={styles.slide__ship}>
                    THE INACCESSIBLE IS ACCESSIBLE{" "}
                  </div>
                  <div className={styles.slide__ship}>COMPLEX - SIMPLE </div>
                  <div className={styles.slide__ship}>EXPENSIVE – FREE</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles["column-list"]}>
          <div className={styles["slide-wrap"]}>
            <div className={styles["slide-left"]}>
              <h3 className={styles.slide__title}>
                What creates subconscious and emotional attention?
              </h3>
              <span className={styles.slide__count}>1</span>
              <p className={styles.slide__desc}>
                Growing volumes of attention generate free online draws JUST DO
                LUCK in which winning depends solely on the Participant himself{" "}
              </p>
              <div className={styles.slide__read} onClick={() => setModal(0)}>
                READ MORE
              </div>
            </div>
            <div className={styles["slide-right"]}>
              <div className={styles.slide__ship}>just</div>
              <div className={styles.slide__ship}>understandable</div>
              <div className={styles.slide__ship}>honestly</div>
              <div className={styles.slide__ship}>Fair</div>
            </div>
          </div>
          <div className={styles["slide-wrap"]}>
            <div className={styles["slide-left"]}>
              <h3 className={styles.slide__title}>
                What creates subconscious and emotional attention?
              </h3>
              <span className={styles.slide__count}>2</span>
              <p className={styles.slide__desc}>
                <a href="/" className={clsx(styles.slide__link, styles.block)}>
                  JUST DO LUCK
                </a>{" "}
                вengages an ever-increasing mass of people by identifying with
                the changes that are shaping new values:
              </p>
              <div className={styles.slide__read} onClick={() => setModal(1)}>
                READ MORE
              </div>
            </div>
            <div className={styles["slide-right"]}>
              <div className={styles.slide__ship}>micro - attention</div>
              <div className={styles.slide__ship}>micro - choice</div>
              <div className={styles.slide__ship}>micro - time</div>
              <div className={styles.slide__ship}>micro – action</div>
            </div>
          </div>
          <div className={styles["slide-wrap"]}>
            <div className={styles["slide-left"]}>
              <h3 className={styles.slide__title}>
                What creates subconscious and emotional attention?
              </h3>
              <span className={styles.slide__count}>3</span>
              <p className={styles.slide__desc}>
                <a href="/" className={clsx(styles.slide__link)}>
                  JUST DO LUCK
                </a>{" "}
                draws are held in conditions of transparency and impeccable
                honesty of gameplay processes contributing to the formation of
                long-term unshakable confidence of Participants:
              </p>
              <div className={styles.slide__read} onClick={() => setModal(2)}>
                READ MORE
              </div>
            </div>
            <div className={styles["slide-right"]}>
              <div className={styles.slide__ship}>TOTALLY TRANSPARENT</div>
              <div className={styles.slide__ship}>TESTED</div>
              <div className={styles.slide__ship}>INDEPENDENT</div>
              <div className={styles.slide__ship}>PUBLIC</div>
            </div>
          </div>
          <div className={styles["slide-wrap"]}>
            <div className={styles["slide-left"]}>
              <h3 className={styles.slide__title}>
                What creates subconscious and emotional attention?
              </h3>
              <span className={styles.slide__count}>4</span>
              <p className={styles.slide__desc}>
                Here and now{" "}
                <a href="/" className={clsx(styles.slide__link)}>
                  JUST DO LUCK
                </a>{" "}
                shenanigans create additional favorable opportunities for people
              </p>
              <div className={styles.slide__read} onClick={() => setModal(3)}>
                READ MORE
              </div>
            </div>
            <div className={styles["slide-right"]}>
              <div className={styles.slide__ship}>
                THE IMPOSSIBLE IS POSSIBLE{" "}
              </div>
              <div className={styles.slide__ship}>
                THE INACCESSIBLE IS ACCESSIBLE{" "}
              </div>
              <div className={styles.slide__ship}>COMPLEX - SIMPLE </div>
              <div className={styles.slide__ship}>EXPENSIVE – FREE</div>
            </div>
          </div>
        </div>
        <div className={styles.heading}>
          <div className={styles.numbers}>
            <IconStep />
          </div>
          <h2>
            Create a controlled dynamic of emotional attention and interest{" "}
          </h2>
          <p>Growing Playgroups of Raffle Participants - Creating Value! </p>
        </div>
        <div className={styles.content}>
          <div className={styles["content-inner"]}>
            <div className={styles.twoicons}>
              <IconMan className={styles.man} />
              <IconAttention2 className={styles.round} />
            </div>

            <IconRedArrow className={styles.arr} />
            <img src={people} alt="" />
            <IconRedArrow className={styles.arr} />
            <div className={styles["people-wrap"]}>
              <IconPeople className={styles.people} />
              <IconPeople className={clsx(styles.people, styles.mob)} />
            </div>
          </div>
        </div>
        <a href="/" className={styles.button}>
          Try on yourself
        </a>
      </div>
    </div>
  );
};
