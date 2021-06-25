'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  // pass the data to an api function
  api.signUp(data)
    // handle success
    .then(ui.onSignUpSuccess)
    // handle failure
    .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  // pass the data to an api function
  api.signIn(data)
    // handle success
    .then(ui.onSignInSuccess)
    // handle failure
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // get the data from the form
  const form = event.target
  const data = getFormFields(form)
  // pass the data to an api function
  api.changePassword(data)
    // handle success
    .then(ui.onChangePasswordSuccess)
    // handle failure
    .catch(ui.onChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword
}
