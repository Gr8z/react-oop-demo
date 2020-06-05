import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table, Input } from 'reactstrap'

const BillingCart = ({ updateProducts }) => {
  const [products, setProducts] = useState([
    {
      product: {
        name: 'Pencil',
        price: 100.0
      },
      quantity: 10
    },
    {
      product: {
        name: 'Apple',
        isGrocery: true,
        price: 20.0
      },
      quantity: 2
    },
    {
      product: {
        name: 'Banana',
        isGrocery: true,
        price: 20.0
      },
      quantity: 30
    }
  ])

  useEffect(() => {
    updateProducts(products)
  })

  const handleChangeName = (e, i) => {
    const prods = [...products]
    prods[i].product.name = e.target.value

    setProducts(prods)
  }

  const handleChangePrice = (e, i) => {
    const prods = [...products]
    prods[i].product.price = parseFloat(e.target.value)

    setProducts(prods)
  }

  const handleChangeQtn = (e, i) => {
    const prods = [...products]
    prods[i].quantity = parseFloat(e.target.value)

    setProducts(prods)
  }

  const handleGroceryChange = (e, i) => {
    const prods = [...products]
    prods[i].product.isGrocery = e.target.checked

    setProducts(prods)
  }

  return (
    <>
      <h3>Cart</h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Grocery?</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                <Input
                  type="text"
                  name="name"
                  value={prod.product.name}
                  onChange={e => handleChangeName(e, i)}
                />
              </td>
              <td>
                <Input
                  type="checkbox"
                  checked={prod.product.isGrocery}
                  onChange={e => handleGroceryChange(e, i)}
                />
              </td>
              <td>
                <Input
                  className="w-25"
                  type="text"
                  name="price"
                  value={prod.product.price}
                  onChange={e => handleChangePrice(e, i)}
                />
              </td>
              <td>
                <Input
                  className="w-25"
                  type="text"
                  name="quantity"
                  value={prod.quantity}
                  onChange={e => handleChangeQtn(e, i)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

BillingCart.propTypes = {
  updateProducts: PropTypes.func
}

export default BillingCart
