import { cyId } from '../../support/utils/getters'

export const checkoutCartItem = () => cy.get('.cart_item')
export const checkoutCartQuantityIncrease = () => cy.get('.cart_quantity_up')
export const checkoutCartQuantityInput = () => cy.get('.cart_quantity_input')
export const checkoutCartSpecificProduct = (productId) =>
  cy.get(`[id^="product_${productId}_"]`)
export const deleteButton = () => cy.get('.cart_quantity_delete')
export const shoppingCartSummaryTitle = () => cy.get(cyId('cart_title'))
