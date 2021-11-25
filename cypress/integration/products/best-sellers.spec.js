import {
  productList,
  productPrice,
  sortOption,
} from '../../web-elements/product/product-list'

import { bestSellersLink } from '../../web-elements/dashboard/footer'
import { checkNewUrlToContain } from '../../support/utils/general'

describe('best sellers tests', () => {
  it('validates best sellers list sorting', () => {
    // navigate to bestsellers section
    bestSellersLink().click()

    // sort by price (highest to lowest)
    sortOption().trigger('mouseover').select('price:desc')
    checkNewUrlToContain('orderby=price&orderway=desc')

    // validate price sorting
    productList().within(() => {
      let initialList = []

      productPrice()
        .each(($cell) => {
          const listElementString = $cell
            .text()
            .trim()
            .replace(/[^0-9\.]+/g, '')
          initialList.push(listElementString)
        })
        .then(() => {
          const sortedList = [...initialList].sort((a, b) => b - a)
          expect(initialList).to.be.deep.equal(sortedList)
        })
    })
  })
})
