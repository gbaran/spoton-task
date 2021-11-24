import {
  firstProductName,
  firstProductPrice,
  productList,
  productListItem,
} from '../../web-elements/product/product-list'
import {
  productImage,
  productName,
  productPrice,
} from '../../web-elements/product/product-screen'
import {
  searchButton,
  searchInputField,
} from '../../web-elements/dashboard/header'

import { getElementTextValue } from '../../support/utils/general'

describe('recruitment task for spotOn', () => {
  it('search for and view a shirt', () => {
    // search for 'shirt' using search bar
    searchInputField().type('shirt')
    searchButton().click()

    // validate search result list
    productList().should('exist')

    // save some values to compare (first 'shirt' search result)
    getElementTextValue(firstProductName, 'productName')
    getElementTextValue(firstProductPrice, 'productPrice')

    // proceed to the first 'shirt' search result
    productListItem()
      .first()
      .trigger('mouseover')
      .then(() => {
        cy.get('.lnk_view').click()
      })

    // check product image
    productImage().should('be.visible')

    // compare product parameters with saved values
    // this could be extracted to some general text comparison helper method
    cy.get('@productName').then((name) => {
      productName().should('be.visible').and('have.text', name.trim())
    })
    cy.get('@productPrice').then((price) => {
      productPrice().should('be.visible').and('have.text', price.trim())
    })
  })
})
