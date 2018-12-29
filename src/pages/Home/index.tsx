import * as React from 'react'

import Experience from '../../components/Experience'
import Header from '../../components/Header'
import Intro from '../../components/Intro'
import Skills from '../../components/Skills'

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Header />
        <main>
          <Intro />
          <Experience />
          <Skills />
        </main>
      </>
    )
  }
}

export default App
