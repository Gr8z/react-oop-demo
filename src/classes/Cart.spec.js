import User from './User'
import Cart from './Cart'

import { yearsAgoDate } from '../utils'

const employee = new User({ isEmployee: true })
const affiliate = new User({ isAffiliate: true })
const loyalCustomer = new User({ firstPurchaseDate: yearsAgoDate(3) })

it('No Discount on Grocery bill under $100', () => {
  const cart = new Cart()

  const bread = {
    name: 'Bread',
    isGrocery: true,
    price: 5.0
  }

  const apples = {
    name: 'Apples',
    isGrocery: true,
    price: 4.0
  }

  cart.add(bread, 4)
  cart.add(apples, 2.5)

  const total = 30

  expect(cart.subtotal).toBe(total)
  expect(cart.total).toBe(total)

  cart.user = employee
  expect(cart.total).toBe(total)

  cart.user = affiliate
  expect(cart.total).toBe(total)

  cart.user = loyalCustomer
  expect(cart.total).toBe(total)
})

it('$5 Discount on $105 Grocery bill', () => {
  const cart = new Cart()
  const product = {
    name: 'Food',
    isGrocery: true,
    price: 110
  }
  cart.add(product)

  const discount = 5
  const total = product.price - discount

  expect(cart.subtotal).toBe(product.price)
  expect(cart.discount).toBe(discount)
  expect(cart.total).toBe(total)
})

it('$45 discount on $990 purchase (no grocery)', () => {
  const cart = new Cart()
  const product = {
    name: 'Not Food',
    price: 990
  }
  cart.add(product, 1)

  const discount = 45
  const total = product.price - discount

  expect(cart.subtotal).toBe(product.price)
  expect(cart.discount).toBe(discount)
  expect(cart.total).toBe(total)
})

it('Employee gets 30% discount and volume discount', () => {
  const cart = new Cart({ user: employee })
  const product = {
    name: 'Not Food',
    price: 1000.0
  }

  cart.add(product)

  const userDiscount = 300
  const volumeDiscount = 50

  const discount = userDiscount + volumeDiscount
  const total = product.price - discount

  expect(cart.subtotal).toBe(product.price)
  expect(cart.discount).toBe(discount)
  expect(cart.total).toBe(total)
})

it('Affiliate gets 10% discount and volume discount', () => {
  const cart = new Cart({ user: affiliate })
  const product = {
    name: 'Not Food',
    price: 1000.0
  }
  cart.add(product)

  const userDiscount = 100
  const volumeDiscount = 50

  const discount = userDiscount + volumeDiscount
  const total = product.price - discount

  expect(cart.subtotal).toBe(product.price)
  expect(cart.discount).toBe(discount)
  expect(cart.total).toBe(total)
})

it('Customer for 2 years gets 5% discount and volume discount', () => {
  const cart = new Cart({ user: loyalCustomer })
  const product = {
    name: 'Not Food',
    price: 1000.0
  }
  cart.add(product)

  const userDiscount = 50
  const volumeDiscount = 50

  const discount = userDiscount + volumeDiscount
  const total = product.price - discount

  expect(cart.subtotal).toBe(product.price)
  expect(cart.discount).toBe(discount)
  expect(cart.total).toBe(total)
})

it('Regular customer only receives volume discount', () => {
  const cart = new Cart()
  const product = {
    name: 'Not Food',
    price: 1000.0
  }
  cart.add(product)

  const discount = 50
  const total = product.price - discount

  expect(cart.userDiscount).toBe(0)
  expect(cart.subtotal).toBe(product.price)
  expect(cart.discount).toBe(discount)
  expect(cart.total).toBe(total)
})

it('No percentage discount on groceries', () => {
  const cart = new Cart()
  const product = {
    name: 'Not Food',
    price: 100.0
  }
  const food = {
    name: 'Food',
    isGrocery: true,
    price: 100.0
  }
  cart.add(product)
  cart.add(food, 2)

  // regular customer
  expect(cart.userDiscount).toBe(0)
  expect(cart.volumeDiscount).toBe(15)
  expect(cart.discount).toBe(15)
  expect(cart.total).toBe(285)

  // employee
  cart.user = employee
  expect(cart.userDiscount).toBe(30)
  expect(cart.discount).toBe(45)
  expect(cart.total).toBe(255)

  // affiliate
  cart.user = affiliate
  expect(cart.userDiscount).toBe(10)
  expect(cart.discount).toBe(25)
  expect(cart.total).toBe(275)

  // loyal customer
  cart.user = loyalCustomer
  expect(cart.userDiscount).toBe(5)
  expect(cart.discount).toBe(20)
  expect(cart.total).toBe(280)
})
