import React from 'react'
import Navbar from '../components/Navbar'
import moneyIcon from "../assets/purplemoney.jpg"

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='about-main-div'>
          <img className= "about-icon" src={moneyIcon}/>
          <div className='about-h-span'>
            <h2>About page</h2>
            <br/>
            <span>
              <p>This is a website that uses React with  Typescript for rendering user page. <br/>The main page maps 
                through cryptocurrencies (hardcoded for now) and displays <br/>them in a form of sortable table. In the future
                I will be implementing an API using <br/>Express 
                and subpage with charts displaying statistics.</p>

            </span>
            
          </div>

        </div>
    </div>
  )
}

export default About