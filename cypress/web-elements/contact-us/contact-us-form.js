import { cyId } from '../../support/utils/getters'

export const attachFileContainer = () => cy.get(cyId('fileUpload'))
export const emailInputField = () => cy.get(cyId('email'))
export const emailInputFieldError = () => cy.get('.form-error')
export const emailInputFieldOk = () => cy.get('.form-ok')
export const errorMessage = () => cy.get('.alert-danger')
export const messageInputField = () => cy.get(cyId('message'))
export const orderReferenceInputField = () => cy.get(cyId('id_order'))
export const subjectOption = () => cy.get(cyId('id_contact'))
export const submitButton = () => cy.get(cyId('submitMessage'))
export const successMessage = () => cy.get('.alert-success')
