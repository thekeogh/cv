import * as React from 'react'
import Styles from './style.module.scss'

import Spotlight from '../Spotlight'

import Me from '../../img/me.jpg'

const Header = () => (
  <header className={Styles.wrapper}>
    <div className="wrapper">
      <img src={Me} className={Styles.me} alt="Steve McKeogh" title="Steve McKeogh" />
      <Spotlight />
    </div>
  </header>
)

export default Header
