import {
  addToCompareButton,
  compareButton,
  compareButtonCounter,
  productList,
  productListItem,
  productName,
} from '../../web-elements/product/product-list'
import {
  comparedProductName,
  productBlock,
} from '../../web-elements/product/product-comparison-screen'
import {
  searchButton,
  searchInputField,
} from '../../web-elements/dashboard/header'

import { getElementTextValue } from '../../support/utils/general'

describe('product comparison tests', () => {
  it('compares two clothing items', { scrollBehavior: false }, () => {
    searchInputField().type('dress')
    searchButton().click()
    productList().should('exist')

    productListItem()
      .first()
      .trigger('mouseover')
      .within(() => {
        getElementTextValue(productName, 'firstProductName')
        addToCompareButton().click()
      })
      .then(() => {
        compareButton().should('not.be.disabled')
        compareButtonCounter().contains(1).should('be.visible')
      })

    productListItem()
      .eq(1)
      .trigger('mouseover')
      .within(() => {
        getElementTextValue(productName, 'secondProductName')
        addToCompareButton().click()
      })
      .then(() => {
        compareButton().should('not.be.disabled')
        compareButtonCounter().contains(1).should('be.visible')
      })

    // go to compare screen and check for both products
    compareButton().first().click()
    productBlock().should('be.visible').and('have.length', 2)
    cy.get('@firstProductName').then(($name) => {
      comparedProductName().contains($name.trim()).should('be.visible')
    })
    cy.get('@secondProductName').then(($name) => {
      comparedProductName().contains($name.trim()).should('be.visible')
    })
  })
})
