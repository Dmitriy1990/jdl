import React, { useState, useRef } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { White } from "../ui/white/White";
import { SwitchComponent } from "../ui/switch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  cases1,
  IconArrNav,
  cases2,
  cases3,
  IconArrDown,
  calc,
  IconCalc,
} from "../../assets";
import { Articles } from "../articles";
import { articles } from "../../mock";
import { News } from "../News";
import { Faq } from "../faq";
import useWindowSize from "../../hooks/useWindowSize";
import ReactTooltip from "react-tooltip";
import { CalcExample } from "./CalcExample";

export const Pricing = () => {
  const size = useWindowSize();
  const [checked, setChecked] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeidx, setActiveIdx] = useState(0);
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);
  const [minOpen, setMinOpen] = useState(false);
  const [freeOpen, setFreeOpen] = useState(false);
  const [midOpen, setMidOpen] = useState(false);
  const [maxOpen, setMaxOpen] = useState(false);
  const [calcExaple, setCalcExample] = useState(false);

  const refFree = useRef<HTMLDivElement>(null);
  const refMin = useRef<HTMLDivElement>(null);
  const refMid = useRef<HTMLDivElement>(null);
  const refMax = useRef<HTMLDivElement>(null);

  const refTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };

  return (
    <div className="container">
      <CalcExample open={calcExaple} onClose={() => setCalcExample(false)} />
      <White>
        <div className={styles.container}>
          <div className={styles.heading} id="pricing">
            <h2 className={styles.title}>Pricing </h2>
            <p className={styles.subtitle}>
              Just do luck pricing is flexible and focused on providing our
              Customers with fair compensation and tangible value from the use
              of the service.{" "}
            </p>
            <br />
            <p className={styles.subtitle}>
              We offer 4 service packages with different combinations of
              features.
            </p>
          </div>
          <ReactTooltip
            id="tbl"
            place={"top"}
            type={"dark"}
            effect={"float"}
            multiline={true}
            borderClass="tooltip-border"
            className="tooltip2"
            arrowColor="#97abc0"
          />

          <div className={styles.table}>
            <div className={styles["table-row"]}>
              <div className={clsx(styles["table-col"], styles.bnone)}></div>
              <div className={clsx(styles["table-col"], styles.bnone)}>
                <div className={clsx(styles.head)}>Free</div>
              </div>
              <div className={clsx(styles["table-col"], styles.bnone)}>
                <div className={clsx(styles.head)}>Min</div>
              </div>
              <div className={clsx(styles["table-col"], styles.bnone)}>
                <div className={clsx(styles.head)}>Mid</div>
              </div>
              <div className={clsx(styles["table-col"], styles.bnone)}>
                <div className={clsx(styles.head)}>Max</div>
              </div>
            </div>
            <div className={styles["table-body"]}>
              <div className={styles["table-row"]}>
                <div className={clsx(styles["table-col"], styles.bbnone)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>
                      Number of games <span>(pcs./monthly)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of raffles that can be held during the month"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;30</span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;500</span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;300</span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>no limit</span>
                  </div>
                </div>
              </div>
              <div className={styles["table-row"]}>
                <div className={clsx(styles["table-col"], styles.bbnone)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>
                      Number of players per game <span>(people/game)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Maximum number of participants within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;500</span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;5 000</span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;20 000</span>
                  </div>
                </div>
                <div className={styles["table-col"]}>
                  <div className={clsx(styles.text, styles.center)}>
                    <span>&#60;40 000</span>
                  </div>
                </div>
              </div>
              <div className={styles["table-row"]}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>
                      Cost of service package <span>($/1 year)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="About"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles.switchContainer}>
                    <span
                      className={clsx(
                        styles.switchContainer__label,
                        !checked && styles.active
                      )}
                    >
                      Monthly
                    </span>
                    <div className={styles["switchContainer-inner"]}>
                      <SwitchComponent
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                    </div>
                    <span
                      className={clsx(
                        styles.switchContainer__label,
                        checked && styles.active
                      )}
                    >
                      Yearly (-20%)
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.price, styles.center)}>$ 0</p>
                  <a
                    href="/"
                    className={clsx(styles.btn, styles["btn--outline"])}
                  >
                    Try
                  </a>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.price, styles.center)}>$ 190</p>
                  <a href="/" className={styles.btn}>
                    Buy
                  </a>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.price, styles.center)}>$ 490</p>
                  <a href="/" className={styles.btn}>
                    Buy
                  </a>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.price, styles.center)}>$ 1190</p>
                  <a href="/" className={styles.btn}>
                    Buy
                  </a>
                  <a href="/" className={styles.link}>
                    free-trial 3 day
                  </a>
                </div>
              </div>
              <div className={clsx(styles["table-row"], styles.bg)}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Who benefits </p>
                    <span
                      className={clsx(styles.help, styles["help--white"])}
                      data-for="tbl"
                      data-tip="Recommended raffle scale"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}></p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>
                    Local city small draws
                  </p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>
                    Draws for large cities
                  </p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>
                    National draws
                  </p>
                </div>
              </div>
              <div className={clsx(styles["table-row"])}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Promotional look (design) </p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="Format of the raffle screen display"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>standard</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>standard</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>
                    standard plus
                  </p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>
                    standard plus
                  </p>
                </div>
              </div>
              <div className={clsx(styles["table-row"])}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Number of banners</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="Number of advertising banners on the raffle screen"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>1</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>1</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>3</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>3</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"], styles.bg)}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"])}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Number of external links</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>2</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>2</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>4</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>&#62;4</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"], styles.bg)}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Integration into the streaming technology draw</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"])}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Open API JDL interface</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="Integration with the API of our service to develop even more attractive marketing tools"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"], styles.bg)}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Creating your own Groups</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="Create your own communities within our platform. Another opportunity to hold the attention of your audience."
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"])}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Exceeding the limit on players in one game</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="If you have reached the limit of the number of participants in one raffle, then we open the opportunity for you to exceed this limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>impossible</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>impossible</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>yes</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"], styles.bg)}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div
                    className={clsx(styles.text, styles.flex)}
                    style={{ lineHeight: "21px" }}
                  >
                    <p>
                      Cost of exceeding the limit on players in one game
                      (%/person){" "}
                      <span
                        className={styles.lnk}
                        onClick={() => setCalcExample(true)}
                      >
                        calculation example
                      </span>
                    </p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="The cost of each additional participant over the limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>_</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>_</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>0,02</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>0,02</p>
                </div>
              </div>
              <div className={clsx(styles["table-row"])}>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    <p>Payment for exceeding the limit on players</p>
                    <span
                      className={clsx(styles.help)}
                      data-for="tbl"
                      data-tip="Payment time for exceeding the number of participants in the raffles"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p className={clsx(styles.text, styles.center)}>no</p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p
                    className={clsx(styles.text, styles.center)}
                    style={{ lineHeight: "21px" }}
                  >
                    at the end of the period
                  </p>
                </div>
                <div className={clsx(styles["table-col"], styles.pad)}>
                  <p
                    className={clsx(styles.text, styles.center)}
                    style={{ lineHeight: "21px" }}
                  >
                    at the end of the period
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={clsx(styles["table-mob-wrap"], "container")}>
            <div className={styles["table-mob__label"]}>Free</div>
            <div className={styles["table-mob"]} ref={refFree}>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.bnone)}>
                  <div className={clsx(styles.text, styles.flex)}>
                    Cost of service package <span>($/1 year)</span>
                  </div>
                  <br />
                  <div className={styles["table-mob-head"]}>
                    <p className={clsx(styles.price, styles.center)}>$ 0</p>
                    <a
                      href="/"
                      className={clsx(styles.btn, styles["btn--outline"])}
                    >
                      Try
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  styles["table-mob-row"],
                  styles["table-mob-row--bg"]
                )}
              >
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of games <span>(pcs./monthly)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Payment time for exceeding the number of participants in the raffles"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;30</span>
                </div>
              </div>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of players per game <span>(people/game)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Maximum number of participants within one raffle"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;500</span>
                </div>
              </div>
              {!freeOpen && (
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={styles["table-mob-col"]}>
                    <div
                      className={styles.more}
                      onClick={() => setFreeOpen(true)}
                    >
                      <div className={styles.more__label}>Show all</div>
                      <div className={styles.more__icon}>
                        <IconArrDown />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={clsx(
                  styles["table-mob--acc"],
                  freeOpen && styles.open
                )}
              >
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Promotional look <span>(design)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Format of the raffle screen display"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>standard</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={styles["table-mob-col"]}>
                    <p>Who benefits</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Recommended raffle scale"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>standard</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of banners</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Number of advertising banners on the raffle screen"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>1</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of external links</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>2</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integration into the streaming technology draw</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Open API JDL interface</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Integration with the API of our service to develop even more attractive marketing tools"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span></span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Creating your own Groups</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Create your own communities within our platform. Another opportunity to hold the attention of your audience."
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Exceeding the limit on players in one game</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="If you have reached the limit of the number of participants in one raffle, then we open the opportunity for you to exceed this limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>impossible</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Cost of exceeding the limit on players in one game{" "}
                      <span>(%/person) </span>{" "}
                      <span
                        className={styles.lnk}
                        onClick={() => setCalcExample(true)}
                      >
                        calculation example
                      </span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The cost of each additional participant over the limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>_</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Payment for exceeding the limit on players</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Payment time for exceeding the number of participants in the raffles"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                {freeOpen && (
                  <div
                    className={clsx(
                      styles["table-mob-row"],
                      styles["table-mob-row--bg"]
                    )}
                  >
                    <div className={styles["table-mob-col"]}>
                      <div
                        className={styles.more}
                        onClick={() => {
                          setFreeOpen(false);
                          refTo(refFree);
                        }}
                      >
                        <div className={styles.more__label}>Show less</div>
                        <div
                          className={styles.more__icon}
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <IconArrDown />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles["table-mob__label"]}>Min</div>
            <div className={styles["table-mob"]} ref={refMin}>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.bnone)}>
                  <div className={styles.text}>
                    Cost of service package <span>($/1 year)</span>
                  </div>
                  <br />
                  <div className={styles["table-mob-head"]}>
                    <p className={clsx(styles.price, styles.center)}>$ 190</p>
                    <a href="/" className={clsx(styles.btn)}>
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  styles["table-mob-row"],
                  styles["table-mob-row--bg"]
                )}
              >
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of games <span>(pcs./monthly)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Payment time for exceeding the number of participants in the raffles"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;90</span>
                </div>
              </div>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of players per game <span>(people/game)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Maximum number of participants within one raffle"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;5 000</span>
                </div>
              </div>
              {!minOpen && (
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={styles["table-mob-col"]}>
                    <div
                      className={styles.more}
                      onClick={() => setMinOpen(true)}
                    >
                      <div className={styles.more__label}>Show all</div>
                      <div className={styles.more__icon}>
                        <IconArrDown />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={clsx(
                  styles["table-mob--acc"],
                  minOpen && styles.open
                )}
              >
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Promotional look <span>(design)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Format of the raffle screen display"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>standard</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Who benefits</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Recommended raffle scale"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>Local city small draws</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of banners</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Number of advertising banners on the raffle screen"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>1</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of external links</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>2</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integration into the streaming technology draw</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Open API JDL interface</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Integration with the API of our service to develop even more attractive marketing tools"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span></span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Creating your own Groups</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Create your own communities within our platform. Another opportunity to hold the attention of your audience."
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Exceeding the limit on players in one game</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="If you have reached the limit of the number of participants in one raffle, then we open the opportunity for you to exceed this limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>impossible</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Cost of exceeding the limit on players in one game{" "}
                      <span>(%/person)</span>{" "}
                      <span
                        className={styles.lnk}
                        onClick={() => setCalcExample(true)}
                      >
                        calculation example
                      </span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The cost of each additional participant over the limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>_</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Payment for exceeding the limit on players</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Payment time for exceeding the number of participants in the raffles"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                {minOpen && (
                  <div
                    className={clsx(
                      styles["table-mob-row"],
                      styles["table-mob-row--bg"]
                    )}
                  >
                    <div className={styles["table-mob-col"]}>
                      <div
                        className={styles.more}
                        onClick={() => {
                          setMinOpen(false);
                          refTo(refMin);
                        }}
                      >
                        <div className={styles.more__label}>Show less</div>
                        <div
                          className={styles.more__icon}
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <IconArrDown />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles["table-mob__label"]}>Mid</div>
            <div className={styles["table-mob"]} ref={refMid}>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.bnone)}>
                  <div className={styles.text}>
                    Cost of service package <span>($/1 year)</span>
                  </div>
                  <br />
                  <div className={styles["table-mob-head"]}>
                    <p className={clsx(styles.price, styles.center)}>$ 490</p>
                    <a href="/" className={clsx(styles.btn)}>
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  styles["table-mob-row"],
                  styles["table-mob-row--bg"]
                )}
              >
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of games <span>(pcs./monthly)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Payment time for exceeding the number of participants in the raffles"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;300</span>
                </div>
              </div>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of players per game <span>(people/game)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Maximum number of participants within one raffle"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;20 000</span>
                </div>
              </div>
              {!midOpen && (
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={styles["table-mob-col"]}>
                    <div
                      className={styles.more}
                      onClick={() => setMidOpen(true)}
                    >
                      <div className={styles.more__label}>Show all</div>
                      <div className={styles.more__icon}>
                        <IconArrDown />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={clsx(
                  styles["table-mob--acc"],
                  midOpen && styles.open
                )}
              >
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Promotional look <span>(design)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Format of the raffle screen display"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>standardplus</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Who benefits</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Recommended raffle scale"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>Draws for large cities</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of banners</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Number of advertising banners on the raffle screen"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>3</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of external links</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>4</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integration into the streaming technology draw</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Open API JDL interface</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Integration with the API of our service to develop even more attractive marketing tools"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Creating your own Groups</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Create your own communities within our platform. Another opportunity to hold the attention of your audience."
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>no</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Exceeding the limit on players in one game</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="If you have reached the limit of the number of participants in one raffle, then we open the opportunity for you to exceed this limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Cost of exceeding the limit on players in one game{" "}
                      <span>(%/person) </span>{" "}
                      <span
                        className={styles.lnk}
                        onClick={() => setCalcExample(true)}
                      >
                        calculation example
                      </span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The cost of each additional participant over the limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>0,02</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Payment for exceeding the limit on players</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Payment time for exceeding the number of participants in the raffles"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>at the end of the period</span>
                  </div>
                </div>
                {midOpen && (
                  <div
                    className={clsx(
                      styles["table-mob-row"],
                      styles["table-mob-row--bg"]
                    )}
                  >
                    <div className={styles["table-mob-col"]}>
                      <div
                        className={styles.more}
                        onClick={() => {
                          setMidOpen(false);
                          refTo(refMid);
                        }}
                      >
                        <div className={styles.more__label}>Show less</div>
                        <div
                          className={styles.more__icon}
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <IconArrDown />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={styles["table-mob__label"]}>Max</div>
            <div
              className={clsx(styles["table-mob"], styles["table-mob--small"])}
              ref={refMax}
            >
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.bnone)}>
                  <div className={styles.text}>
                    Cost of service package <span>($/1 year)</span>
                  </div>
                  <br />
                  <div className={styles["table-mob-head"]}>
                    <p className={clsx(styles.price, styles.center)}>$ 1190</p>
                    <a href="/" className={clsx(styles.btn)}>
                      Buy
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  styles["table-mob-row"],
                  styles["table-mob-row--bg"]
                )}
              >
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of games <span>(pcs./monthly)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Payment time for exceeding the number of participants in the raffles"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>no limit</span>
                </div>
              </div>
              <div className={styles["table-mob-row"]}>
                <div className={clsx(styles["table-mob-col"], styles.flex)}>
                  <p>
                    Number of players per game <span>(people/game)</span>
                  </p>
                  <span
                    className={styles.help}
                    data-for="tbl"
                    data-tip="Maximum number of participants within one raffle"
                    data-iscapture="true"
                  >
                    ?
                  </span>
                </div>
                <div className={styles["table-mob-col"]}>
                  <span>&#60;40 000</span>
                </div>
              </div>

              {!maxOpen && (
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={styles["table-mob-col"]}>
                    <div
                      className={styles.more}
                      onClick={() => setMaxOpen(true)}
                    >
                      <div className={styles.more__label}>Show all</div>
                      <div className={styles.more__icon}>
                        <IconArrDown />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={clsx(
                  styles["table-mob--acc"],
                  maxOpen && styles.open
                )}
              >
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Promotional look <span>(design)</span>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Format of the raffle screen display"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>standard plus</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Who benefits</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Recommended raffle scale"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>National draws</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of banners</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Number of advertising banners on the raffle screen"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>3</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Number of external links</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>&#62;4</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integrating counters into a banner</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Opportunity to use banners with countdown"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Integration into the streaming technology draw</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The number of external links that can be placed within one raffle"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Open API JDL interface</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Integration with the API of our service to develop even more attractive marketing tools"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Creating your own Groups</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Create your own communities within our platform. Another opportunity to hold the attention of your audience."
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Exceeding the limit on players in one game</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="If you have reached the limit of the number of participants in one raffle, then we open the opportunity for you to exceed this limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>yes</span>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles["table-mob-row"],
                    styles["table-mob-row--bg"]
                  )}
                >
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>
                      Cost of exceeding the limit on players in one game{" "}
                      <span>(%/person) </span> <a> calculation example</a>
                    </p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="The cost of each additional participant over the limit"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>0,02</span>
                  </div>
                </div>
                <div className={styles["table-mob-row"]}>
                  <div className={clsx(styles["table-mob-col"], styles.flex)}>
                    <p>Payment for exceeding the limit on players</p>
                    <span
                      className={styles.help}
                      data-for="tbl"
                      data-tip="Payment time for exceeding the number of participants in the raffles"
                      data-iscapture="true"
                    >
                      ?
                    </span>
                  </div>
                  <div className={styles["table-mob-col"]}>
                    <span>at the end of the period</span>
                  </div>
                </div>
                {maxOpen && (
                  <div
                    className={clsx(
                      styles["table-mob-row"],
                      styles["table-mob-row--bg"]
                    )}
                  >
                    <div className={styles["table-mob-col"]}>
                      <div
                        className={styles.more}
                        onClick={() => {
                          setMaxOpen(false);
                          refTo(refMax);
                        }}
                      >
                        <div className={styles.more__label}>Show less</div>
                        <div
                          className={styles.more__icon}
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <IconArrDown />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles["button-wrap"]}>
            <a href="/" className={styles.button}>
              Go to the main site
            </a>
            <a href="/" className={clsx(styles.button, styles["button--calc"])}>
              Сalculator
              <IconCalc />
            </a>
          </div>

          <div className={styles.cases} id="cases">
            <div className={styles.wrapper}>
              <div className={styles["cases-heading"]}>
                <h3 className={styles.title2}>Cases</h3>
              </div>
              <div className={styles["cases-desc"]}>
                The ability to generate the future is key to success. The future
                can be talked about, traded about, transformed and cared for, as
                well as guided and transcended.
              </div>
            </div>
            <div className={clsx(styles.wrapper, styles["wrapper--nopad"])}>
              <Swiper
                breakpoints={{
                  300: {
                    slidesPerView: "auto",
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    slidesPerGroup: 4,
                    spaceBetween: 40,
                  },
                }}
                pagination={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                modules={[Navigation, A11y, Pagination]}
                onBeforeInit={(swiper: any) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSlideChange={(swiper) => setIndex(swiper.realIndex)}
                className="priceSlider"
              >
                <div className={styles.nav}>
                  <button
                    className={styles["nav-arrow"]}
                    ref={navigationPrevRef}
                  >
                    <IconArrNav />
                  </button>
                  <div className={styles["nav-count"]}>0{index + 3} / 06</div>
                  <button
                    className={clsx(
                      styles["nav-arrow"],
                      styles["nav-arrow--left"]
                    )}
                    ref={navigationNextRef}
                  >
                    <IconArrNav />
                  </button>
                </div>
                <SwiperSlide>
                  <div className={styles.card}>
                    <img src={cases1} alt="" />
                    <div className={styles["card-text"]}>
                      <h4 className={styles.card__title}>Cases №1</h4>
                      <p className={styles.card__desc}>
                        The ability to generate the future is key to success.
                        The future can be talked about, traded about,
                        transformed
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <img src={cases2} alt="" />
                    <div className={styles["card-text"]}>
                      <h4 className={styles.card__title}>Cases №2</h4>
                      <p className={styles.card__desc}>
                        The ability to generate the future is key to success.
                        The future can be talked about, traded about,
                        transformed
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <img src={cases3} alt="" />
                    <div className={styles["card-text"]}>
                      <h4 className={styles.card__title}>Cases №3</h4>
                      <p className={styles.card__desc}>
                        The ability to generate the future is key to success.
                        The future can be talked about, traded about,
                        transformed
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <img src={cases1} alt="" />
                    <div className={styles["card-text"]}>
                      <h4 className={styles.card__title}>Cases №4</h4>
                      <p className={styles.card__desc}>
                        The ability to generate the future is key to success.
                        The future can be talked about, traded about,
                        transformed
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <img src={cases2} alt="" />
                    <div className={styles["card-text"]}>
                      <h4 className={styles.card__title}>Cases №5</h4>
                      <p className={styles.card__desc}>
                        The ability to generate the future is key to success.
                        The future can be talked about, traded about,
                        transformed
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card}>
                    <img src={cases3} alt="" />
                    <div className={styles["card-text"]}>
                      <h4 className={styles.card__title}>Cases №6</h4>
                      <p className={styles.card__desc}>
                        The ability to generate the future is key to success.
                        The future can be talked about, traded about,
                        transformed
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div id="articles">
            <Articles articles={articles} title="Articles" />
          </div>
          <div id="news">
            <News />
          </div>
          <div className={styles.faq} id="faq">
            <Faq />
          </div>
        </div>
      </White>
    </div>
  );
};
