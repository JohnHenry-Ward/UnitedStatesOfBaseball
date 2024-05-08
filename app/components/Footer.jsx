import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div id='footer-content' className='section-content'>
      <h5>Made with &#9829; by me! &nbsp;
        <FontAwesomeIcon icon={faGithubAlt} />
      </h5>
    </div>
  )
}

export default Footer
