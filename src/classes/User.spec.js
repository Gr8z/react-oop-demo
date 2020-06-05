import User from './User'
import { yearsAgoDate } from '../utils'

it('Employee discount rate is 30%', () => {
  let user = new User()
  user.isEmployee = true
  expect(user.discountRate).toBe(0.3)
})

it('Affiliate discount rate is 10%', () => {
  let user = new User()
  user.isAffiliate = true
  expect(user.discountRate).toBe(0.1)
})

it('Loyal customer discount rate is 5%', () => {
  let user = new User()
  user.firstPurchaseDate = yearsAgoDate(3)
  expect(user.discountRate).toBe(0.05)
})

it('Regular customer discount rate is 0', () => {
  let user = new User()
  expect(user.discountRate).toBe(0)
})
