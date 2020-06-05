import PropTypes from 'prop-types'
import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const BillingTotals = ({ cart }) => {
  return (
    <>
      <h3>Totals</h3>
      <ListGroup flush>
        <ListGroupItem>Subtotal: {cart.subtotal} AED</ListGroupItem>
        <ListGroupItem>
          Volume Discount: {cart.volumeDiscount} AED
        </ListGroupItem>
        <ListGroupItem>User Discount: {cart.userDiscount} AED</ListGroupItem>
        <ListGroupItem>Total Discount: {cart.discount} AED</ListGroupItem>
        <ListGroupItem>Total: {cart.total} AED</ListGroupItem>
      </ListGroup>
    </>
  )
}

BillingTotals.propTypes = {
  cart: PropTypes.shape({
    discount: PropTypes.number,
    subtotal: PropTypes.number,
    total: PropTypes.number,
    userDiscount: PropTypes.number,
    volumeDiscount: PropTypes.number
  })
}

export default BillingTotals
