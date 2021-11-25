import { cyId } from '../../support/utils/getters'

export const addToCartButton = () => cy.get('.ajax_add_to_cart_button')
export const addToCompareButton = () => cy.get('.add_to_compare')
export const compareButton = () => cy.get('.bt_compare')
export const compareButtonCounter = () => cy.get('.total-compare-val')
export const firstProductName = () =>
  cy.get('.right-block > h5 > .product-name').first()
export const firstProductPrice = () => cy.get('.product-price').first()
export const productList = () => cy.get('.product_list')
export const productListItem = () => cy.get('.product-container')
export const productPrice = () =>
  cy.get('.right-block > .content_price > .price')
export const productName = () => cy.get('.product-name')
export const sortOption = () => cy.get(cyId('selectProductSort'))
