import React from 'react'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/categories/Categories'
import Collection from '../../components/collections/Collection'
import Mainbutton from '../../utils/buttons/mainBtn/Mainbutton'
import { toast } from 'react-toastify'

function Home() {
  const alerter = () =>{
    toast.info("this is the button")
  }
  return (
    <div>
      <br />
        <Hero/>
        <Categories/>
        <Collection/>
    </div>
  )
}

export default Home