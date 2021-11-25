export function getMessage() {
  return cy.faker.lorem.text()
}

export function getRandomInt(min, max) {
  return cy.faker.random.number({ min, max })
}
