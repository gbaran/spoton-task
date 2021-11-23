import { searchButton, searchInputField } from '../web-elements/header/header'

it('basic setup', () => {
  searchInputField().type('shirt')
  searchButton().click()
})
