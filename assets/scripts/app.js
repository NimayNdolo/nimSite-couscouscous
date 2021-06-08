'use strict'

const events = require('./auth/events')

$(() => {
  $('.subnav').hide()
  $('.websec').hide()
  $('.filmsec').hide()
  $('.hearsec').hide()
  $('.writesec').hide()

  $('#work').on('click', function (event) {
    event.preventDefault()
    $('.introbox').hide()
    $('.websec').show()
  })
})
