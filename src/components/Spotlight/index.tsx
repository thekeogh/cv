import * as React from 'react'
import Styles from './style.module.scss'

const Spotlight = () => (
  <div className={Styles.wrapper}>
    <h1 className={Styles.title}>Steve McKeogh</h1>
    <h2 className={Styles.subtitle}>Full Stack Senior Web Developer</h2>
    <h3 className={Styles.stack}>Node.js, TypeScript, GraphQL and React</h3>
  </div>
)

export default Spotlight
