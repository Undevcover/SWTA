import React from "react"
import Button from "../components/Button"

/*Renders the error page*/
const NotFound = () => {
  return (
    <div>
      <h1>NOTHING TO SEE HERE</h1>
      <h3> Feeling Lost?</h3>
      <p> Use these keys to get back on track</p>
      <div className="header__actions">
        <Button  path="/" value="Product Page"/>
        <Button  path="/add-product" value="Product Page" />
      </div>
      
    </div>
  )
}

export default NotFound
