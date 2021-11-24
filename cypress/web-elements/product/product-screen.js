import { cyId, cyProp } from '../../support/utils/getters'

export const productName = () => cy.get(cyProp('name'))
export const productPrice = () => cy.get(cyId('our_price_display'))
export const productImage = () => cy.get(cyId('bigpic'))
