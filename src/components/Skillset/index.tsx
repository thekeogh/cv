import * as React from 'react'
import Styles from './style.module.scss'

interface Props {
  children: React.ReactNode
  title: string
}

class Skillset extends React.Component<Props, {}> {
  public render() {
    return (
      <div className={Styles.skillset}>
        <header className="heading heading--small">
          <h5 className={Styles.title}>{this.props.title}</h5>
        </header>
        <main className={Styles.main}>{this.props.children}</main>
      </div>
    )
  }
}

export default Skillset
