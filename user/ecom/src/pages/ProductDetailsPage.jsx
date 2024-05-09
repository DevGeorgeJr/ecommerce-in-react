import React, { useEffect, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'

const ProductDetailsPage = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <Fragment>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <ProductDetails />
            <SuggestedProduct/>

            <div className="Desktop">
                <FooterDesktop />
            </div>

            <div className="Mobile">
                <FooterMobile />
            </div>

        </Fragment>
    )
}

export default ProductDetailsPage