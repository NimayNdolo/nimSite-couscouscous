'use strict'

const events = require('./auth/events')

$(() => {

  // GENERAL

  $('.websec').hide()
  $('.stacknav').hide()
  $('.subnav').hide()
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
    $('.stacknav').hide()
  })

  $('#work').on('click', function (event) {
    event.preventDefault()
    $('.introbox').hide()
    $('.websec').show()
    $('.stacknav').hide()
  })

  $('#stack').on('click', function (event) {
    event.preventDefault()
    $('.stacknav').show()
    $('.introbox').hide()
    $('.websec').hide()
    $('.stackGif').trigger('reset')

  })

  // MOBILE TOGGLE

  if ($(window).width() <= 700) {
    $('#mobileView').show()
    $('.introbox').hide()
    $('.websec').hide()
    $('.linkNav').hide()
  } else {
    $('#mobileView').hide()
  }

})
