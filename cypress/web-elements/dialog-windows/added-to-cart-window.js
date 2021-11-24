export const continueShoppingButton = () =>
  cy.get('[title="Continue shopping"]')
export const multipeProductQuantityMessage = () =>
  cy.get('.ajax_cart_product_txt_s')
export const proceedToCheckoutButton = () =>
  cy.get('[title="Proceed to checkout"]')
export const singleProductQuantityMessage = () =>
  cy.get('.ajax_cart_product_txt')
export const successIcon = () => cy.get('.icon-ok')
export const successMessage = () => cy.get('.layer_cart_product > h2')
