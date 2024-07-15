import React from 'react'
import Header from '../header/Header'
import './style.css'
import { DropdownButton, Dropdown } from 'react-bootstrap'

function Hero() {
  return (
    <section className='hero'>
        <Header/>
        <div className='main-hero'>
            <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="logo" />
            <h1 className="fs-1">Discover the best food & drinks in Bengaluru</h1>
            <div className="search bg-white">
               <div className="d-flex gap-2 align-items-center">
               <i class="bi bi-geo-alt-fill fs-4 text-danger"></i>
               <DropdownButton id="search" title="KIDAB export promotion" varient="light">
                    <Dropdown.Item><span className="text-danger">Detect current Location</span> </Dropdown.Item>
                </DropdownButton>
               </div>
               <div className="search-input">
               <i class="bi bi-search text-secondary"></i>
                <input type="text" placeholder='Search for restaurants, cuisins or a dish ' />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Hero