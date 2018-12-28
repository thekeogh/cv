import * as React from 'react'
import Styles from './style.module.scss'

import Job from '../Job'

const Experience = () => (
  <div className={Styles.wrapper}>
    <div className="wrapper">
      <h4 className="h4">Experience</h4>
      <div className={Styles.jobs}>
        <Job company="ScreenCloud" dates="October 2016 - Present" location="London, EC2A">
          <p>Lead developer for all frontend and backend development of marketing and front facing sites.</p>
          <p>Built the new oAuth authentication system for all new customers.</p>
          <p>
            Responsible for the build and maintenance of the custom billing API which deals with all subscriptions and
            payment.
          </p>
          <p>
            Constructed a full bespoke accounting reconcilation service that kept all bookkeeping up-to-date with Xero.
          </p>
        </Job>
        <Job company="Codegent Ltd / Thin Martian Ltd" dates="June 2005 - October 2016" location="London, EC2A">
          <p>
            Technical lead and head developer on major client based and internal apps, including end-to-end web builds
            as well as campaign work such as microsites, HTML emails, banners and social assets.
          </p>
          <p>
            Designing UI and architecting custom Laravel CMS and implementing across client and internal based projects.
          </p>
          <p>
            Mentoring a team of junior and mid-weight front and backend developers throughtout all stages of a build to
            completion, as well as code reviews and app deployment.
          </p>
          <p>Performing sysadmin duties company wide on a vast array of servers (namely Debian).</p>
          <p>
            Technically advising stakeholders, as well as design/UX stage across client projects as well as technically
            leading in client meetings and providing accurate time estimations.
          </p>
        </Job>
        <Job company="Reading Room" dates="March 2000 - June 2005" location="London, W1D">
          <p>Templating and functional builds of client websites.</p>
          <p>
            Architecting and maintaining a custom ColdFusion framework, alongside a custom CMS that was used across all
            projects.
          </p>
          <p>
            Lead developer on all Energy Saving Trust (EST) projects, designing and implementing the entire Oracle
            database, liasing with the client and carrying out all the builds across their portal.
          </p>
        </Job>
        <Job company="Datadial" dates="May 1999 - March 2000" location="London, SW5">
          <p>
            General day-to-day junior web developer duties, including liasing with designers to turn a design in to
            html, building frontend website builds and maintaining client websites.
          </p>
          <p>Building multiple email newsletter campaigns.</p>
        </Job>
      </div>
    </div>
  </div>
)

export default Experience
