import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input } from 'reactstrap'

const BillingUser = ({ updateUser }) => {
  const [isEmployee, setIsEmployee] = useState(false)
  const [isAffiliate, setIsAffiliate] = useState(false)
  const [firstPurchaseDate, setFirstPurchaseDate] = useState(Date())

  useEffect(() => {
    updateUser(isEmployee, isAffiliate, firstPurchaseDate)
  })

  return (
    <Form>
      <FormGroup tag="fieldset">
        <legend>User Options</legend>
        <FormGroup check>
          <Label check>
            <Input
              name="isEmployee"
              type="checkbox"
              onChange={() => setIsEmployee(!isEmployee)}
            />{' '}
            Employee
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              name="isAffiliate"
              type="checkbox"
              onChange={() => setIsAffiliate(!isAffiliate)}
            />{' '}
            Affiliate
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="firstPurchaseDate">First Purchase</Label>
          <Input
            type="date"
            name="firstPurchaseDate"
            id="firstPurchaseDate"
            onChange={e => setFirstPurchaseDate(e.target.valueAsDate)}
          />
        </FormGroup>
      </FormGroup>
    </Form>
  )
}

BillingUser.propTypes = {
  updateUser: PropTypes.func
}

export default BillingUser
