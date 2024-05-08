import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
  return (
    <div id='footer-content' className='section-content'>
      <h5>Made with &#9829; by me! &nbsp;
        <Link id='github-link' href="https://github.com/JohnHenry-Ward/UnitedStatesOfBaseball">
          <FontAwesomeIcon icon={faGithubAlt} />
        </Link>
      </h5>
    </div>
  )
}

export default Footer
