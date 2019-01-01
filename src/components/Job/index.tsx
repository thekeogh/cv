import * as React from 'react'
import Styles from './style.module.scss'

interface Props {
  children: React.ReactNode
  company: string
  dates: string
  location: string
}

class Job extends React.Component<Props, {}> {
  public render() {
    return (
      <article className={Styles.job}>
        <header className="heading">
          <h5 className={Styles.title}>{this.props.company}</h5>
          <p className={Styles.dates}>{this.props.dates}</p>
        </header>
        <main className={Styles.main}>{this.props.children}</main>
        <footer className={Styles.footer}>{this.props.location}</footer>
      </article>
    )
  }
}

export default Job
