import 'cypress-file-upload'

export function checkNewUrlToContain(url) {
  cy.shouldUrlContain(url)
}

/**
 * Method used to attach files to upload containers
 * @param {*} fileName fileName should reflect file placed in /fixtures folder
 * @param {*} containerElement container element to drop file to
 */
export function dropFileToUploadContainer(fileName, containerElement) {
  containerElement().attachFile(fileName)
}

/**
 * Method used to retrieve and store any attribute from given element
 * @param {*} element element to get attr from
 * @param {*} attributeName attr name to get
 * @param {*} attributeValueName alias name used to cy.get('@attributeValueName')
 * @returns
 */
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

/**
 * Method used to retrieve and store text from given element
 * @param {*} element element to get text from
 * @param {*} textValueName alias name used to cy.get('@textValueName')
 */
export const getElementTextValue = (element, textValueName) => {
  element()
    .invoke('text')
    .then((text) => {
      const textValue = text
      cy.wrap(text).as(textValueName)
    })
}
