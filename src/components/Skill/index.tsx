import c from 'classnames'
import * as React from 'react'
import Styles from './style.module.scss'

interface Props {
  title: string
  skill: number
}

class Skill extends React.Component<Props, {}> {
  public render() {
    return (
      <div className={Styles.skill}>
        <h5 className={Styles.title}>{this.props.title}</h5>
        <ul className={c(Styles.level, Styles[`level-${this.props.skill}`])}>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    )
  }
}

export default Skill
