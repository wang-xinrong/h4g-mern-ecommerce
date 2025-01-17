import React from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { ProductConfirm } from '../features/products/components/ProductConfirm'
import { Footer } from '../features/footer/Footer'

export const ProductConfirmPage = () => {
  return (
    <>
    <Navbar/>
    <ProductConfirm/>
    <Footer/>
    </>
  )
}