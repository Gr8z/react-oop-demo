import React from 'react'

import BillingUser from './BillingUser'
import BillingCart from './BillingCart'
import BillingTotals from './BillingTotals'

import User from '../classes/User'
import Cart from '../classes/Cart'

const Main = () => {
  const user = new User()
  const cart = new Cart(user)

  const handleUser = (isEmployee, isAffiliate, firstPurchaseDate) => {
    user.isEmployee = isEmployee
    user.isAffiliate = isAffiliate
    user.firstPurchaseDate = firstPurchaseDate
  }

  const handleProducts = products => {
    cart.products = products
  }

  return (
    <>
      <h1>React OOP Demo</h1>
      <BillingUser updateUser={handleUser} />
      <BillingCart updateProducts={handleProducts} />
      <BillingTotals cart={cart} />
    </>
  )
}

export default Main
