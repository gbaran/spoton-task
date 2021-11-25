import {
  addToCartButton,
  productListItem,
} from '../../web-elements/product/product-list'
import {
  checkoutCartItem,
  checkoutCartQuantityIncrease,
  checkoutCartQuantityInput,
  checkoutCartSpecificProduct,
  deleteButton,
  shoppingCartSummaryTitle,
} from '../../web-elements/product/checkout-screen'
import {
  continueShoppingButton,
  multipeProductQuantityMessage,
  proceedToCheckoutButton,
  singleProductQuantityMessage,
  successIcon,
  successMessage,
} from '../../web-elements/dialog-windows/added-to-cart-window'
import {
  searchButton,
  searchInputField,
} from '../../web-elements/dashboard/header'

import { getElementAttributeValue } from '../../support/utils/general'

describe('add to cart tests', { scrollBehavior: false }, () => {
  it('adds to cart and proceeds to checkout', () => {
    // search for shirt and add it to cart
    searchInputField().type('shirt')
    searchButton().click()
    productListItem()
      .first()
      .trigger('mouseover')
      .within(() => {
        getElementAttributeValue(addToCartButton, 'data-id-product', 'shirtId')
        addToCartButton().click()
      })

    // validate add to cart window and continue shopping
    successIcon().should('be.visible')
    successMessage().should(
      'contain',
      'Product successfully added to your shopping cart',
    )
    singleProductQuantityMessage().should(
      'contain',
      'There is 1 item in your cart.',
    )
    continueShoppingButton().click()

    // search for dress and add it to cart
    searchInputField().clear().type('dress')
    searchButton().click()
    productListItem()
      .first()
      .trigger('mouseover')
      .within(() => {
        getElementAttributeValue(addToCartButton, 'data-id-product', 'dressId')
        addToCartButton().click()
      })

    // validate add to cart window and proceed to checkout
    successIcon().should('be.visible')
    successMessage().should(
      'contain',
      'Product successfully added to your shopping cart',
    )
    multipeProductQuantityMessage().should(
      'contain',
      'There are 2 items in your cart.',
    )
    proceedToCheckoutButton().click()

    // check if there are 2 items in checkout screen
    shoppingCartSummaryTitle()
      .should('be.visible')
      .and('contain', 'Shopping-cart summary')
    checkoutCartItem().its('length').should('eq', 2)

    // remove dress using id saved before
    cy.get('@dressId').then((dressId) => {
      checkoutCartSpecificProduct(dressId).within(() => {
        deleteButton().click()
      })
    })

    // increase shirt quantity
    cy.get('@shirtId').then((shirtId) => {
      checkoutCartSpecificProduct(shirtId).within(() => {
        checkoutCartQuantityIncrease().click()
        checkoutCartQuantityInput().should('have.value', 2)
      })
    })
  })
})
