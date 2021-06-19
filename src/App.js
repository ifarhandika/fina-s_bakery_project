import React from "react"
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Desserts from "./components/desserts/Desserts"
import Gifts from "./components/gifts/Gifts"
import Delivery from "./components/delivery/Delivery"
import VisitUs from "./components/visit-us/VisitUs"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/desserts" component={Desserts} /> 
          <Route path="/gifts" component={Gifts} /> 
          <Route path="/delivery" component={Delivery} /> 
          <Route path="/visit-us" component={VisitUs} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
