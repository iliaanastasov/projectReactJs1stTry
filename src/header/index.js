import React, { Component } from 'react'
import './style.css'
import ball from '../public/images/soccerball.png'

class Header extends Component {
  state = {
    user: "",
    currentBalance:100,
    team:[]

  }
 render() {

    return (
      <div className="header-container">
        <a href="#home" >
          <img src={ball} alt="" />
          Fantazy League
       </a>
        <div class="right-floated">
          <a href="Team">(user)-(Current Balance)</a>
          <a href="/user/logout">Logout</a>
        </div>
      </div>
    )
  }

}
export default Header;
