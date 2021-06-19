import React from "react"
import "./home.css"
import img1 from "../../img/lg-sq-1.jpg"
import img2 from "../../img/edit1.jpg"
import img3 from "../../img/edit2.jpg"
import img4 from "../../img/edit3.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBirthdayCake,
  faCalendarCheck,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  return (
    <>
      <div className="main-bg">
        <div className="main-container">
          <h1>Celebrate Homemade.</h1>
          <button className="btn main-btn">Order Online</button>
        </div>
      </div>

      <div className="intro-container">
        <div className="intro-hero">
          <h2>Bakery</h2>
          <p>baked fresh daily with only finest ingredients</p>
        </div>
        <div className="intro">
          <div className="card">
            <div className="intro-img">
                <img src={img3} alt="" />
            </div>
            <p>It's time for</p>
            <h4>Desserts</h4>
            <button>Shop Now</button>
          </div>
          <div className="card">
          <div className="intro-img">
                <img src={img4} alt="" />
            </div>
            <p>Daily Fuel</p>
            <h4>Essentials</h4>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className="bakery-container">
        <div className="bakery-img first">
          <img src={img2} alt="img1" />
        </div>
        <div className="bakery-text">
          <h3>A piece of bread to start your day!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
            adipisci eius nobis praesentium! Non a aperiam nulla tempore at
            dolor doloremque est suscipit consectetur. Officia, possimus dolor
            obcaecati quam minus accusamus quisquam enim nisi
          </p>
          <button className="main-btn">Try it Now</button>
        </div>
      </div>
      <div className="bakery-container">
        <div className="bakery-img" style={{ order: 2 }}>
          <img src={img1} alt="img1" />
        </div>
        <div className="bakery-text">
          <h3>Croissant for breakfast!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iusto
            adipisci eius nobis praesentium! Non a aperiam nulla tempore at
            dolor doloremque est suscipit consectetur. Officia, possimus dolor
            obcaecati quam minus accusamus quisquam enim nisi
          </p>
          <button className="main-btn" style={{ float: "right" }}>
            Try it Now
          </button>
        </div>
      </div>

      <div className="delivery-container">
        <h2>How to get treats delivered</h2>
        <div className="delivery">
          <div className="card">
            <FontAwesomeIcon icon={faBirthdayCake} size="3x" />
            <h4>Choose your treats</h4>
            <p>
              For gifting, for sharing, or keeping all to yourself! We handcraft
              your treats fresh and to order, then flash-freeze them for peak
              quality.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
            <h4>SCHEDULE YOUR DELIVERY</h4>
            <p>
              Whether you’re a planner or a last-minute gifter, you can schedule
              your delivery to ship 7 days a week, up to 30-days in advance.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faSmileBeam} size="3x" />
            <h4>GET EXCITED</h4>
            <p>
              Sit back & relax while we cold-pack and ship your treats to arrive
              just when you want them. We’ll notify you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
