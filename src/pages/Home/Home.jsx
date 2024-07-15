import React from 'react'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/categories/Categories'
import Collection from '../../components/collections/Collection'

function Home() {
  return (
    <div>
        <Hero/>
        <Categories/>
        <Collection/>
    </div>
  )
}

export default Home