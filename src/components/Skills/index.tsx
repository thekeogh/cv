import * as React from 'react'
import Masonry from 'react-masonry-component'
import Skill from '../Skill'
import Skillset from '../Skillset'

import Styles from './style.module.scss'

const Skills = () => (
  <div className={Styles.wrapper}>
    <div className="wrapper">
      <h4 className="h4 h4--white">Skills</h4>
      <Masonry className={Styles.skills} options={{ transitionDuration: 0, gutter: 24 }}>
        <Skillset title="Backend">
          <Skill title="Node.js" skill={5} />
          <Skill title="PHP" skill={4} />
          <Skill title="Laravel" skill={4} />
        </Skillset>
        <Skillset title="Frontend">
          <Skill title="HTML" skill={5} />
          <Skill title="CSS" skill={4} />
          <Skill title="JavaScript" skill={4} />
          <Skill title="TypeScript" skill={4} />
          <Skill title="React" skill={4} />
          <Skill title="Redux" skill={4} />
          <Skill title="Vue.js" skill={3} />
          <Skill title="Sass" skill={5} />
          <Skill title="Stylus" skill={4} />
          <Skill title="Less" skill={3} />
        </Skillset>
        <Skillset title="Testing">
          <Skill title="Jest" skill={4} />
          <Skill title="Enzyme" skill={4} />
          <Skill title="Mocha" skill={3} />
          <Skill title="Chai" skill={3} />
          <Skill title="PHPUnit" skill={3} />
        </Skillset>
        <Skillset title="API">
          <Skill title="RESTful" skill={5} />
          <Skill title="GraphQL" skill={4} />
        </Skillset>
        <Skillset title="Database">
          <Skill title="MySQL/MariaDB" skill={4} />
          <Skill title="PostgreSQL" skill={4} />
          <Skill title="Oracle" skill={3} />
        </Skillset>
        <Skillset title="Bundlers">
          <Skill title="Webpack" skill={4} />
          <Skill title="Browserify" skill={3} />
          <Skill title="Gulp" skill={3} />
        </Skillset>
        <Skillset title="Server">
          <Skill title="Amazon AWS" skill={3} />
          <Skill title="Debian (Ubuntu)" skill={3} />
          <Skill title="Windows Server" skill={2} />
        </Skillset>
        <Skillset title="Technologies">
          <Skill title="ElasticSearch" skill={3} />
          <Skill title="Solr" skill={2} />
        </Skillset>
        <Skillset title="Other">
          <Skill title="Sketch" skill={2} />
          <Skill title="Adobe Photoshop" skill={2} />
          <Skill title="Apple macOS" skill={5} />
          <Skill title="Microsoft Windows" skill={4} />
        </Skillset>
      </Masonry>
    </div>
  </div>
)

export default Skills
