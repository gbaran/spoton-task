import { cyId, cyName } from '../../support/utils/getters'

export const searchInputField = () => cy.get(cyId('search_query_top'))
export const searchButton = () => cy.get(cyName('submit_search'))
