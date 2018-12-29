import * as React from 'react'
import Styles from './style.module.scss'

const Intro = () => (
  <div className={Styles.wrapper}>
    <div className="wrapper">
      <p>
        I am a full stack senior web developer based in Bangkok, Thailand. Originally from London, UK, I started in the
        web game way back in 1999 - when I picked up a coding book and got hooked on code.
      </p>
      <p>
        Over the years I have worked with many big household names (Microsoft, Apple, Disney, BBC, Time Out, Skechers to
        name just a few) and I am always keen to adopt new technologies early (frontend and backend) such as GraphQL,
        React, Redux and PHP Laravel.
      </p>
      <p>
        I have a huge passion for front and backend web development which I have been doing in parallel to each other
        for the length of my career. I am always looking for a new challenge.
      </p>
      <ul className={Styles.contact}>
        <li>
          <a
            href="https://www.linkedin.com/in/thekeogh/"
            target="_blank"
            className={Styles.linkedin}
            title="View my LinkedIn profile"
          >
            <i className="socicon-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/thekeogh" target="_blank" className={Styles.github} title="Visit my GitHub page">
            <i className="socicon-github" />
          </a>
        </li>
        <li>
          <a href="mailto:steve.mckeogh@gmail.com" className={Styles.email} title="Email me">
            <i className="socicon-mail" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Intro
