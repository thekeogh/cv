import * as React from 'react'

import Experience from '../../components/Experience'
import Header from '../../components/Header'
import Intro from '../../components/Intro'

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Header />
        <main>
          <Intro />
          <Experience />
        </main>
        <footer>FOOTER</footer>
      </>
    )
  }
}

export default App
