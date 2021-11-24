import {
  productList,
  productPrice,
  sortOption,
} from '../../web-elements/product/product-list'

import { bestSellersLink } from '../../web-elements/dashboard/footer'
import { checkNewUrlToContain } from '../../support/utils/general'

const { _ } = Cypress

describe('best sellers tests', () => {
  it('validates best sellers list sorting', () => {
    // navigate to bestsellers section
    bestSellersLink().click()

    // sort by price (highest to lowest)
    sortOption().trigger('mouseover').select('price:desc')
    checkNewUrlToContain('orderby=price&orderway=desc')

    // validate price sorting
    productList().within(() => {
      var initialList = []

      productPrice()
        .each(($cell) => {
          var listElementString = $cell
            .text()
            .trim()
            .replace(/[^0-9\.]+/g, '')
          initialList.push(listElementString)
        })
        .then(() => {
          var sortedList = [...initialList].sort(function (a, b) {
            return b - a
          })
          expect(initialList).to.be.deep.equal(sortedList)
        })
    })
  })
})
