import React, { useState, useEffect } from "react";
import { IconLogo, IconLogoMob } from "../../assets";
import styles from "./style.module.scss";
import clsx from "clsx";
import { Link } from "react-scroll";
import useWindowSize from "../../hooks/useWindowSize";

export const Header = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className={clsx(styles.header, header && styles.scroll)}>
      <div className="container">
        <div className={styles["header-inner"]}>
          {header && size > 740 ? null : (
            <a href="/" className={styles["header__logo"]}>
              <span className={styles["header__logo--pc"]}>
                <IconLogo />
              </span>

              <span className={styles["header__logo--mob"]}>
                <IconLogoMob />
              </span>
            </a>
          )}

          <nav className={styles.nav}>
            <div
              className={clsx(styles.burger, open && styles.open)}
              onClick={toggleOpen}
            >
              <div />
              <div />
              <div />
            </div>
            <ul className={clsx(styles["nav-menu"], open && styles.open)}>
              <li className={styles["nav-menu__item"]}>
                <Link
                  to="pricing"
                  activeClass={styles.active}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={styles["nav-menu__link"]}
                  onClick={onClose}
                >
                  Pricing
                </Link>
              </li>
              <li className={styles["nav-menu__item"]}>
                <Link
                  to="cases"
                  activeClass={styles.active}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={clsx(styles["nav-menu__link"])}
                  onClick={onClose}
                >
                  Cases
                </Link>
              </li>
              <li className={styles["nav-menu__item"]}>
                <Link
                  to="articles"
                  activeClass={styles.active}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={styles["nav-menu__link"]}
                  onClick={onClose}
                >
                  Articles
                </Link>
              </li>
              <li className={styles["nav-menu__item"]}>
                <Link
                  to="news"
                  activeClass={styles.active}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={styles["nav-menu__link"]}
                  onClick={onClose}
                >
                  News
                </Link>
              </li>
              <li className={styles["nav-menu__item"]}>
                <Link
                  to="faq"
                  activeClass={styles.active}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={styles["nav-menu__link"]}
                  onClick={onClose}
                >
                  Questions
                </Link>
              </li>
              <li className={styles["nav-menu__item"]}>
                <Link
                  to="about"
                  activeClass={styles.active}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={styles["nav-menu__link"]}
                  onClick={onClose}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
