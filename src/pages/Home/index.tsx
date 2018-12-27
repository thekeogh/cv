import * as React from 'react'

import Header from '../../components/Header'

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="app">
        <Header />
        <main>MAIN</main>
        <footer>FOOTER</footer>
      </div>
    )
  }
}

export default App
