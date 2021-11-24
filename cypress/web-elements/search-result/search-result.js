export const addToCartButton = () => cy.get('.ajax_add_to_cart_button')
export const firstSearchResultItemName = () =>
  cy.get('.right-block > h5 > .product-name').first()
export const firstSearchResultItemPrice = () => cy.get('.product-price').first()
export const searchResultItem = () => cy.get('.product-container')
export const searchResultList = () => cy.get('.product_list')
