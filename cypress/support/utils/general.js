export function checkNewUrlToContain(url) {
  cy.shouldUrlContain(url)
}

export const getElementAttributeValue = (
  element,
  attributeName,
  attributeValueName,
) =>
  element()
    .invoke('attr', attributeName)
    .then((attributeValue) => {
      const value = attributeValue
      cy.wrap(value).as(attributeValueName)
    })

export const getElementTextValue = (element, textValueName) => {
  element()
    .invoke('text')
    .then((text) => {
      const textValue = text
      cy.wrap(text).as(textValueName)
    })
}
