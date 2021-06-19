import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter-container">
        <h3>
          Free Cookies? <br></br>Free Cookies!
        </h3>
        <p>
          Tell us your birthday + receive a special treat with your B'Day order.
        </p>
        <div className="form-wrap">
          <form action="#">
            <input type="email" placeholder="Enter your e-mail" />
            <input type="text" placeholder="Birthday" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer-main">
        <div>
          <h4>About Us</h4>
          <Link to="/">About Us</Link>
        </div>
        <div>
          <h4>FAQ</h4>
          <Link to="/">Frequently Asked Questions</Link>
        </div>
        <div>
          <h4>Order Policies</h4>
          <Link to="/">Order Policies</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link to="/" style={{ margin: "0 10px" }}>
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
