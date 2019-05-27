import PropTypes from "prop-types"
import React from "react"

const Footer = () => {
  return (
    <div className="site-footer">
      <h1 className="text-center">Pep's Blog</h1>
      <p className="text-center">Follow me on social media</p>
      <div className="footer-social-links">
        <ul className="social-links-list">
          <li>
            <a
              href="https://www.facebook.com/pep.delbano"
              target="_blank"
              className="facebook"
            >
              <i class="fab fa-facebook-f fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pdbm77"
              target="_blank"
              className="instagram"
            >
              <i class="fab fa-instagram fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pepdbm89"
              target="_blank"
              className="twitter"
            >
              <i class="fab fa-twitter fa-2x" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/josepdelbano"
              target="_blank"
              className="linkedin"
            >
              <i class="fab fa-linkedin fa-2x" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
