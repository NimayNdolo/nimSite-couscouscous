'use strict'

const events = require('./auth/events')

$(() => {
  $('.subnav').hide()
  $('.websec').hide()
  $('.filmsec').hide()
  $('.hearsec').hide()
  $('.writesec').hide()

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
})
