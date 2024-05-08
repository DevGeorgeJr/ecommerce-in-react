import React, { Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import NewArrival from '../components/home/NewArrival'

const HomePage = () => {
  return (
    <Fragment>
      <FeaturedProducts />
      <NewArrival />
      <Collection />
      <Categories />
    </Fragment>
  )
}

export default HomePage