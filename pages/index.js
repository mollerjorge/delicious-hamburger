import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false)
  const displayOverlay = () => {
    setShowOverlay(true)
  }

  const hideOverlay = () => {
    setShowOverlay(false)
  }
  return (
    <div className={styles.content}>
      <Head>
        <title>Best burger in the galaxy</title>
        <link rel='icon' href='/favicon.ico' />

        <link
          href='https://fonts.googleapis.com/css2?family=Coustard:wght@900&family=Lato:wght@400;700;900&family=Poppins:wght@600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className={styles.main}>
        <motion.div
          animate={{ opacity: showOverlay ? 1 : 0 }}
          className={styles.overlay}
        ></motion.div>
        <img src='bg.svg' className={styles.hamburgerBg} />
        <div className={styles.heroContainer}>
          <img className={styles.hand} src='hand.png' />
          <div className={styles.heroBox}>
            <p className={styles.legend}>
              <svg
                fill='#fbbf24'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                fill='#fbbf24'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                fill='#fbbf24'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                fill='#fbbf24'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='#FFEDD5'
              >
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
              </svg>
              <span>please choose something healthy...or not</span>
            </p>
            <h1 className={styles.title}>
              Best beef <br></br> in the galaxy
              <span className={styles.yellowDot}>.</span>
            </h1>

            <button className={styles.btnOrderNow}>Order now</button>
          </div>
          <div className={styles.hamurgerWrapper}>
            <ul
              className={styles.hamburger}
              onMouseEnter={displayOverlay}
              onMouseLeave={hideOverlay}
            >
              <li>
                <img src='top-bread.png' alt='top bread' />
                <div className={styles.indicatorLegend}>
                  <p>This is the top bread</p>
                  <svg
                    width='294'
                    height='45'
                    viewBox='0 0 294 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='278.339'
                      cy='29.339'
                      r='13.5254'
                      stroke='white'
                      stroke-width='4.27119'
                    />
                    <circle cx='278.339' cy='29.339' r='7.11864' fill='white' />
                    <path
                      d='M268.373 19.3729L253.424 3L2.5 3'
                      stroke='#FBFBFB'
                      stroke-width='4.27119'
                      stroke-linecap='round'
                      stroke-linejoin='bevel'
                    />
                  </svg>
                </div>
              </li>
              <li>
                <img src='lettuce.png' alt='top bread' />
                <div className={styles.indicatorLegend}>
                  <p>This is the lettuce</p>
                  <svg
                    width='294'
                    height='45'
                    viewBox='0 0 294 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='278.339'
                      cy='29.339'
                      r='13.5254'
                      stroke='white'
                      stroke-width='4.27119'
                    />
                    <circle cx='278.339' cy='29.339' r='7.11864' fill='white' />
                    <path
                      d='M268.373 19.3729L253.424 3L2.5 3'
                      stroke='#FBFBFB'
                      stroke-width='4.27119'
                      stroke-linecap='round'
                      stroke-linejoin='bevel'
                    />
                  </svg>
                </div>
              </li>
              <li>
                <img src='tomato.png' alt='top bread' />
                <div className={styles.indicatorLegend}>
                  <p>This is the tomato</p>
                  <svg
                    width='294'
                    height='45'
                    viewBox='0 0 294 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='278.339'
                      cy='29.339'
                      r='13.5254'
                      stroke='white'
                      stroke-width='4.27119'
                    />
                    <circle cx='278.339' cy='29.339' r='7.11864' fill='white' />
                    <path
                      d='M268.373 19.3729L253.424 3L2.5 3'
                      stroke='#FBFBFB'
                      stroke-width='4.27119'
                      stroke-linecap='round'
                      stroke-linejoin='bevel'
                    />
                  </svg>
                </div>
              </li>
              <li>
                <img src='cheese.png' alt='top bread' />
                <div className={styles.indicatorLegend}>
                  <p>This is the cheese</p>
                  <svg
                    width='294'
                    height='45'
                    viewBox='0 0 294 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='278.339'
                      cy='29.339'
                      r='13.5254'
                      stroke='white'
                      stroke-width='4.27119'
                    />
                    <circle cx='278.339' cy='29.339' r='7.11864' fill='white' />
                    <path
                      d='M268.373 19.3729L253.424 3L2.5 3'
                      stroke='#FBFBFB'
                      stroke-width='4.27119'
                      stroke-linecap='round'
                      stroke-linejoin='bevel'
                    />
                  </svg>
                </div>
              </li>
              <li>
                <img src='meat.png' alt='top bread' />
                <div className={styles.indicatorLegend}>
                  <p>This is the meat</p>
                  <svg
                    width='294'
                    height='45'
                    viewBox='0 0 294 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='278.339'
                      cy='29.339'
                      r='13.5254'
                      stroke='white'
                      stroke-width='4.27119'
                    />
                    <circle cx='278.339' cy='29.339' r='7.11864' fill='white' />
                    <path
                      d='M268.373 19.3729L253.424 3L2.5 3'
                      stroke='#FBFBFB'
                      stroke-width='4.27119'
                      stroke-linecap='round'
                      stroke-linejoin='bevel'
                    />
                  </svg>
                </div>
              </li>
              <li>
                <img src='bottom-bread.png' alt='top bread' />
                <div className={styles.indicatorLegend}>
                  <p>This is the bread again</p>
                  <svg
                    width='294'
                    height='45'
                    viewBox='0 0 294 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle
                      cx='278.339'
                      cy='29.339'
                      r='13.5254'
                      stroke='white'
                      stroke-width='4.27119'
                    />
                    <circle cx='278.339' cy='29.339' r='7.11864' fill='white' />
                    <path
                      d='M268.373 19.3729L253.424 3L2.5 3'
                      stroke='#FBFBFB'
                      stroke-width='4.27119'
                      stroke-linecap='round'
                      stroke-linejoin='bevel'
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
