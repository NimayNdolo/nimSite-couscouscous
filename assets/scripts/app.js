'use strict'

const events = require('./auth/events')

$(() => {

  // GENERAL

  $('.subnav').hide()
  $('.websec').hide()
  $('.filmsec').hide()
  $('.hearsec').hide()
  $('.writesec').hide()
  $('#mobileView').hide()

  // NAVBAR ACTIONS

  $('#home').on('click', function (event) {
    event.preventDefault()
    $('.introbox').show()
    $('.websec').hide()
  })

  $('.title').on('click', function (event) {
    event.preventDefault()
    $('.introbox').show()
    $('.websec').hide()
  })

  $('#work').on('click', function (event) {
    event.preventDefault()
    $('.introbox').hide()
    $('.websec').show()
  })

  // MOBILE TOGGLE

  if ($(window).width() <= 700) {
    $('#mobileView').show()
    $('.introbox').hide()
    $('.websec').hide()
  } else {
    $('#mobileView').hide()
  }

})
