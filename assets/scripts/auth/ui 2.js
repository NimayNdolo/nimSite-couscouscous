'use strict'
const store = require('./../store')
const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully')
  $('#sign-in').trigger('reset')
  $('#change-password').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}
const onChangePasswordSuccess = function () {
  $('#message').text('Change password successfully')
  $('#change-password').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Change password failed')
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
