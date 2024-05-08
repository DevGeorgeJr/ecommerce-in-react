import React, { Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'

const HomePage = () => {
  return (
    <Fragment>
      <FeaturedProducts />
      <Categories />
    </Fragment>
  )
}

export default HomePage