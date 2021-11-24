import {
  firstSearchResultItemName,
  firstSearchResultItemPrice,
  searchResultItem,
  searchResultList,
} from '../../web-elements/search-result/search-result'
import {
  productImage,
  productName,
  productPrice,
} from '../../web-elements/product/product-screen'
import {
  searchButton,
  searchInputField,
} from '../../web-elements/header/header'

import { getElementTextValue } from '../../support/utils/general'

describe('recruitment task for spotOn', () => {
  it('search for and view a shirt', () => {
    // search for 'shirt' using search bar
    searchInputField().type('shirt')
    searchButton().click()

    // validate search result list
    searchResultList().should('exist')

    // save some values to compare (first 'shirt' search result)
    getElementTextValue(firstSearchResultItemName, 'productName')
    getElementTextValue(firstSearchResultItemPrice, 'productPrice')

    // proceed to the first 'shirt' search result
    searchResultItem()
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
