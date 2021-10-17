import styles from '../styles/global.module.css'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    {
        <style jsx global>
            {`
            /*==================== GOOGLE FONTS ====================*/
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
            @import url('https://unicons.iconscout.com/release/v4.0.0/css/line.css');
            
            /*==================== VARIABLES CSS ====================*/
            :root {
                --header-height: 3rem;
            
                /*========== Colors ==========*/
                /* Change favorite color */
                --hue-color: 250; /*Purple 250 - Green 142 - Blue 230 - Pink 340*/
            
                /* HSL color mode */
                --first-color: hsl(var(--hue-color), 69%, 61%);
                --first-color-second: hsl(var(--hue-color), 69%, 61%);
                --first-color-alt: hsl(var(--hue-color), 57%, 53%);
                --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
                --title-color: hsl(var(--hue-color), 8%, 15%);
                --text-color: hsl(var(--hue-color), 8%, 45%);
                --text-color-light: hsl(var(--hue-color), 8%, 65%);
                --input-color: hsl(var(--hue-color), 70%, 96%);
                --body-color: hsl(var(--hue-color), 60%, 99%);
                --container-color: #fff;
                --scroll-bar-color: hsl(var(--hue-color), 12%, 90%);
                --scroll-thumb-color: hsl(var(--hue-color), 12%, 80%);
            
                /*========== Font and typography ==========*/
                --body-font: 'Poppins', sans-serif;
            
                /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
                --big-font-size: 2rem;
                --h1-font-size: 1.5rem;
                --h2-font-size: 1.25rem;
                --h3-font-size: 1.125rem;
                --normal-font-size: .938rem;
                --small-font-size: .813rem;
                --smaller-font-size: .75rem;
            
                /*========== Font weight ==========*/
                --font-medium: 500;
                --font-semi-bold: 600;
            
                /*========== Margenes Bottom ==========*/
                /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
                --mb-0-25: .25rem;
                --mb-0-5: .5rem;
                --mb-0-75: .75rem;
                --mb-1: 1rem;
                --mb-1-5: 1.5rem;
                --mb-2: 2rem;
                --mb-2-5: 2.5rem;
                --mb-3: 3rem;
            
                /*========== z index ==========*/
                --z-tooltip: 10;
                --z-fixed: 100;
                --z-modal: 1000;
            }
            
            /* Font size for large devices */
            @media screen and (min-width: 968px) {
                :root {
                    --big-font-size: 3rem;
                    --h1-font-size: 2.25rem;
                    --h2-font-size: 1.5rem;
                    --h3-font-size: 1.25rem;
                    --normal-font-size: 1rem;
                    --small-font-size: .875rem;
                    --smaller-font-size: .813rem;
                }
            }
            
            /*========== Variables Dark theme ==========*/
            body.dark-theme {
                --first-color-second: hsl(var(--hue-color),30%, 8%);
                --title-color: hsl(var(--hue-color), 8%, 95%);
                --text-color: hsl(var(--hue-color), 8%, 75%);
                --input-color: hsl(var(--hue-color), 29%, 16%);
                --body-color: hsl(var(--hue-color), 28%, 12%);
                --container-color: hsl(var(--hue-color), 29%, 16%);
                --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
                --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);
            }
            
            /*========== Button Dark/Light ==========*/
            .nav__btns {
                display: flex;
                align-items: center;
            }
            
            .change-theme {
                font-size: 1.25rem;
                color: var(--title-color);
                margin-right: var(--mb-1);
                cursor: pointer;
            }
            
            .change-theme:hover {
                color: var(--first-color);
            }
            
            /*==================== BASE ====================*/
            * {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            
            html {
                scroll-behavior: smooth;
            }
            
            body {
                margin: 0 0 var(--header-height) 0;
                font-family: var(--body-font);
                font-size: var(--normal-font-size);
                background-color: var(--body-color);
                color: var(--text-color);
            }
            
            h1, h2, h3, h4 {
                color: var(--title-color);
                font-weight: var(--font-semi-bold);
            }
            
            ul {
                list-style: none;
            }
            
            a {
                text-decoration: none;
            }
            
            img {
                max-width: 100%;
                height: auto;
            }
            /*==================== REUSABLE CSS CLASSES ====================*/
            .section {
                padding: 2rem 0 4rem;
            }
            
            .section__title {
                font-size: var(--h1-font-size);
            }
            
            .section__subtitle {
                display: block;
                font-size: var(--small-font-size);
                margin-bottom: var(--mb-3);
            }
            
            .section__title,
            .section__subtitle {
                text-align: center;
            }
            
            /*==================== LAYOUT ====================*/
            .container {
                max-width: 768px;
                margin-left: var(--mb-1-5);
                margin-right: var(--mb-1-5);
            }
            
            .grid {
                display: grid;
                gap: 1.5rem;
            }
            
            .header {
                width: 100%;
                position: fixed;
                bottom: 0;
                left: 0;
                z-index: var(--z-fixed);
                background-color: var(--body-color);
            }
            
            /*==================== NAV ====================*/
            .nav {
                max-width: 968px;
                height: var(--header-height);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .nav__logo,
            .nav__toggle {
                color: var(--title-color);
                font-weight: var(--font-medium);
            }
            
            .nav__logo:hover {
                color: var(--first-color);
            }
            
            .nav__toggle {
                font-size: 1.1.rem;
                cursor: pointer;
            }
            
            .nav__toggle:hover {
                color: var(--first-color);
            }
            
            @media screen and (max-width: 767px) {
                .nav__menu {
                    position: fixed;
                    bottom: -100%;
                    left: 0;
                    width: 100%;
                    background-color: var(--body-color);
                    padding: 2rem 1.5rem 4rem;
                    box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
                    border-radius: 1.5rem 1.5rem 0 0;
                    transition: .3s;
                }
            }
            
            .nav__list {
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
            }
            
            .nav__link {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: var(--small-font-size);
                color: var(--title-color);
                font-weight: var(--font-medium);
            }
            
            .nav__link:hover {
                color: var(--first-color);
            }
            
            .nav__icon {
                font-size: 1.2rem;
            }
            
            .nav__close {
                position: absolute;
                right: 1.3rem;
                bottom: .5rem;
                font-size: 1.5rem;
                cursor: pointer;
                color: var(--first-color);
            }
            
            .nav__close:hover {
                color: var(--first-color-alt);
            }
            /* show menu */
            .show-menu {
                bottom: 0;
            }
            
            /* Active link */
            .active-link {
                color: var(--first-color);
            }
            
            /* Change background header */
            .scroll-header {
                box-shadow: 0 -1px 4px rgba(0,0,0, .15);
            }
            
            /*==================== HOME ====================*/
            .home__container {
                gap: 1rem;
            }
            
            .home__content {
                grid-template-columns: .5fr 3fr;
                padding-top: 3.5rem;
                align-items: center;
            }
            
            .home__social {
                display: grid;
                grid-template-columns: max-content;
                row-gap: 1rem;
            }
            
            .home__social-icon {
                font-size: 1.25rem;
                color: var(--first-color);
            }
            
            .home__social-icon:hover {
                color: var(--first-color-alt);
            }
            
            .home__blob {
                width: 200px;
                fill: var(--first-color);
            }
            
            .home__blob-img {
                width: 160px;
            }
            
            .home__data {
                grid-column: 1/3;
            }
            
            .home__title {
                font-size: var(--h1-font-size);
            }
            
            .home__subtitle {
                font-size: var(--h3-font-size);
                color: var(--text-color);
                font-weight: var(--font-medium);
                margin-bottom: var(--mb-0-75);
            }
            
            .home__description {
                margin-bottom: var(--mb-2);
            }
            
            .home__scroll {
                display: none;
            }
            
            .home__scroll-button {
                color: var(--first-color);
                transition: .3s;
            }
            
            .home__scroll-button:hover {
                transform: translateY(.25rem);
            }
            
            .home__scroll-mouse {
                font-size: 2rem;
            }
            
            .home__scroll-name { 
                font-size: var(--small-font-size);
                color: var(--title-color);
                font-weight: var(--font-medium);
                margin-right: var(--mb-0-25);
            }
            
            .home__scroll-arrow {
                font-size: 1.25rem;
            }
            
            /*==================== BUTTONS ====================*/
            .button {
                display: inline-block;
                background-color: var(--first-color);
                color: #fff;
                padding: 1rem;
                border-radius: .5rem;
                font-weight: var(--font-medium);
            }
            
            .button:hover {
                background-color: var(--first-color-alt);
            }
            
            .button__icon {
                font-size: 1.25rem;
                margin-left: var(--mb-0-5);
                transition: .3s;
            }
            
            .button--white {
                background-color: #fff;
                color: var(--first-color);
            }
            
            .button--white:hover {
                background-color: #fff;
            }
            
            .button--flex {
                display: inline-flex;
                align-items: center;
            }
            
            .button--small {
                padding: .75rem 1rem;
            }
            
            .button--link {
                padding: 0;
                background-color: transparent;
                color: var(--first-color);
            }
            
            .button--link:hover {
                background-color: transparent;
                color: var(--first-color-alt);
            }
            /*==================== FOOTER ====================*/
            .footer__container {
                row-gap: 3.5rem;
            }
            
            .footer__bg {
                background-color: var(--first-color-second);
                padding: 2rem 0 3rem;
            }
            
            .footer__title {
                font-size: var(--h1-font-size);
                margin-bottom: var(--mb-0-25);
            }
            
            .footer__subtitle {
                font-size: var(--small-font-size);
            }
            
            .footer__links {
                display: flex;
                flex-direction: column;
                row-gap: 1.5rem;
            }
            
            .footer__link:hover {
                color: var(--first-color-lighter);
            }
            
            .footer__social {
                font-size: 1.25rem;
                margin-right: var(--mb-1-5);
            }
            
            .footer__social:hover {
                color: var(--first-color-lighter);
            }
            
            .footer__copy {
                font-size: var(--smaller-font-size);
                text-align: center;
                color: var(--text-color-light);
                margin-top: var(--mb-3);
            }
            
            .footer__title,
            .footer__subtitle,
            .footer__link,
            .footer__social {
                color: #fff;
            }
            /*========== SCROLL UP ==========*/
            .scrollup {
                position: fixed;
                right: 1rem;
                bottom: -20%;
                background-color: var(--first-color);
                opacity: .8;
                padding: 0 .3rem;
                border-radius: .4rem;
                z-index: var(--z-tooltip);
                transition: .4s;
            }
            
            .scrollup:hover {
                background-color: var(--first-color-alt);
            }
            
            .scrollup__icon {
                font-size: 1.5rem;
                color: #fff;
            }
            
            /* Show scroll */
            .show-scroll {
                bottom: 5rem;
            }
            
            /*========== SCROLL BAR ==========*/
            ::-webkit-scrollbar {
                width: .60rem;
                background-color: var(--scroll-bar-color);
                border-radius: .5rem;
            }
            
            ::-webkit-scrollbar-thumb {
                background-color: var(--scroll-thumb-color);
                border-radius: .5rem;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background-color: var(--text-color-light);
            }
            /*==================== MEDIA QUERIES ====================*/
            /* For small devices */
            @media screen and (max-width: 500px) {
                .container {
                    margin-left: var(--mb-1);
                    margin-right: var(--mb-1);
                }
            
                .nav__menu {
                    padding: 2rem .25rem 4rem;
                }
                .nav__list {
                    column-gap: 0;
                }
            
                .home__content {
                    grid-template-columns: .25fr 3fr;
                }
                .home__img {
                    margin: 0 auto;
                }
                .home__blob {
                    width: 180px;
                }
            
                .skills__title {
                    font-size: var(--normal-font-size);
                }
            
                .qualification__data {
                    gap: .1rem;
                }
            
                .services__container {
                    grid-template-columns: max-content;
                    justify-content: center;
                }
            
                .services__content {
                    padding-right: 3.5rem;
                }
            
                .services__modal {
                    padding: 0 .5rem;
                }
            
                .project__img {
                    width: 200px;
                }
            
                .testimonial__data,
                .testimonial__header {
                    flex-direction: column;
                    align-items: center;
                }
            
                .testimonial__img {
                    margin-right: 0;
                    margin-bottom: var(--mb-0-25);
                }
            
                .testimonial__data,
                .testimonial__description {
                    text-align: center;
                }
            }
            
            /* For medium devices */
            @media screen and (min-width: 568px) {
                .home__content {
                    grid-template-columns: max-content 1fr 1fr;
                }
                .home__data {
                    grid-column: initial;
                }
                .home__img {
                    order: 1;
                    justify-self: center;
                }
            
                .about__container,
                .skills__container,
                .portfolio__content,
                .project__container,
                .contact__container,
                .footer__container {
                    grid-template-columns: repeat(2, 1fr);
                }
            
                .qualification__sections {
                    display: grid;
                    grid-template-columns: .6fr;
                    justify-content: center;
                }
            }
            
            @media screen and (min-width: 767px) {
                .container {
                    margin-left: auto;
                    margin-right: auto;
                }
            
                body {
                    margin: 0;
                }
            
                .section {
                    padding: 6rem 0 2rem;
                }
                .section__subtitle {
                    margin-bottom: 4rem;
                }
            
                .header {
                    top:0;
                    bottom: initial;
                }
            
                .header,
                .main,
                .footer__container {
                    padding: 0 1rem;
                }
            
                .nav {
                    height: calc(var(--header-height) + 1.5rem);
                    column-gap: 1rem;
                }
            
                .nav__logo {
                    margin-left: 3rem;
                }
            
                .nav__icon,
                .nav__close,
                .nav__toggle {
                    display: none;
                }
            
                .nav__list {
                    display: flex;
                    column-gap: 2rem;
                }
            
                .nav__menu {
                    margin-left: auto;
                }
            
                .change-theme {
                    margin: 0;
                }
            
                .home__container {
                    row-gap: 5rem;
                }
                .home__content {
                    padding-top: 5.5rem;
                    column-gap: 2rem;
                }
                .home__blob {
                    width: 270px;
                }
                .home__scroll {
                    display: block;
                }
                .home__scroll-button {
                    margin-left: 3rem;
                }
                .about__container {
                    column-gap: 5rem;
                }
                .about__img {
                    width: 350px;
                }
                .about__description {
                    text-align: initial;
                }
                .about__info {
                    justify-content: space-between;
                }
                .about__buttons {
                    justify-content: initial;
                }
                .qualification__tabs {
                    justify-content: center;
                }
                .qualification__button {
                    margin: 0 var(--mb-1);
                }
                .qualification__sections {
                    grid-template-columns: .5fr;
                }
                .services__container {
                    grid-template-columns: repeat(3, 218px);
                    justify-content: center;
                }
                .services__icon {
                    font-size: 2rem;
                }
                .services__content {
                    padding: 6rem 0 2rem 2.5rem;
                }
                .services__modal-content {
                    width: 450px;
                }
                .portfolio__img {
                    width: 320px;
                }
                .portfolio__content {
                    align-items: center;
                }
                .project {
                    text-align: initial;
                }
                .project__bg {
                    background: none;
                }
                .project__container {
                    background-color: var(--first-color-second);
                    border-radius: 1rem;
                    padding: 3rem 2.5rem 0;
                    grid-template-columns: 1fr max-content;
                    column-gap: 3rem;
                }
                .project__data {
                    padding-top: .8rem;
                }
                .footer__container {
                    grid-template-columns: repeat(3, 1fr);
                }
                .footer__bg {
                    padding: 3rem 0 3.5rem;
                }
                .footer__links {
                    flex-direction: row;
                    column-gap: 2rem;
                }
                .footer__socials {
                    justify-self: flex-end;
                }
                .footer__copy {
                    margin-top: 4.5rem;
                }
            }
            
            /* For large devices */
            @media screen and (min-width: 1024px) {
                .header,
                .main,
                .footer__container {
                    padding: 0;
                }
                .home__container,
                .about__container,
                .skills__container,
                .portfolio__content,
                .project__container,
                .contact__container,
                .footer__container,
                .qualification__container,
                .services__container  {
                    margin: 0 auto;
                }
                .home__blob {
                    width: 320px;
                }
                .home__social {
                    transform: translateX(-6rem);
                }
                .services__container {
                    grid-template-columns: repeat(3, 238px);
                }
                .portfolio__content {
                    column-gap: 5rem;
                }
                .swiper-portfolio-icon {
                    font-size: 3.5rem;
                }
                .swiper-button-prev {
                    left: -3.5rem;
                }
                .swiper-button-next {
                    right: -3.5rem;
                }
                .swiper-container-horizontal > .swiper-pagination-bullets {
                    bottom: -4.5rem;
                }
                .contact__form {
                    width: 460px;
                }
                .contact__inputs {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
        `}</style>
    }
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header id="header" className={`${styles.header} header scroll-header`}>
      <nav className="nav container">
        <a href="#" className="nav__logo">Sandeep</a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link">Home</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/about">
                <a className="nav__link">About</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/news">
                <a className="nav__link">News</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/users">
                <a className="nav__link">Users List</a>
              </Link>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="/api/users">Users API</a>  
            </li>
          </ul>
        </div>   
        <i className="uil uil-times nav__close" id="nav-close"></i>   
        <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button"></i>
            <div className="nav__toggle" id="nav-toggle">
                <i className="uil uil-apps"></i>
            </div>
        </div>
      </nav>
    </header>
    <main className="main">
      {children}
    </main>
    <footer className="footer">
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">Sandeep</h1>
          <span className="footer__subtitle">Frontend developer</span>
        </div>
        <div className="footer__socials">
          <a href="https://www.facebook.com" target="_blank" className="footer__social">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" className="footer__social">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" className="footer__social">
            <i className="uil uil-twitter-alt"></i>
          </a>
        </div>
      </div>
      <p className="footer__copy">&#169; Sandeep All rights reserved.</p>
    </div>
    </footer>
  </div>
)

export default Layout
