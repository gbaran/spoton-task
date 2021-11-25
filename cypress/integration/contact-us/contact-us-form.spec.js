import {
  attachFileContainer,
  emailInputField,
  emailInputFieldError,
  emailInputFieldOk,
  errorMessage,
  messageInputField,
  orderReferenceInputField,
  subjectOption,
  submitButton,
  successMessage,
} from '../../web-elements/contact-us/contact-us-form'
import {
  getMessage,
  getRandomInt,
} from '../../support/generators/random-general-data'

import { contactUsLink } from '../../web-elements/dashboard/footer'
import { customerService } from '../../constants/contact-us/subject-heading-options'
import { dropFileToUploadContainer } from '../../support/utils/general'
import { getEmail } from '../../support/generators/random-customer-data'

describe('contact us form tests', () => {
  const emailForm = {
    address: getEmail(),
    file: 'green.png',
    invalidAddress: getEmail().replace('@', ''),
    message: getMessage(),
    orderReference: getRandomInt(1, 100),
  }

  const validationMessage = {
    emptyMessage: 'The message cannot be blank.',
    emptySubject: 'Please select a subject from the list provided.',
    invalidEmail: 'Invalid email address',
    success: 'Your message has been successfully sent to our team.',
  }

  it('sends a message', () => {
    contactUsLink().click()
    subjectOption().trigger('mouseover').select(customerService)

    // fill contact form with data and attach file
    emailInputField().type(emailForm.address)
    orderReferenceInputField().type(emailForm.orderReference)
    dropFileToUploadContainer(emailForm.file, attachFileContainer)
    messageInputField().type(emailForm.message)

    // submit contact form
    submitButton().click()
    successMessage().contains(validationMessage.success).should('be.visible')
  })

  it('checks form validation', () => {
    contactUsLink().click()

    // empty email validation
    submitButton().click()
    errorMessage().contains(validationMessage.invalidEmail).should('be.visible')

    // invalid email validation
    emailInputField().type(emailForm.invalidAddress)
    emailInputField().blur()
    emailInputFieldError().should('exist')
    submitButton().click()
    errorMessage().contains(validationMessage.invalidEmail).should('be.visible')

    // empty message validation and ok check on email
    emailInputField().clear().type(emailForm.address)
    emailInputField().blur()
    emailInputFieldOk().should('be.visible')
    submitButton().click()
    errorMessage().contains(validationMessage.emptyMessage).should('be.visible')

    // empty subject validation
    messageInputField().type(emailForm.message)
    submitButton().click()
    errorMessage().contains(validationMessage.emptySubject).should('be.visible')
  })
})
